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
    <div class="pic">
      <img src="images/screenshot_state.png" alt="devtool UI" />
    </div>
  </div>
  <div class="demo_banner ban" id="demo1">
    <video class="vid" autoplay muted>
      <source src="images/demo_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      <track kind="captions" />
    </video>
  </div>
  <div class="intro_banner ban" id="intro">
    <h1 class="introTitle">Svelte Slicer</h1>
    <p>
      Browser devtool extension for time traveling and visualizing Svelte
      applications.
    </p>
    <a
      href="https://chrome.google.com/webstore/detail/svelte-slicer/ohimeoplnpnoeapbnmgeddijpfobbijl"
      ><button>{Button_Name}</button></a
    >
  </div>
</main>

<style>
  .main {
    margin: auto;
    color: white;
    width: 100%;
    height: 420px;
    overflow: hidden;
    position: relative;
  }

  p {
    font-size: 1.5em;
  }

  h1 {
    font-weight: 900;
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
    background-color: hsla(19, 100%, 50%, 0.884);
    text-align: center;
    opacity: 0;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  @media only screen and (max-width: 600px) {
    .svelte_banner .pic img {
      height: 100%;
      width: 98%;
      padding-top: 50px;
    }
  }

  .main .demo_banner {
    width: 100%;
    height: 100%;
    background-color: orange;
    text-align: center;
    opacity: 0;
    padding-top: 20px;
    padding-bottom: 5px;
  }

  .main .intro_banner {
    width: 100%;
    height: 100%;
    padding: 2rem;
    opacity: 0;
    background-color: hsla(19, 100%, 50%, 0.884);
  }

  @media only screen and (max-width: 600px) {
    .intro_banner p {
      word-break: break-all;
      white-space: normal;
      width: 475px;
    }
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

  .ban img {
    width: 690px;
    height: 380px;
    margin: auto;
    object-fit: fill;
  }

  .ban .vid {
    width: 100%;
    height: 90%;
    align-items: center;
    object-fit: contain;
  }

  button:hover {
    min-width: 260px;
    min-height: 65px;
    cursor: pointer;
    font-weight: bold;
  }

  .introTitle {
    letter-spacing: 0.1em;
  }
</style>
