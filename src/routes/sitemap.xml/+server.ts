import { slugFromPath } from '$lib/utils';
import { dev } from '$app/environment';

export const prerender = true

export async function GET({ setHeaders, url }) {
    const website = dev ? url.origin : 'https://www.blackshoretech.com';
    
    // Get all blog posts
    const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
    const postPromises = Object.entries(modules).map(([path, resolver]) =>
        resolver().then(
            (post) => ({
                slug: slugFromPath(path),
                ...(post as unknown as App.MdsvexFile).metadata
            } as App.BlogPost)
        )
    );

    const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post) => post.published);

    // Create sitemap XML
    const pages = [
        '',           // home page
        '/about',     // about page
        '/blog',      // blog index
        '/demo',      // demo page
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
        .map(
            (page) => `
    <url>
        <loc>${website}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? '1.0' : '0.7'}</priority>
    </url>`
        )
        .join('')}
    ${publishedPosts
        .map(
            (post) => `
    <url>
        <loc>${website}/blog/${post.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>`
        )
        .join('')}
</urlset>`;

    setHeaders({
        'Content-Type': 'application/xml'
    });

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}