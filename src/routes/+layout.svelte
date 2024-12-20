<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { page } from '$app/stores';
	import '../app.css';
	import Scene from '$lib/Background/Scene.svelte'
	let { children } = $props();

	const currentYear = new Date().getFullYear();
	const path = $derived($page.url.pathname);
</script>

<div class="grid-container">
	<div class="scene-container">
		<Scene />
	</div>
	<div class="content-container">
		<ParaglideJS {i18n}>
			<nav class="bg-zinc-900/80 backdrop-blur-sm border-b border-blue-500/30 sticky top-0 z-40">
				<div class="container mx-auto flex justify-between items-center">
					<h1 class="text-2xl text-zinc-100 tracking-widest py-4">
						BLACKSHORE
						<span class="text-blue-400/70 text-sm tracking-wider block mt-1">TECHNICAL SOLUTIONS</span>
					</h1>
					<div class="flex gap-6">
						<a 
							href="/" 
							class="text-zinc-100 hover:text-blue-400 transition-colors font-ibm text-lg {path === '/' ? 'border-b-2 border-blue-400' : ''}"
						>
							Home
						</a>
						<a 
							href="/about" 
							class="text-zinc-100 hover:text-blue-400 transition-colors font-ibm text-lg {path === '/about' ? 'border-b-2 border-blue-400' : ''}"
						>
							About
						</a>
						<a 
							href="/blog" 
							class="text-zinc-100 hover:text-blue-400 transition-colors font-ibm text-lg {path === '/blog' ? 'border-b-2 border-blue-400' : ''}"
						>
							Blog
						</a>
					</div>
				</div>
			</nav>
			{@render children()}

			<footer class="bg-zinc-900/80 backdrop-blur-sm border-t border-blue-500/30 mt-auto relative z-10">
				<div class="container mx-auto py-12 px-4">
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<!-- Company Info -->
						<div>
							<h3 class="text-xl text-zinc-100 font-ibm mb-4">BLACKSHORE TECHNOLOGY</h3>
							<p class="text-zinc-400 text-sm">
								Advanced software engineering and technical strategy solutions for forward-thinking businesses.
							</p>
						</div>

						<!-- Quick Links -->
						<div>
							<h3 class="text-xl text-zinc-100 font-ibm mb-4">Quick Links</h3>
							<nav class="flex flex-col space-y-2">
								<a href="/" class="text-zinc-400 hover:text-blue-400 transition-colors">Home</a>
								<a href="/about" class="text-zinc-400 hover:text-blue-400 transition-colors">About</a>
								<a href="/blog" class="text-zinc-400 hover:text-blue-400 transition-colors">Blog</a>
							</nav>
						</div>

						<!-- Contact -->
						<div>
							<h3 class="text-xl text-zinc-100 font-ibm mb-4">Contact</h3>
							<div class="space-y-2">
								<a 
									href="mailto:contact@blackshoretech.com" 
									class="text-zinc-400 hover:text-blue-400 transition-colors block"
								>
									contact@blackshoretech.com
								</a>
								<p class="text-zinc-400">Dublin, Ireland</p>
							</div>
						</div>
					</div>

					<!-- Bottom Bar -->
					<div class="border-t border-blue-500/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p class="text-zinc-400 text-sm">
							© {currentYear} Blackshore Technology. All rights reserved.
						</p>
						<div class="flex space-x-6 mt-4 md:mt-0">
							<a 
								href="https://github.com/blackshoretech" 
								target="_blank" 
								rel="noopener noreferrer"
								class="text-zinc-400 hover:text-blue-400 transition-colors"
							>
								GitHub
							</a>
							<a 
								href="https://linkedin.com/company/blackshore-technology" 
								target="_blank" 
								rel="noopener noreferrer"
								class="text-zinc-400 hover:text-blue-400 transition-colors"
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
		background-color: theme('colors.zinc.900');
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
		background-color: theme('colors.zinc.900');
	}

	:global(#svelte) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>
