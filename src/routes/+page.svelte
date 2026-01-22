<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Blackshore Technology Limited',
		description:
			'Boutique software agency specializing in AI systems, alignment research, and production applications.',
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

	const services = [
		{
			title: 'AI Applications',
			description:
				'End-to-end development of AI-powered products. From LLM integrations to custom ML pipelines, we build systems that work reliably at scale.'
		},
		{
			title: 'Alignment Research',
			description:
				'Technical research on AI safety and alignment. We work on interpretability, robustness, and ensuring AI systems behave as intended.'
		},
		{
			title: 'Technical Architecture',
			description:
				'System design for complex, high-stakes applications. We specialize in architectures that prioritize reliability, security, and maintainability.'
		},
		{
			title: 'Special Projects',
			description:
				'Unconventional technical challenges that require deep expertise and creative problem-solving. The projects others can\'t or won\'t take on.'
		}
	];
</script>

<svelte:head>
	<title>Blackshore Technology Limited — AI Systems & Software Engineering</title>
	<meta
		name="description"
		content="Boutique software agency specializing in AI systems, alignment research, and production applications. Deep expertise in machine learning, safety, and scalable architecture. Dublin, Ireland."
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
	<meta property="og:title" content="Blackshore Technology Limited — AI Systems & Software Engineering" />
	<meta
		property="og:description"
		content="Boutique software agency specializing in AI systems, alignment research, and production applications. Dublin, Ireland."
	/>
	<meta property="og:image" content="https://www.blackshoretech.com/logo.png" />
	<meta property="og:locale" content="en_IE" />
	<meta property="og:site_name" content="Blackshore Technology" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.blackshoretech.com/" />
	<meta name="twitter:title" content="Blackshore Technology Limited — AI Systems & Software Engineering" />
	<meta
		name="twitter:description"
		content="Boutique software agency specializing in AI systems, alignment research, and production applications. Dublin, Ireland."
	/>
	<meta name="twitter:image" content="https://www.blackshoretech.com/logo.png" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<main class="relative flex min-h-screen flex-col text-white">
	<!-- Hero Section -->
	<section class="relative z-10 flex min-h-[85vh] items-center justify-center px-8">
		<div class="max-w-5xl text-center">
			<h1
				class="silver-text mb-8 font-serif text-5xl tracking-tight md:text-7xl transition-all duration-1000 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				Blackshore Technology
			</h1>

			<p
				class="mb-6 font-serif text-xl text-zinc-300 md:text-2xl transition-all duration-1000 delay-200 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				AI systems. Alignment research. Production applications.
			</p>

			<p
				class="mx-auto max-w-2xl font-serif text-lg leading-relaxed text-zinc-500 md:text-xl transition-all duration-1000 delay-300 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				A boutique software agency building reliable AI systems—from research prototypes to
				production infrastructure. Deep expertise in machine learning, safety, and scalable
				architecture.
			</p>

			<div
				class="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-500 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				<a
					href="mailto:contact@blackshoretech.com"
					class="group inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 px-8 py-3 font-serif text-lg text-zinc-200 transition-all hover:border-zinc-500 hover:bg-zinc-800/50 hover:text-white"
				>
					Start a conversation
					<span
						class="inline-block transition-transform group-hover:translate-x-1"
						aria-hidden="true">&rarr;</span
					>
				</a>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<div class="relative z-10 mx-auto w-full max-w-6xl px-8">
		<div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
	</div>

	<!-- Services Section -->
	<section class="relative z-10 px-8 py-24 md:py-32">
		<div class="mx-auto max-w-6xl">
			<h2
				class="mb-16 text-center font-serif text-3xl text-zinc-300 md:text-4xl transition-all duration-1000 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				What we do
			</h2>

			<div class="grid gap-8 md:grid-cols-2">
				{#each services as service, i}
					<div
						class="group border border-zinc-800/50 bg-zinc-900/20 p-8 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/40"
						style="transition-delay: {mounted ? (i + 1) * 100 : 0}ms"
						class:opacity-100={mounted}
						class:translate-y-0={mounted}
						class:opacity-0={!mounted}
						class:translate-y-4={!mounted}
					>
						<h3
							class="mb-4 font-serif text-xl text-zinc-200 transition-colors group-hover:text-white"
						>
							{service.title}
						</h3>
						<p class="font-serif text-base leading-relaxed text-zinc-500">
							{service.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Divider -->
	<div class="relative z-10 mx-auto w-full max-w-6xl px-8">
		<div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
	</div>

	<!-- Philosophy Section -->
	<section class="relative z-10 px-8 py-24 md:py-32">
		<div class="mx-auto max-w-3xl text-center">
			<h2
				class="mb-12 font-serif text-3xl text-zinc-300 md:text-4xl transition-all duration-1000 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				Our approach
			</h2>

			<div class="space-y-8 font-serif text-lg leading-relaxed text-zinc-400 md:text-xl">
				<p
					class="transition-all duration-1000 {mounted
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-4'}"
				>
					We take on fewer projects to do them well. Every engagement gets senior attention from
					start to finish—no handoffs to junior teams, no surprises.
				</p>

				<p
					class="transition-all duration-1000 delay-100 {mounted
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-4'}"
				>
					We believe the best AI systems are built with care: carefully designed, carefully tested,
					carefully deployed. Speed matters, but not at the cost of reliability.
				</p>

				<p
					class="transition-all duration-1000 delay-200 {mounted
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-4'}"
				>
					We work with organizations who share our commitment to building technology responsibly.
				</p>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<div class="relative z-10 mx-auto w-full max-w-6xl px-8">
		<div class="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
	</div>

	<!-- CTA Section -->
	<section class="relative z-10 px-8 py-24 md:py-32">
		<div class="mx-auto max-w-3xl text-center">
			<h2
				class="mb-6 font-serif text-3xl text-zinc-300 md:text-4xl transition-all duration-1000 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				Let's build something
			</h2>

			<p
				class="mb-10 font-serif text-lg text-zinc-500 md:text-xl transition-all duration-1000 delay-100 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				Have a project in mind? We'd like to hear about it.
			</p>

			<div
				class="flex flex-col items-center gap-6 transition-all duration-1000 delay-200 {mounted
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-4'}"
			>
				<a
					href="mailto:contact@blackshoretech.com"
					class="group inline-flex items-center gap-2 border border-zinc-600 bg-zinc-800/50 px-10 py-4 font-serif text-lg text-zinc-100 transition-all hover:border-zinc-400 hover:bg-zinc-700/50 hover:text-white"
				>
					contact@blackshoretech.com
					<span
						class="inline-block transition-transform group-hover:translate-x-1"
						aria-hidden="true">&rarr;</span
					>
				</a>

				<p class="font-serif text-sm text-zinc-600">Dublin, Ireland</p>
			</div>
		</div>
	</section>
</main>

<style>
	:global(body) {
		background-color: #000;
		color: #fff;
	}
</style>
