<script lang="ts">
	let { data } = $props();
	const { content: Post, metadata } = data;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: metadata.title,
		description: metadata.description,
		author: {
			'@type': 'Person',
			name: metadata.author
		},
		datePublished: metadata.date,
		publisher: {
			'@type': 'Organization',
			name: 'Blackshore Technology Limited',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.blackshoretech.com/logo.png'
			}
		},
		url: `https://www.blackshoretech.com/blog/${data.slug}`,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `https://www.blackshoretech.com/blog/${data.slug}`
		}
	};
</script>

<svelte:head>
	<title>{metadata.title} — Blackshore Technology</title>
	<meta name="description" content={metadata.description} />
	<meta name="keywords" content={metadata.keywords} />
	<meta name="author" content={metadata.author} />
	<meta name="date" content={metadata.date} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.blackshoretech.com/blog/{data.slug}" />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.blackshoretech.com/blog/{data.slug}" />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:image" content="https://www.blackshoretech.com/logo.png" />
	<meta property="article:published_time" content={metadata.date} />
	<meta property="article:author" content={metadata.author} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.blackshoretech.com/blog/{data.slug}" />
	<meta name="twitter:title" content={metadata.title} />
	<meta name="twitter:description" content={metadata.description} />
	<meta name="twitter:image" content="https://www.blackshoretech.com/logo.png" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<main class="relative min-h-screen text-white">
	<div class="relative z-10 px-8 py-16">
		<div class="container mx-auto max-w-3xl">
			<article>
				<header class="mb-12">
					<a
						href="/blog"
						class="mb-8 inline-block border-b border-zinc-700 pb-1 font-serif text-sm text-zinc-400 transition-colors hover:border-zinc-300 hover:text-zinc-300"
					>
						← Back
					</a>
					<h1 class="silver-text mb-6 font-serif text-4xl tracking-tight md:text-5xl">
						{metadata.title}
					</h1>
					<div class="flex items-center font-serif text-sm text-zinc-600">
						<time datetime={metadata.date}>
							{new Date(metadata.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
						<span class="mx-3">•</span>
						<span>{metadata.author}</span>
					</div>
				</header>

				<div class="prose prose-invert max-w-none">
					<Post />
				</div>
			</article>
		</div>
	</div>
</main>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
	}

	:global(.prose) {
		--tw-prose-body: theme('colors.zinc.400');
		--tw-prose-headings: theme('colors.zinc.300');
		--tw-prose-links: theme('colors.zinc.300');
		--tw-prose-bold: theme('colors.zinc.300');
		--tw-prose-counters: theme('colors.zinc.500');
		--tw-prose-bullets: theme('colors.zinc.600');
		--tw-prose-hr: theme('colors.zinc.800');
		--tw-prose-quotes: theme('colors.zinc.400');
		--tw-prose-quote-borders: theme('colors.zinc.700');
		--tw-prose-captions: theme('colors.zinc.500');
		--tw-prose-code: theme('colors.zinc.300');
		--tw-prose-pre-code: theme('colors.zinc.300');
		--tw-prose-pre-bg: theme('colors.zinc.900');
		--tw-prose-th-borders: theme('colors.zinc.800');
		--tw-prose-td-borders: theme('colors.zinc.800');
		font-family: theme('fontFamily.serif');
		font-size: 1.125rem;
		line-height: 1.8;
	}

	:global(.prose h1),
	:global(.prose h2),
	:global(.prose h3),
	:global(.prose h4),
	:global(.prose h5),
	:global(.prose h6) {
		font-family: theme('fontFamily.serif');
		font-weight: 400;
		letter-spacing: -0.02em;
	}

	:global(.prose a) {
		text-decoration: none;
		border-bottom: 1px solid theme('colors.zinc.700');
		transition: all 0.2s;
	}

	:global(.prose a:hover) {
		color: theme('colors.white');
		border-color: theme('colors.zinc.300');
	}

	:global(.prose pre) {
		background-color: theme('colors.zinc.900');
		border: 1px solid theme('colors.zinc.800');
		border-radius: 0;
	}

	:global(.prose code) {
		background-color: theme('colors.zinc.900');
		border: 1px solid theme('colors.zinc.800');
		border-radius: 0;
		padding: 0.125rem 0.375rem;
		font-size: 0.9em;
	}

	:global(.prose pre code) {
		background-color: transparent;
		border: none;
		padding: 0;
	}
</style>
