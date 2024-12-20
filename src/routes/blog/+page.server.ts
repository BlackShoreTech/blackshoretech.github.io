import { slugFromPath } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load() {
  try {

    const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);

	const publishedPosts = posts.filter((post) => post.published).slice(0, 10);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));


    return {
      posts: publishedPosts
    };
  } catch (e) {
    throw error(500, 'Could not load blog posts');
  }
} 