<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { link } from "svelte-routing";

	const dispatch = createEventDispatcher();

	const onBackToTop = () => {
		dispatch('scrollToTop', {});
	}
</script>

<footer>
	<div>
		<a href="/about" use:link><h3>About Us</h3></a>
		</div>

	<div>
		<a href="https://medium.com/"><h3>Blog</h3></a>
	</div>

	<div>
		<a href="https://github.com/oslabs-beta/SvelteSlicer/"><h3>GitHub</h3></a>
	</div>

	<div>
		<button on:click={() => onBackToTop()}>Scroll to Top</button>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-around;
		background-color: darkgray;
	}

	footer h3 {
		text-transform: uppercase;
	}

	footer a {
		text-decoration: none;
		color: white;
	}

	footer div {
		padding: 1.5rem 2rem;
	}

	footer button {
		margin-top: 1rem;
		min-width: 120px;
		min-height: 40px;
		border-radius: 2rem;
		background-color: clear;
		color: orange;
		font-weight: 800;
		border: 0px;
		cursor: pointer
	}

	</style>