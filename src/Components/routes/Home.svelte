<script lang="ts">
	import Main from '../Main.svelte';
	import Features from '../Features.svelte';
	import Footer from '../Footer.svelte';
	
	const scrollToTop = () => {
		scrollTo({top: 0});
	};
</script>
	 
<Main Button_Name={"Download"}/>
<Features />
<Footer on:scrollToTop={() => scrollToTop()}/>

<style>
	:root {
		font-family: sans-serif;
		padding: 0;
	}
</style>