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
			heading: "Component and Data Visualization",
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

<div class="features">
	{#each articles as article (article.id)}
		<div class="feature">
			<h3>{article.heading}</h3>
			<Fa size="5x" icon={article.icon} color="lightgray" />
			<p>{article.content}</p>
		</div>
	{/each}
</div>

<hr>

<div class="right_side" style="display:block">
	<a href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/" target="_blank"><img src="images/front_end_frameworks_experience_ranking.png"  alt="stat display"/></a>
	<p>Debugging tool for the most performant JavaScript front-end framework</p>
</div>

<style>
	
	.features {
		display: flex;
		justify-content: center;
		gap: 10px;
		padding: 4rem;
		text-align: center;
	}
	
	.feature {
		flex: 1;
	}

	.right_side {
		text-align: center;
		margin: 50px;
	}

	img {
		box-shadow: 0px 4px 10px #333;
		width: 50%;
		height: 300px;
	}
</style>