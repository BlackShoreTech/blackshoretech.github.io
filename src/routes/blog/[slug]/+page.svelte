<script lang="ts">
  let { data } = $props();
  const { content: Post, metadata } = data;
</script>

<svelte:head>
  <title>Blackshore Blog - {metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <meta name="keywords" content={metadata.keywords} />
  <meta name="author" content={metadata.author} />
  <meta name="date" content={metadata.date} />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="container mx-auto px-4 py-16 max-w-3xl">
  <article class="prose prose-invert prose-blue">
    <header class="mb-8 not-prose">
      <a href="/blog" class="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block">← Back to Blog</a>
      <h1 class="text-4xl font-bold text-zinc-100 mb-4 font-ibm">{metadata.title}</h1>
      <div class="flex items-center text-zinc-400 text-sm">
        <time datetime={metadata.date}>
          {new Date(metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <span class="mx-2">•</span>
        <span>By {metadata.author}</span>
      </div>
    </header>

    <div class="prose prose-invert prose-blue max-w-none">
      <Post />
    </div>
  </article>
</div>

<style>
  :global(.prose) {
    --tw-prose-body: theme('colors.zinc.300');
    --tw-prose-headings: theme('colors.zinc.100');
    --tw-prose-links: theme('colors.blue.400');
    --tw-prose-bold: theme('colors.zinc.100');
    --tw-prose-counters: theme('colors.zinc.400');
    --tw-prose-bullets: theme('colors.zinc.400');
    --tw-prose-hr: theme('colors.zinc.700');
    --tw-prose-quotes: theme('colors.zinc.100');
    --tw-prose-quote-borders: theme('colors.blue.500');
    --tw-prose-captions: theme('colors.zinc.400');
    --tw-prose-code: theme('colors.zinc.100');
    --tw-prose-pre-code: theme('colors.zinc.100');
    --tw-prose-pre-bg: theme('colors.zinc.800');
    --tw-prose-th-borders: theme('colors.zinc.700');
    --tw-prose-td-borders: theme('colors.zinc.700');
  }

  :global(.prose pre) {
    background-color: theme('colors.zinc.800/50');
    border: 1px solid theme('colors.blue.500/20');
    border-radius: theme('borderRadius.lg');
  }

  :global(.prose code) {
    background-color: theme('colors.zinc.800/50');
    border: 1px solid theme('colors.blue.500/20');
    border-radius: theme('borderRadius.md');
    padding: theme('padding.1') theme('padding.2');
  }
</style> 