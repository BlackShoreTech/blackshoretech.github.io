<script lang="ts">
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Blackshore Technology Limited',
		description:
			'Elite software engineering for impossible problems. AI alignment, application development, and special projects.',
		url: 'https://www.blackshoretech.com',
		logo: 'https://www.blackshoretech.com/logo.png',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Dublin',
			addressCountry: 'IE'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			email: 'contact@blackshoretech.com',
			contactType: 'Customer Service'
		},
		sameAs: [
			'https://github.com/blackshoretech',
			'https://linkedin.com/company/blackshore-technology'
		]
	};
</script>

<svelte:head>
	<title>Blackshore Technology Limited — Elite Software Engineering</title>
	<meta
		name="description"
		content="Elite software engineering for impossible problems. We specialize in AI alignment, application development, and special projects for organizations that demand excellence. Based in Dublin, Ireland."
	/>
	<meta
		name="keywords"
		content="AI alignment, software engineering, AI application development, technical consulting, elite software development, Dublin, Ireland"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.blackshoretech.com/" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.blackshoretech.com/" />
	<meta property="og:title" content="Blackshore Technology Limited — Elite Software Engineering" />
	<meta
		property="og:description"
		content="Elite software engineering for impossible problems. AI alignment, application development, and special projects."
	/>
	<meta property="og:image" content="https://www.blackshoretech.com/logo.png" />
	<meta property="og:locale" content="en_IE" />
	<meta property="og:site_name" content="Blackshore Technology" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.blackshoretech.com/" />
	<meta name="twitter:title" content="Blackshore Technology Limited — Elite Software Engineering" />
	<meta
		name="twitter:description"
		content="Elite software engineering for impossible problems. AI alignment, application development, and special projects."
	/>
	<meta name="twitter:image" content="https://www.blackshoretech.com/logo.png" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<main class="relative flex min-h-screen flex-col text-white">
	<div class="relative z-10 flex flex-1 items-center justify-center px-8">
		<div class="max-w-5xl text-center">
			<h1 class="silver-text mb-16 font-serif text-7xl tracking-tight md:text-7xl">
				Blackshore Technology
			</h1>

			<div class="space-y-8 font-serif text-xl leading-relaxed text-zinc-400 md:text-2xl">
				<p>Elite software engineering for impossible problems.</p>

				<p class="text-lg md:text-xl">
					We specialize in AI alignment, application development, and special projects<br />
					for organizations that accept nothing less than excellence.
				</p>
			</div>

			<div class="mt-20">
				<a
					href="mailto:contact@blackshoretech.com"
					class="inline-block border-b border-zinc-700 pb-1 font-serif text-lg text-zinc-300 transition-colors hover:border-zinc-300 hover:text-white md:text-xl"
				>
					contact@blackshoretech.com
				</a>
			</div>
		</div>
	</div>

	<footer class="relative z-10 py-8 text-center font-serif text-sm text-zinc-600">
		<p>Dublin, Ireland</p>
	</footer>
</main>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
	}
</style>
