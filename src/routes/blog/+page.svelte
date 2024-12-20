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

<div class="container mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold text-zinc-100 mb-8 font-ibm">Blog</h1>
  
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each posts as post}
      <article class="bg-zinc-800/50 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500/40 transition-colors">
        <a href="/blog/{post.slug}" class="block p-6">
          <time datetime={post.date} class="text-sm text-zinc-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h2 class="text-xl font-semibold text-zinc-100 mt-2 mb-3">{post.title}</h2>
          <p class="text-zinc-400 mb-4">{post.description}</p>
          <div class="flex items-center">
            <span class="text-sm text-zinc-400">By {post.author}</span>
            <span class="ml-auto text-blue-400 text-sm">Read more →</span>
          </div>
        </a>
      </article>
    {/each}
  </div>
</div> 