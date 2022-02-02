<script>


let dark = false;
export const darkToggle = () => {
	dark = !dark;
	if(dark === true){
	const mainHeader = document.getElementsByClassName("left_side");
	mainHeader[0].style.backgroundColor = "grey";
	const mainHeaderRight = document.getElementsByClassName("right_side");
	mainHeaderRight[0].style.backgroundColor = "grey";
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
		<p id="menuHeader">Svelte Slicer</p>
	</div>
	
	<div class="right_div">
		<a href="/">Home </a>
		<a href="/about">About Us </a>
		<a href="https://medium.com/" target="_blank">Blog</a>
		<a href="https://github.com/oslabs-beta/SvelteSlicer/" target="_blank">GitHub</a>
		<button class="darkBtn" on:click={() => darkToggle()}>Darker Theme </button>
	</div>
</nav>


<style>

	.right_div a:hover {
	text-decoration: underline;
	}

	.right_div a:active{
		color: red;
	}
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

	#menuHeader {
		font-size: 2em;
	}

	nav a:hover {
		text-decoration: none;
	}
	
	nav div {
		flex: 1;
		padding: 1rem;
	}

	.darkBtn {
		background-color: transparent;
		border: none;
		font-size: inherit;
		font-weight: 800;
		font-family: sans-serif;
		color:rgb(53, 50, 50);
		cursor: pointer;
	}

	.right_div {
		display: flex;
		justify-content: end;
		align-items: center;
		background-color: lightgray;
		text-decoration: none;
		padding: 0 0.5rem;
		font-size: 1.5em;
	}
</style>