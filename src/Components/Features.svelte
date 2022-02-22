<script lang="ts">
    import Fa from 'svelte-fa';
    import { IconDefinition, faProjectDiagram, faBug, faHistory } from '@fortawesome/free-solid-svg-icons';
       
	type FeatureType = {
		id: number;
		heading: string;
		content: string;
		icon: IconDefinition;
	};
	export const articles: FeatureType[] = [
		{
			id: 1,
			content:
				"Graphical visualizations of components and state relationships",
			heading: "Data Visualization",
			icon: faProjectDiagram,
		},
		{
			id: 2,
			content:
				"User-friendly Chrome DevTool Extension for Svelte applications",
			heading: "Easier Debugging",
			icon: faBug,
		},
		{
			id: 3,
			content:
				"Ability to track changes in state over time and re-render in browser.",
			heading: "Time Travel",
			icon: faHistory,
		},
	];
</script>
<main id="mainWrap">

	<div class="features">
		{#each articles as article (article.id)}
			<div class="feature">
				<h3>{article.heading}</h3>
				<div class='icon'><Fa size="5x" icon={article.icon} color="lightgray" /></div>
				<p>{article.content}</p>
			</div>
		{/each}
	</div>

	<hr>

	<div class="info" style="display:block">
		<a href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/" target="_blank"><img src="images/front_end_frameworks_experience_ranking (1).png"  alt="stat display"/></a>
		<p>Debugging tool for the most performant JavaScript front-end framework (Ranked highest in satisfaction, 2020).</p>
	</div>
</main>

<style>
	
	.features {
		display: flex;
		flex-direction: row;
		position: relative;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		padding: 2rem 4rem;
		font-size: 1.5em;
		text-align: center;
	}
	
	.feature {
		flex: 1;
		font-size: 1em;
		color:rgb(53, 50, 50);
	}

	@media only screen and (max-width: 900px) {
		.features {
			display: block;
		}
		.features .icon {
			width: 300px;
			height: 150px;
			padding: 0px;
			margin: auto;
			}
		.feature p{
			padding-bottom: 20px;
			margin: 0px;
			font-size: 20px;
		}
		.feature h3 {
			font-size: 25px;
		}
	}

	.features .icon {
		bottom: 0;
		padding-top: 10px;
	}

	.info {
		text-align: center;
		font-size: 1em;
		margin: 50px;
		position: relative;
		color:rgb(53, 50, 50);
		margin: 0;
		padding: 35px;
	}

	.info p {
		font-size: larger;
		font-style: italic;
	}

	img {
		box-shadow: 0px 4px 10px #333;
		width: 58%;
		height: 360px;
	}
	
	@media only screen and (max-width: 900px) {
		img {
			width: 70%;
		}
	}

	hr {
        background-color: darkgrey;
    }
</style>