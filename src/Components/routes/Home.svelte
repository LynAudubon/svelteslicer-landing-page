<script lang="ts">
	import Menu from '../Menu.svelte';
	import Main from '../Main.svelte';
	import Features from '../Features.svelte';
	import Footer from '../Footer.svelte';
	
	const scrollToTop = () => {
		scrollTo({top: 0});
	};
</script>
	 
<Main CTA_Name={"Download"}/>
<Features />
<Footer on:scrollToTop={() => scrollToTop()}/>

<style>
	:root {
		font-family: sans-serif;
		padding: 0;
	}
</style>