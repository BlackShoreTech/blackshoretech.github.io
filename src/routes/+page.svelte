<script lang="ts">
  import { stopPropagation } from 'svelte/legacy';

  
  interface Service {
    title: string;
    description: string;
    details: string[];
  }

  const services = [
    {
      title: 'AI Application Development',
      description: 'Custom AI solutions that automate processes, enhance decision-making, and drive innovation across your business operations.',
      details: [
        'Custom AI model development and training',
        'Integration with existing business systems',
        'Computer vision and image recognition solutions',
        'Natural language processing applications',
        'AI-powered analytics and insights'
      ]
    },
    {
      title: 'Large Language Models (LLMs)',
      description: 'Implementation and fine-tuning of state-of-the-art language models for chatbots, content generation, and natural language processing.',
      details: [
        'Custom LLM fine-tuning and deployment',
        'Prompt engineering and optimization',
        'Integration with popular LLM platforms',
        'Training on company-specific data',
        'Performance monitoring and optimization'
      ]
    },
    {
      title: 'Fractional CTO Services',
      description: 'Strategic technical leadership and guidance on-demand, helping you make informed decisions about technology investments and direction.',
      details: [
        'Strategic IT planning and roadmap development',
        'Technology assessment and evaluation',
        'IT governance and risk management',
        'IT strategy implementation and execution',
        'Technology innovation and strategy'
      ]
    },
    {
      title: 'Automation Solutions',
      description: 'Streamline your workflows and increase efficiency with custom automation solutions tailored to your business needs.',
      details: [
        'Custom automation solution development',
        'Integration with existing systems',
        'Workflow optimization and automation',
        'Robotic process automation (RPA)',
        'Automation testing and validation'
      ]
    },
    {
      title: 'Software Prototyping',
      description: 'Rapid development of proof-of-concept applications to validate ideas and accelerate time-to-market.',
      details: [
        'Proof-of-concept development',
        'Rapid prototyping and iteration',
        'Technology validation and proof-of-concept testing',
        'Market validation and customer feedback',
        'Rapid market entry and product launch'
      ]
    },
    {
      title: 'Technical Recruiting',
      description: 'Expert assistance in building high-performing technical teams, from screening to interviewing and onboarding.',
      details: [
        'Technical recruitment strategy development',
        'Candidate sourcing and screening',
        'Interviewing and assessment',
        'Onboarding and integration',
        'Technical team performance management'
      ]
    }
  ];

  let selectedService: Service | null = $state(null);
  let modalOpen = $state(false);

  function openModal(service: Service) {
    selectedService = service;
    modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Close modal on escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

</script>

<svelte:window onkeydown={handleKeydown}/>

<svelte:head>
  <title>Blackshore</title>
  <link href="https://fonts.cdnfonts.com/css/ocra" rel="stylesheet">
  <meta name="description" content="Blackshore is a Dublin-based consultancy specializing in artificial intelligence, systems architecture, and technical leadership." />
  <meta name="keywords" content="Blackshore, Technology, Innovation, Dublin, AI, Software, Engineering, Strategy" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<main class="min-h-screen text-zinc-100">
  <div class="container mx-auto px-4 py-16">
    <section class="max-w-4xl mx-auto">
      <h2 class="text-4xl mb-6 neon-border p-4 bg-zinc-900/80">
        Advanced Software Engineering & Technical Strategy
      </h2>
      <p class="text-lg mb-12 bg-blue-500/10 p-4 neon-border backdrop-blur-sm opacity-80">
        Dublin-based consultancy specializing in artificial intelligence, 
        systems architecture, and technical leadership.
      </p>
    </section>

    <section class="max-w-3xl mx-auto mt-16">
      <h3 class="text-3xl font-ibm font-semibold mb-8 bg-blue-600/80 p-4 inline-block neon-border">
        Our Services
      </h3>
      <div class="space-y-6 perspective">
        {#each services as service}
          <div 
            class="service-card border-2 border-zinc-900 p-8 hover:bg-zinc-900 hover:text-zinc-50 transition-colors cursor-pointer hover:shadow-industrial bg-zinc-50"
            role="button"
            tabindex="0"
            onclick={() => openModal(service)}
            onkeydown={(e) => e.key === 'Enter' && openModal(service)}
          >
            <h4 class="text-2xl font-ibm font-semibold mb-3">{service.title}</h4>
            <p class="font-ibm">
              {service.description}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <section class="max-w-3xl mx-auto mt-16 text-center">
      <h3 class="text-3xl font-ibm font-semibold text-zinc-50 mb-6 inline-block bg-blue-600 p-4 border-2 border-zinc-900">
        Get in Touch
      </h3>
      <p class="text-xl font-ibm text-zinc-900 bg-blue-100/60 backdrop-blur-sm mb-8 border-2 border-zinc-900 p-4">
        Ready to transform your business with innovative technology solutions?
      </p>
      <a
        href="mailto:contact@blackshore.tech"
        class="inline-block bg-zinc-900 text-zinc-50 px-8 py-3 font-ibm font-semibold text-xl border-2 border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-colors hover:shadow-industrial"
      >
        Contact Us
      </a>
    </section>
  </div>
</main>

<!-- Modal Dialog -->
{#if modalOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
  class="fixed inset-0 bg-zinc-900 bg-opacity-95 z-50 flex items-center justify-center p-4"
  onclick={closeModal}
  >
    <div 
      class="bg-zinc-50 border-2 border-zinc-900 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onclick={stopPropagation(() => {})}
    >
      <div class="p-8">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-3xl font-ibm font-semibold text-zinc-900">{selectedService?.title}</h3>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button 
            class="text-zinc-900 border-2 border-zinc-900 p-2 hover:bg-zinc-900 hover:text-zinc-50"
            onclick={closeModal}
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p class="font-ibm text-zinc-900 mb-6 bg-yellow-200 p-4 border-2 border-zinc-900">{selectedService?.description}</p>
        
        <h4 class="text-xl font-ibm font-semibold text-zinc-50 mb-3 bg-zinc-900 p-2 inline-block">
          What we offer:
        </h4>
        <ul class="space-y-3 font-ibm">
          {#each selectedService?.details || [] as detail}
            <li class="border-2 border-zinc-900 p-3 hover:bg-zinc-900 hover:text-zinc-50 transition-colors">
              {detail}
            </li>
          {/each}
        </ul>
        
        <div class="mt-8 text-center">
          <a
            href="mailto:contact@blackshoretech.com"
            class="inline-block bg-zinc-900 text-zinc-50 px-8 py-4 font-ibm font-semibold border-2 border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900 transition-colors hover:shadow-industrial"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(*) {
    font-family: 'OCR A', 'OCR A Std', monospace;
    letter-spacing: 0.05em;
  }

  /* Adjust text sizes for better readability with OCRA */
  :global(h1) {
    letter-spacing: 0.1em;
  }

  :global(h2) {
    letter-spacing: 0.08em;
  }

  /* Make the font feel more technical/mechanical */
  .service-card h4 {
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.1em;
  }

  .service-card p {
    font-size: 0.95em;
    line-height: 1.6;
  }

  /* main {
    background-color: theme('colors.zinc.900');
    position: relative;
    min-height: 100vh;
  } */

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

 

  /* Prevent content scroll when modal is open */
  :global(body.modal-open) {
    overflow: hidden;
  }
</style>