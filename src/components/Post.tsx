import React from 'react';

import Link from 'next/link';

export default function Post({ frontmatter, slug }: any) {
  return (
    <div className="border rounded-md px-5 py-5">
      <Link href={`/blog/${slug}`} passHref>
        <div>
          <img src={frontmatter.cover_image} alt={frontmatter.title} />
          <h1>{frontmatter.title}</h1>
          <h3>{frontmatter.excerpt}</h3>
        </div>
      </Link>
    </div>
  );
}
