<script>
// @ts-nocheck

	import '../app.css';
	import Footer from '../components/Footer.svelte';

</script>

<svelte:head>
  <title>
    Fervo
  </title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap');
  </style>
</svelte:head>

<slot />

<Footer />
