<script lang="ts">
	export let Button_Name: string = "Download";

	let bannerStatus = 1;
	let bannerTimer = 16000;

	window.onload = function () {
		bannerLoop();
	};

	const startBannerLoop = setInterval(function () {
		bannerLoop();
	}, bannerTimer);

	function bannerLoop() {
		if (bannerStatus === 1) {
			// document.getElementById("demo1").style.visibility = "hidden";
			document.getElementById("demo1").style.opacity = "0";
			document.getElementById("intro").style.opacity = "1";

			setTimeout(function () {
				document.getElementById("intro").style.right = "0px";
				document.getElementById("intro").style.zIndex = "1000";
				document.getElementById("demo1").style.right = "-1200px";
				document.getElementById("demo1").style.zIndex = "700";
				document.getElementById("demo2").style.right = "1200px";
				document.getElementById("demo2").style.zIndex = "500";
			}, 500);

			setTimeout(function () {
				document.getElementById("demo1").style.opacity = "1";
				document.getElementById("intro").style.opacity = "0";
			}, 5000);

			bannerStatus = 2;
		} else if (bannerStatus === 2) {
			// document.getElementById("demo2").style.visibility = "hidden";
			document.getElementById("demo2").style.opacity = "0";
			document.getElementById("demo1").style.opacity = "1";

			setTimeout(function () {
				document.getElementById("demo1").style.right = "0px";
				document.getElementById("demo1").style.zIndex = "1000";
				document.getElementById("demo2").style.right = "-1200px";
				document.getElementById("demo2").style.zIndex = "700";
				document.getElementById("intro").style.right = "1200px";
				document.getElementById("intro").style.zIndex = "500";
			}, 500);

			setTimeout(function () {
				document.getElementById("demo2").style.opacity = "1";
				document.getElementById("demo1").style.opacity = "0";
			}, 5000);

			bannerStatus = 3;
		} else if (bannerStatus === 3) {
			// document.getElementById("intro").style.visibility = "hidden";
			document.getElementById("intro").style.opacity = "0";
			document.getElementById("demo2").style.opacity = "1";

			setTimeout(function () {
				document.getElementById("demo2").style.right = "0px";
				document.getElementById("demo2").style.zIndex = "1000";
				document.getElementById("intro").style.right = "-1200px";
				document.getElementById("intro").style.zIndex = "700";
				document.getElementById("demo1").style.right = "1200px";
				document.getElementById("demo1").style.zIndex = "500";
			}, 500);

			setTimeout(function () {
				document.getElementById("intro").style.opacity = "1";
				document.getElementById("demo2").style.opacity = "0";
			}, 5000);

			bannerStatus = 1;
		}
	}
</script>

<main class="main" id="banner">
	<div class="svelte_banner ban" id="demo2">
		<video width="613.5" height="370" autoplay muted>
			<source src="images/demo_video.mp4" type="video/mp4" />
			Your browser does not support the video tag.
			<track kind="captions" />
		</video>
	</div>
	<div class="demo_banner ban" id="demo1">
		<div class="pic">
			<img src="images/example.png" alt="graph" />
		</div>
	</div>
	<div class="intro_banner ban" id="intro">
			<h1 class="introTitle">Svelte Slicer</h1>
			<p>Browser devtool extension for time traveling and visualizing Svelte applications.</p>

			<a href="https://chrome.google.com/webstore/category/extensions?hl=en"><button>{Button_Name}</button></a>
		<h1>Svelte Slicer</h1>
		<p>
			Browser devtool extension for time traveling and visualizing Svelte
			applications.
		</p>

		<a href="https://chrome.google.com/webstore/category/extensions?hl=en"
			><button>{Button_Name}</button></a>
	</div>
</main>

<style>
	.main {
		margin: auto;
		color: white;
		width: 100%;
		height: 389px;
		overflow: hidden;
		position: relative;
	}

	strong.headerFontSz {
		font-size: 2em;
		letter-spacing: .3em;
	}

	p {
		font-size: 1.5em;
	}

	h1 {
		font-weight: bolder;
	}

	.main .ban {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		transition: all ease-in-out 500ms;
		-webkit-transition: all ease-in-out 500ms;
		-moz-transition: all ease-in-out 500ms;
		-o-transition: all ease-in-out 500ms;
	}

	.main .svelte_banner {
		display: block;
    
  background-color: hsla(19, 100%, 50%, 0.884);
  text-align: center;
  opacity: 0;
  padding-top: 10px;
  padding-top: 10px;
}

	.main .demo_banner {
		display: block;
		background-color: orange;
		text-align: center;
		opacity: 0;
		padding-top: 10px;
		padding-top: 10px;
		
	}

	.main .intro_banner {
		padding: 2rem;
		height: 1050px;
		opacity: 0;
		background-color: hsla(19, 100%, 50%, 0.884);
	}

	button {
		margin-top: 2rem;
		min-width: 250px;
		min-height: 60px;
		border-radius: 2rem;
		background-color: lightgray;
		color: white;
		font-size: 2rem;
		border: 0px;
		box-shadow: 2px 3px 4px gray;
	}

	img {
		width: 50%;
		height: 50%;
		padding-top: 15px;
	}

	button:hover {
		min-width: 260px;
		min-height: 65px;
		cursor: pointer;
		font-weight: bold;
	}

	.introTitle {
		letter-spacing: .5em;
	}
