<script lang="ts">
    import Home from './routes/Home.svelte';
    import About from './routes/About.svelte';
    import Menu from './Menu.svelte';
    import { Router, Route, Link } from "svelte-routing";
	
	export let url = "";

	const scrollToTop = () => {
		scrollTo({top: 0});
	};
</script>

<Router url="{url}">
	<Menu>
		<Link to="/">Home</Link>
		<Link to="/about">About Us</Link>
	</Menu>
	<div>
		<Route path="/about" component="{About}" />
		<Route path="/" component="{Home}" ></Route>
		<!-- <Route path="/" ><Home /></Route> -->

	</div>
</Router>


<style>
	:root {
		font-family: sans-serif;
		padding: 0;
	}
</style>