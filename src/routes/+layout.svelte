<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { page } from '$app/state';
	import '../app.css';
	import Scene from '$lib/Background/Scene.svelte';
	let { children } = $props();

	const currentYear = new Date().getFullYear();
	const path = $derived(page.url.pathname);
</script>

<div class="grid-container">
	<div class="scene-container">
		<Scene />
	</div>
	<div class="content-container">
		<ParaglideJS {i18n}>
			<nav class="sticky top-0 z-40 border-b border-zinc-800 bg-black/90 backdrop-blur-sm">
				<div class="container mx-auto flex items-center justify-between px-8 py-6">
					<h1 class="silver-text font-serif text-xl tracking-tight">Blackshore Technology</h1>
					<div class="flex gap-8">
						<a
							href="/"
							class="font-serif text-zinc-400 transition-colors hover:text-zinc-300 {path === '/'
								? 'border-b border-zinc-700 text-zinc-300'
								: ''}"
						>
							Home
						</a>
						<a
							href="/about"
							class="font-serif text-zinc-400 transition-colors hover:text-zinc-300 {path ===
							'/about'
								? 'border-b border-zinc-700 text-zinc-300'
								: ''}"
						>
							About
						</a>
						<a
							href="/blog"
							class="font-serif text-zinc-400 transition-colors hover:text-zinc-300 {path ===
							'/blog'
								? 'border-b border-zinc-700 text-zinc-300'
								: ''}"
						>
							Blog
						</a>
					</div>
				</div>
			</nav>
			{@render children()}

			<footer class="relative z-10 mt-auto border-t border-zinc-800 bg-black/90 backdrop-blur-sm">
				<div class="container mx-auto px-8 py-8">
					<div class="flex flex-col items-center justify-between md:flex-row">
						<p class="font-serif text-sm text-zinc-600">
							© {currentYear} Blackshore Technology Limited. All rights reserved.
						</p>
						<div class="mt-4 flex gap-6 md:mt-0">
							<a
								href="mailto:contact@blackshoretech.com"
								class="font-serif text-sm text-zinc-600 transition-colors hover:text-zinc-400"
							>
								Contact
							</a>
							<a
								href="https://github.com/blackshoretech"
								target="_blank"
								rel="noopener noreferrer"
								class="font-serif text-sm text-zinc-600 transition-colors hover:text-zinc-400"
							>
								GitHub
							</a>
							<a
								href="https://linkedin.com/company/blackshore-technology"
								target="_blank"
								rel="noopener noreferrer"
								class="font-serif text-sm text-zinc-600 transition-colors hover:text-zinc-400"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</footer>
		</ParaglideJS>
	</div>
</div>

<style>
	.grid-container {
		position: relative;
		min-height: 100vh;
		background-color: #000000;
	}

	:global(main) {
		position: relative;
		z-index: 1;
	}

	.content-container {
		position: relative;
		z-index: 1;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	:global(.scene-container) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: theme('colors.black');
	}

	:global(#svelte) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
