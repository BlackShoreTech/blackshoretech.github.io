<script lang="ts">
	import { onMount } from 'svelte';
  import { Scene } from './scene'

  let el: HTMLDivElement | null = null

  onMount(() => {
      const scene = new Scene({ el })
  })

</script>

<div  bind:this={el}></div>
