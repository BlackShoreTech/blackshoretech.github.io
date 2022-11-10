import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { Footer } from '../../components/footer/Footer';
import Post from '../../components/Post';
import { Section } from '../../components/Section';
import DefaultLayout from '../../layouts/DefaultLayout';
import { Meta } from '../../layouts/Meta';
import { AppConfig } from '../../utils/AppConfig';

function Blog({ posts }: any) {
  return (
    <div className="antialiased text-gray-900">
      <Meta
        title={`Blog - ${AppConfig.title}`}
        description={AppConfig.description}
        images={[{ url: '/assets/logo.svg' }]}
        twitter={{
          handle: '@brsc2909',
          site: '@brsc2909',
          cardType: 'summary_large_image',
        }}
      />
      <Section>
        <div className="posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post: any, key: any) => (
            <Post key={key} {...post} />
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  );
}

Blog.PageLayout = DefaultLayout;

export default Blog;

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
