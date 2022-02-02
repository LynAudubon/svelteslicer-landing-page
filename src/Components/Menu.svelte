<script>
let dark = false;
const darkToggle = () => {
	dark = !dark;
	if(dark === true){
	const mainHeader = document.getElementsByClassName("left_side");
	mainHeader[0].style.backgroundColor = "grey";
	const mainHeaderRight = document.getElementsByClassName("right_side");
	mainHeaderRight[0].style.backgroundColor = "grey";
	console.log('main He', mainHeader);
	}else{
	const mainHeader = document.getElementsByClassName("left_side");
	mainHeader[0].style.backgroundColor = "hsla(19, 100%, 50%, 0.884)";
	const mainHeaderRight = document.getElementsByClassName("right_side");
	mainHeaderRight[0].style.backgroundColor = "orange";
	
	}
}
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav role="navigation">
	<div class="left_div" style="display:flex">
		<a href="/"><img src="images\svelte_slicer_logo_64x64.png" alt="logo"/></a>
		<p>Svelte Slicer</p>
	</div>
	
	<div class="right_div">
		<a href="/about">About Us </a>
		<a href="https://medium.com/" target="_blank">Blog</a>
		<a href="https://github.com/oslabs-beta/SvelteSlicer/" target="_blank">GitHub</a>
		<button on:click={() => darkToggle()}>Dark Theme </button>
	</div>
</nav>


<style>
	
	nav {
		display: flex;
		background-color: darkgray;
	}

	nav a {
		text-decoration: none;
	}

	nav a, p {
		color: white;
		padding: 0 0.5rem;
		font-size: larger;
		font-weight: bold;
	}

	nav a:hover {
		text-decoration: none;
	}
	
	nav div {
		flex: 1;
		padding: 1rem;
	}

	.right_div {
		display: flex;
		justify-content: end;
		align-items: center;
		background-color: lightgray;
		text-decoration: none;
		padding: 0 0.5rem;
	}
</style>