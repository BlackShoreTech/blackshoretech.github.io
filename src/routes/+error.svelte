<script>
    import { page } from '$app/state';
</script>

<svelte:head>
    <link href="https://fonts.cdnfonts.com/css/ocra" rel="stylesheet">
</svelte:head>

<main class="min-h-screen text-zinc-100">
    <div class="container mx-auto px-4 py-16">
        <div class="max-w-4xl mx-auto text-center">
            <div class="neon-border p-8 bg-zinc-900/80 backdrop-blur-sm">
                <h1 class="text-8xl mb-4 text-blue-400 font-bold">{page.status}</h1>
                <p class="text-xl mb-8 text-zinc-300">{page.error?.message || 'An unexpected error occurred'}</p>
                <a href="/" class="inline-block bg-zinc-900 text-zinc-50 px-8 py-3 font-ibm font-semibold text-xl border border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                    Return Home
                </a>
            </div>
        </div>
    </div>
</main>

<style>
    :global(*) {
        font-family: 'OCR A', 'OCR A Std', monospace;
        letter-spacing: 0.05em;
    }

    .neon-border {
        position: relative;
        border: 1px solid theme('colors.blue.500/50');
        box-shadow: 0 0 15px theme('colors.blue.500/20');
    }

    .neon-border::after {
        content: '';
        position: absolute;
        inset: -2px;
        background: linear-gradient(45deg, theme('colors.blue.500/50'), transparent 60%);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .neon-border:hover::after {
        opacity: 1;
    }
</style>
