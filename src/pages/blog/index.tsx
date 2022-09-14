import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { Background } from '../../background/Background';
import Post from '../../components/Post';
import { Meta } from '../../layout/Meta';
import { Section } from '../../layout/Section';
import { Footer } from '../../templates/Footer';
import NavBar from '../../templates/NavBar';
import { AppConfig } from '../../utils/AppConfig';

export default function About({ posts }: any) {
  return (
    <div className="antialiased text-gray-900">
      <Meta
        title={`Blog - ${AppConfig.title}`}
        description={AppConfig.description}
      />
      <Background color="bg-gray-900">
        <NavBar />
      </Background>
      <Section>
        <div className="posts grid grid-cols-3 gap-4">
          {posts.map((post: any, key: any) => (
            <Post key={key} {...post} />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('src/posts'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(
        path.join('src/posts', filename),
        'utf-8'
      );

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  return {
    props: {
      posts,
    },
  };
}
