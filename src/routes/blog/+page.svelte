<script lang="ts">
	interface BlogPost {
		slug: string;
		title: string;
		description: string;
		date: string;
		author: string;
	}

	let { data } = $props();
	const posts: BlogPost[] = data.posts;
</script>

<svelte:head>
	<title>Insights — Blackshore Technology Limited</title>
	<meta
		name="description"
		content="Expert insights on AI alignment, software engineering, and technical strategy from Blackshore Technology."
	/>
	<meta
		name="keywords"
		content="AI blog, software engineering insights, technical strategy, AI alignment articles"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.blackshoretech.com/blog" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.blackshoretech.com/blog" />
	<meta property="og:title" content="Insights — Blackshore Technology Limited" />
	<meta
		property="og:description"
		content="Expert insights on AI alignment, software engineering, and technical strategy."
	/>
	<meta property="og:image" content="https://www.blackshoretech.com/logo.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.blackshoretech.com/blog" />
	<meta name="twitter:title" content="Insights — Blackshore Technology Limited" />
	<meta
		name="twitter:description"
		content="Expert insights on AI alignment, software engineering, and technical strategy."
	/>
	<meta name="twitter:image" content="https://www.blackshoretech.com/logo.png" />
</svelte:head>

<main class="relative min-h-screen text-white">
	<div class="relative z-10 px-8 py-16">
		<div class="container mx-auto max-w-4xl">
			<h1 class="silver-text mb-16 font-serif text-5xl tracking-tight md:text-6xl">Insights</h1>

			<div class="space-y-12">
				{#each posts as post}
					<article class="border-b border-zinc-800 pb-12 last:border-0">
						<a href="/blog/{post.slug}" class="group block">
							<time datetime={post.date} class="font-serif text-sm text-zinc-600">
								{new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</time>
							<h2
								class="mt-3 font-serif text-2xl text-zinc-300 transition-colors group-hover:text-white md:text-3xl"
							>
								{post.title}
							</h2>
							<p class="mt-4 font-serif text-lg leading-relaxed text-zinc-500">
								{post.description}
							</p>
							<span
								class="mt-6 inline-block border-b border-zinc-700 pb-1 font-serif text-sm text-zinc-400 transition-colors group-hover:border-zinc-300 group-hover:text-zinc-300"
							>
								Read article
							</span>
						</a>
					</article>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
	}
</style>
