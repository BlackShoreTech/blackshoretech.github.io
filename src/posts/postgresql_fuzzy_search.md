---
title: 'PostgreSQL Fuzzy Text Search: Not so fuzzy to fuzziest'
date: June 7, 2022
excerpt: ''
cover_image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1654533752867/bDBd4SD-S.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
---
So you have a bunch of data that comes from some human source (Free text form fields, reviews, blogs, classified ads, social media) and you want to do some analysis on it. but with people being the way they are, you're going to have some problems:
1. A lot of words are commonly miss-spelled (definitely-> definitly etc).
2. Regional differences. e.g American and British English (color/colour, analyse/analyze)
3. Creative ways of spelling to add dramatic effect. (heyyy, whaaaaat!, noooo!)

All of this, plus more will affect your results and make it difficult to do any accurate analysis of the data (such as grouping similar topics together, etc). Luckily PostgreSQL comes packaged with a number of really useful tools that make life a lot easier for us. This is a complex topic and I'm only going to touch on the basics. But there is enough here to cover most basic and possibly some more complex use-cases.  

## Simple Pattern matching (A little Fuzzy)
#### LIKE
Useful when you have a good idea of what the data and queries look like but it's difficult to create something generic enough to be useful in a general text dataset. With this, you only have two ways to match the text. `%` is used as a wildcard for 0 or more characters of any value, and `_` matches a single character of any value.

 - `LIKE`: use wildcards and character substitution, Case sensitive
```sql
SELECT 'Hello world' LIKE 'He__o %';  -- TRUE
```
 - `ILIKE`: use wildcards and character substitution, Case insensitive
```sql
SELECT 'Hello world' ILIKE 'h_llo _%'; -- TRUE
```
 - `NOT LIKE`/`NOT ILIKE`: inverse of LIKE or ILIKE
```sql
SELECT 'Hello world' NOT ILIKE '%_llo world%'; -- FALSE
```

#### Regex
A little more advanced than the "LIKE" operator. With regex, you have a lot more control over the pattern matching. PostgreSQL comes with two standard ways to do this. 
 - `[NOT] SIMILAR TO`: Uses a simpler SQL standard expression syntax which is kind of like a mix between the LIKE syntax and POSIX regular expressions. You can prepend `NOT` to negate the expression.
```sql
SELECT 'Hello world' SIMILAR TO 'H(e|a)l+o %'; --TRUE
```
 - `~`/`!~`/`~*`/`!~*`: More powerful POSIX syntax that you may already be familiar with in other languages. `*` makes the expressions case-insensitive. `!` negates the expression
```sql
SELECT 'Hello world' ~ '^H(e|a)l{1,2}o [a-zA-Z]{5}$'; -- TRUE
```

### Improving performance
In certain scenarios it's possible to speed up your queries using a special operator class for a BTREE index. `text_pattern_ops` and `varchar_pattern_ops` allow you to index a text or varchar field. However, this is only effective if your queries are *left-anchored* (No leading wildcard) e.g `WHERE text_fields LIKE 'hell_ %'`
 

I've only covered the basics of what you can do with regex and PostgreSQL, so I suggest looking at the docs below to learn more. 

**See:** [PostgreSQL Docs -> pattern-matchine](https://www.postgresql.org/docs/current/functions-matching.html)

## Text Search Vectors (Fuzzy(ish))
This is probably the most efficient option for performing a full-text search. It works by removing all the stop words (it, the, as, by, ...) and duplicates from your text and reducing each word into its main component. For example *quick*, *quickly* just becomes *quick* and *product*, *production*, *products* becomes *product*. This provides a small bit of fuzziness to results as the query does not need the exact word. One caveat with tsvectors is that to use it effectively you need to know the language of the text. you can use the `'simple'` config option but you lose a lot of the efficiencies. 

The first function you'll need is `to_tsvector(config, text)`. The result of this is a special datatype `tsvector` that contains each component along with its index in the original text.

```sql
select to_tsvector('english', 'the quick brown fox ran quickly to the other foxes');
               to_tsvector                
-------------------------------------
 'brown':3 'fox':4,10 'quick':2,6 'ran':5
(1 row)
```

The second thing you need is the query generator, which comes in a few different flavors
 - `to_tsquery(config, text) -> tsquery`: Creates a basic query from a single token or multiple if
used with boolean operators.
```sql
SELECT to_tsquery('english', 'hello');  --> 'hello'
-- OR
SELECT to_tsquery('english', 'hello & worlds');  --> 'hello' & 'world'
```

 - `plainto_tsquery(config, text) -> tsquery`: Accepts a more generic search term. by default each word in the query is an "&" operation
```sql
SELECT plainto_tsquery('english', 'hello world'); --> 'hello' & 'world'
```
 - `websearch_to_tsquery(config, text) -> tsquery`: This one is a bit more sophisticated and my favourite. It uses a google type syntax for searching.
```sql
SELECT websearch_to_tsquery('simple', '"hello there" -world');  -->  'hello' <-> 'there' & !'world'
```

### Example usage
```sql
SELECT message FROM mock_data
WHERE 
    to_tsvector('english', message) 
    @@ 
    websearch_to_tsquery('english', 'product killer -content')
LIMIT 5; 
             message             
---------------------------------
 productize killer architectures
 productize killer synergies
(2 rows)
```

### Improving performance
To get some really good performance on your queries. Create a generated column with the tsvector data and then add a GIN index to that column. 
```sql
ALTER TABLE mock_data 
    ADD COLUMN ts_message_col tsvector 
    GENERATED ALWAYS AS (to_tsvector('english', message)) 
    STORED;

CREATE INDEX idx_tsvector_message ON mock_data USING GIN(ts_message_col);
```
```sql
SELECT message FROM mock_data
WHERE 
    ts_message_col @@ websearch_to_tsquery('english', 'product or content')
LIMIT 5; 
              message              
-----------------------------------
 productize extensible initiatives
 target value-added content
 productize visionary content
 monetize proactive content
 synthesize cross-media content
(5 rows)
```

## Trigrams (Fuzzier)
> [pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html) module required: `CREATE extension pg_trgm;`

As the name suggests, a trigram is a series of three consecutive characters from a string. For example, take the string *"Hello world".*
```sql
SELECT show_trgm('Hello world');
                           show_trgm                           
---------------------------------------------------------------
 {"  h","  w"," he"," wo",ell,hel,"ld ",llo,"lo ",orl,rld,wor}
```
In PostgreSQL, trigrams are used to generate a similarity score between two strings. 
[pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html) provides us with three functions for this:
 - `similarity(string, string)`: Similarity between the whole first and second string
```sql
SELECT similarity('hello', 'Helo world'); --> 0.30769232
-- OR
SELECT 1 - ('hello' <-> 'Helo world');  --> 0.307692289352417
```
 - `word_similarity(string, string)`: The greatest similarity between the first string and any substring of the second string
```sql
SELECT word_similarity('hello', 'Helo world'); --> 0.5714286
-- OR
SELECT 1 - ('hello' <<-> 'Helo world'); --> 0.5714285969734192
```
 - `strict_word_similarity(string, string)`: The greatest similarity between the first string and any whole word in the second string
```sql
SELECT strict_word_similarity('hello', 'Helo world'); --> 0.5714286
-- OR
SELECT 1 - ('hello' <<<-> 'Helo world'); --> 0.5714285969734192
```

#### Or if you want the boolean results. 
```sql
SELECT ('hello' % 'Helo world'); --> similarity TRUE
SELECT ('hello' <% 'Helo world'); --> word_similarity FALSE
SELECT ('hello' <<% 'Helo world'); --> strict_word_similarity TRUE
```
The result of this depends on the following GUC parameters respectively
- `pg_trgm.similarity_threshold` (default 0.3)
- `pg_trgm.word_similarity_threshold` (default 0.6)
- `pg_trgm.strict_word_similarity_threshold` (default 0.5)

### Improving performance
Conveniently pg_trgm module provides GiST and GIN index operator classes that allow you to create an index over a text column. I haven't tested this out fully but apparently, the GIST index provides better performance. 
```sql
CREATE INDEX trgm_idx_text_column ON test_table USING GIST (text_column gist_trgm_ops);
-- OR
CREATE INDEX trgm_idx_text_column ON test_table USING GIN (text_column gin_trgm_ops);
```



**See:** [PostgreSQL Docs: pg_trgm](https://www.postgresql.org/docs/current/pgtrgm.html)

## Levenshtein distance (Fuzzier)
>[fuzzystrmatch](https://www.postgresql.org/docs/current/fuzzystrmatch.html) module required: `CREATE extension fuzzystrmatch;`

Levenshtein distance is a measure of the similarity between two strings, measured in terms of the number of characters that need to be changed in order to turn one string into the other. 

```sql
SELECT 
    first_name, 
    levenshtein(first_name, 'Bobby') AS difference FROM mock_data
WHERE levenshtein(first_name, 'Bobby') < 3
ORDER BY 2
LIMIT 5;
 first_name | difference 
------------+------------
 Bobby      |          0
 Bobbi      |          1
 Bobbi      |          1
 Bibby      |          1
 Toby       |          2
(5 rows)
```
### Performance Improvements
One of the issues with the Levenshtein method is that there is no way to index it as the index would need to know the input. However, there is something we can do. We can reduce the number of records it has to process by combining it with one of the more fuzzy options below.


**See:** [PostgreSQL Docs: fuzzystrmatch](https://www.postgresql.org/docs/current/fuzzystrmatch.html#id-1.11.7.24.7)

## Phonetic similarity (Very Fuzzy)
>[fuzzystrmatch](https://www.postgresql.org/docs/current/fuzzystrmatch.html) module required: `CREATE extension fuzzystrmatch;`

For me, I found these next couple of methods particularly interesting. Instead of measuring how similar words are to each other in terms of individual characters. We can actually compare them by how they sound when they are spoken.
fuzzystrmatch provides three functions out of the box for this.
 - `soundex(string) -> text`: converts a string to its Soundex code.
```sql
SELECT soundex('Anne'), soundex('Ann'), difference('Anne', 'Ann');
 soundex | soundex | difference 
---------+---------+------------
 A500    | A500    |          4
(1 row)
```
 - `metaphone(string, max_output_length) -> text`: like Soundex, is based on the idea of constructing a representative code for an input string.
```sql
SELECT metaphone('brendan', 10), metaphone('brandon', 10);
 metaphone | metaphone 
-----------+-----------
 BRNTN     | BRNTN
(1 row)
```
 - `dmetaphone(string) -> text`/`dmetaphone_alt(string) -> text: computes two “sounds like” strings for a given input string — a “primary” and an “alternate”. In most cases, they are the same, but for non-English names especially they can be a bit different, depending on pronunciation. These functions compute the primary and alternate codes
```sql
SELECT dmetaphone_alt('brendan'), dmetaphone('Brandon');
 dmetaphone_alt | dmetaphone 
----------------+------------
 PRNT           | PRNT
(1 row)
```

### performance improvements
Each of these methods can be indexed using a normal function based index
```sql
CREATE INDEX idx_sdx_first_name ON mock_data (soundex(first_name));
--OR
CREATE INDEX idx_mtf_first_name ON mock_data (metaphone(first_name, 10));
--OR
CREATE INDEX idx_dmtf_first_name ON mock_data (dmetaphone(first_name));
```
 I mentioned above that we can improve the Levenshtein method by combining it with one of these methods. Once you've indexed the column for one of the phonetics functions you can use that to reduce the dataset and use Levenshtein to finish the filtering
```sql
SELECT 
    first_name, 
    levenshtein(first_name, 'Bobby') AS difference FROM mock_data
WHERE 
    soundex(first_name) = soundex('bobby')
AND 
    levenshtein(first_name, 'Bobby') < 3
ORDER BY 2
LIMIT 5;
 first_name | difference 
------------+------------
 Bobby      |          0
 Bobbi      |          1
 Bobbi      |          1
 Bibby      |          1
 Bobbie     |          2
(5 rows)

``` 

**See:** [PostgreSQL Docs: fuzzystrmatch](https://www.postgresql.org/docs/current/fuzzystrmatch.html)