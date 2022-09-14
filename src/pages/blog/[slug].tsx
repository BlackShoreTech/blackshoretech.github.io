import fs from 'fs';
import path from 'path';

import React from 'react';

import matter from 'gray-matter';
import { marked } from 'marked';

import { Meta } from '../../layout/Meta';
import { PostLayout } from '../../layout/PostLayout';
import { Section } from '../../layout/Section';

type PostProps = {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
  content: string;
};

export default function PostPage({
  frontmatter: { title, date, excerpt, cover_image },
  content,
}: PostProps) {
  return (
    <>
      <Meta title={title} description={excerpt} />
      <PostLayout>
        <Section
          title={title}
          description={excerpt}
          className="prose prose-slate"
        >
          <article>
            <img src={cover_image} alt={title} />
            <div>{date}</div>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </article>
        </Section>
      </PostLayout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/posts', `${slug}.md`),
    'utf-8'
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}
