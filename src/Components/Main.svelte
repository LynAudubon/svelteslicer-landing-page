<script lang="ts">
	export let CTA_Name: string = "Click Here";
</script>

<main>
	<div class="left_side">
		<h1>Svelte Slicer</h1>
		<p>Browser devtool extension for time traveling and visualizing Svelte applications.</p>

		<a href="https://chrome.google.com/webstore/category/extensions?hl=en"><button>{CTA_Name}</button></a>
	</div>
	<div class="right_side">
        <video width="613.5" height="370" autoplay muted>
			<source src="images/demo_video2.mp4" type="video/mp4">
			Your browser does not support the video tag.
			<track kind="captions"/>
		</video>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		color: white;
	}

	h1 {
		font-weight: bolder;
	}

	.left_side {
		padding: 2rem;
		flex: 1;
		background-color: hsla(19, 100%, 50%, 0.884);
	}

	.right_side {
		display: block;
		background-color: orange;
		text-align: center;
		padding: 5px;
		padding-top: 10px;
	}

	button {
		margin-top: 2rem;
		min-width: 250px;
		min-height: 60px;
		border-radius: 2rem;
		background-color: lightgray;
		color: white;
		font-size: 1.2rem;
		border: 0px;
		box-shadow: 2px 4px 5px gray;
	}

	button:hover{
		min-width: 260px;
		min-height: 65px;
		cursor: pointer;
		font-weight: bold;
	}

</style>