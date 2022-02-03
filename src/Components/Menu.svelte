<script>
	
	let dark = false;
export const darkToggle = () => {
	dark = !dark;
	if(dark === true){
		const svelteBan = document.getElementsByClassName("svelte_banner ban");
		svelteBan[0].style.backgroundColor = "grey";
		const demoBan = document.getElementsByClassName("demo_banner ban");
		demoBan[0].style.backgroundColor = "grey";
		const introBan = document.getElementsByClassName("intro_banner ban");
		introBan[0].style.backgroundColor = "black";
		const features = document.getElementsByClassName("features");
		features[0].style.backgroundColor = "grey";
		document.getElementById("mainWrap").style.backgroundColor = "grey";

	}else{
		const svelteBan = document.getElementsByClassName("svelte_banner ban");
		svelteBan[0].style.backgroundColor = "hsla(19, 100%, 50%, 0.884)";
		const demoBan = document.getElementsByClassName("demo_banner ban");
		demoBan[0].style.backgroundColor = "orange";
		const introBan = document.getElementsByClassName("intro_banner ban");
		introBan[0].style.backgroundColor = "hsla(19, 100%, 50%, 0.884)";
		const features = document.getElementsByClassName("features");
		features[0].style.backgroundColor = "white";
		document.getElementById("mainWrap").style.backgroundColor = "white";

	}
}
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<nav role="navigation">
	<div class="left_div" style="display:flex">
		<a href="/"><img src="images/svelte_slicer_logo_64x64.png" alt="logo"/></a>
		<p class="toolTitle">Svelte Slicer</p>
	</div>
	
	<div class="right_div">
		<a href="/about">About Us </a>
		<a href="https://medium.com/" target="_blank">Blog</a>
		<a href="https://github.com/oslabs-beta/SvelteSlicer/" target="_blank">GitHub</a>
			<button class="darkBtn" on:click={() => darkToggle()}><img src="images/dark_icon.png" alt="darkmode moon"/></button>
	</div>
</nav>


<style>
	.left_div p {
		text-shadow: white 0px 0px 10px;
		font-size: 25px;
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
	.darkBtn {
		background-color: transparent;
		border: none;
		color:rgb(53, 50, 50);
		cursor: pointer;
	}

	.right_div  a:hover{
		text-decoration: underline;
	}

	.toolTitle {
		font-size:25px;
	}
</style>