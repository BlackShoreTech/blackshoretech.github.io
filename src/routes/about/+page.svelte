<script>

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and methodologies to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Technical Excellence',
      description: 'Our commitment to technical excellence ensures robust, scalable, and maintainable solutions that stand the test of time.',
      icon: '⚡'
    },
    {
      title: 'Client Partnership',
      description: 'We work as an extension of your team, aligning our expertise with your business goals to create lasting value.',
      icon: '🤝'
    },
    {
      title: 'Ethical AI',
      description: 'We believe in developing AI solutions that are transparent, fair, and respect privacy while driving innovation.',
      icon: '🧠'
    }
  ];

  const timeline = [
    {
      year: '2020',
      event: 'Founded in Dublin',
      description: 'Established with a vision to bridge the gap between cutting-edge AI and practical business solutions.'
    },
    {
      year: '2021',
      event: 'AI Solutions Launch',
      description: 'Launched our first suite of AI-powered solutions, helping businesses automate and optimize their operations.'
    },
    {
      year: '2022',
      event: 'Team Expansion',
      description: 'Grew our team of experts and expanded our service offerings to include LLM implementations and technical strategy.'
    },
    {
      year: '2023',
      event: 'Global Reach',
      description: 'Extended our services internationally, partnering with clients across Europe and North America.'
    }
  ];
</script>

<svelte:head>
  <title>About Blackshore</title>
  <link href="https://fonts.cdnfonts.com/css/ocra" rel="stylesheet">
  <meta name="description" content="Blackshore is a Dublin-based consultancy specializing in artificial intelligence, systems architecture, and technical leadership." />
  <meta name="keywords" content="Blackshore, Technology, Innovation, Dublin, AI, Software, Engineering, Strategy" />
  <meta name="robots" content="index, follow" />
</svelte:head>


<main class="min-h-screen text-zinc-100">

  <div class="container mx-auto px-4 py-16">
    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto">
      <h2 class="text-4xl mb-6 neon-border p-4 bg-zinc-900/80">
        About Blackshore
      </h2>
      <p class="text-lg mb-12 bg-blue-500/10 p-4 neon-border backdrop-blur-sm opacity-80">
        We are a team of technology enthusiasts, innovators, and problem solvers dedicated to 
        transforming businesses through advanced software engineering and artificial intelligence.
      </p>
    </section>

    <!-- Values Section -->
    <section class="max-w-4xl mx-auto mt-16">
      <h3 class="text-3xl font-ibm font-semibold mb-8 bg-blue-600/80 p-4 inline-block neon-border">
        Our Values
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 perspective">
        {#each values as value}
          <div class="service-card border-2 border-zinc-900 p-8 bg-zinc-900/80">
            <div class="text-4xl mb-4">{value.icon}</div>
            <h4 class="text-2xl font-ibm font-semibold mb-3">{value.title}</h4>
            <p class="font-ibm opacity-80">
              {value.description}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <!-- Timeline Section
    <section class="max-w-4xl mx-auto mt-16">
      <h3 class="text-3xl font-ibm font-semibold mb-8 bg-blue-600/80 p-4 inline-block neon-border">
        Our Journey
      </h3>
      <div class="space-y-6">
        {#each timeline as item}
          <div class="service-card border-2 border-zinc-900 p-8 bg-zinc-900/80 flex gap-8">
            <div class="text-blue-400 font-bold text-xl min-w-[100px]">{item.year}</div>
            <div>
              <h4 class="text-xl font-ibm font-semibold mb-2">{item.event}</h4>
              <p class="font-ibm opacity-80">{item.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </section> -->

    <!-- Contact Section -->
    <section class="max-w-3xl mx-auto mt-16 text-center">
      <h3 class="text-3xl font-ibm font-semibold text-zinc-50 mb-6 inline-block bg-blue-600 p-4 border-2 border-zinc-900">
        Join Our Journey
      </h3>
      <p class="text-xl font-ibm text-zinc-100 mb-8 border-2 border-zinc-900 p-4 bg-zinc-900/80">
        Whether you're looking to innovate, transform, or simply explore possibilities,
        we're here to help you succeed.
      </p>
      <a
        href="mailto:contact@blackshore.tech"
        class="inline-block bg-zinc-900 text-zinc-50 px-8 py-3 font-ibm font-semibold text-xl border-2 border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-colors hover:shadow-industrial"
      >
        Get in Touch
      </a>
    </section>
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(*) {
    font-family: 'OCR A', 'OCR A Std', monospace;
    letter-spacing: 0.05em;
  }

  :global(h1) {
    letter-spacing: 0.1em;
  }

  :global(h2) {
    letter-spacing: 0.08em;
  }

  main {
    position: relative;
    min-height: 100vh;
  }

  .perspective {
    perspective: 10px;
    perspective-origin: bottom;
    transform-style: preserve-3d;
  }

  .service-card {
    will-change: transform, opacity;
    transform: translateZ(0);
    background: linear-gradient(
      135deg,
      theme('colors.zinc.900') 0%,
      theme('colors.zinc.800') 100%
    );
    border: 1px solid theme('colors.blue.500/50');
    box-shadow: 0 0 15px theme('colors.blue.500/20');
    transition: transform 0.2s ease-out, 
                border-color 0.2s ease-out,
                box-shadow 0.2s ease-out;
  }

  .service-card:hover {
    border-color: theme('colors.blue.400');
    box-shadow: 0 0 30px theme('colors.blue.500/30');
    transform: scale(1.02) translateZ(0);
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
