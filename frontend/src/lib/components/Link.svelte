<script lang="ts">
  import type { ILink } from '$lib/global';
	import { format } from 'timeago.js';
	
	export let link: ILink;
	export let change: (value: boolean, values: ILink) => void;
</script>

<div class="link-content">
	<button on:click={() => change(true, link)}>
		<i class="fa-solid fa-plus"></i>
	</button>
	<h2>
		{link.title}
	</h2>
	<a href="{link.url}" target="_blank" rel="noreferrer">
		{link.url}
	</a>
	<div class="link-description">
		{link.description}
	</div>
	<p>
		{format(link.createdAt)}
	</p>
</div>

<style>
	.link-content {
		display: grid;
		position: relative;
		grid-auto-rows: min-content min-content 1fr min-content;
		flex-wrap: wrap;
		max-width: 200px;
		max-height: 200px;
		padding: 4px;
		border-radius: 8px;
		box-shadow: 0 0 3px 1px #888888;
		row-gap: 2px;
	}
	
	button {
		display: none;
		position: absolute;
		width: 20px;
		height: 20px;
		top: 3px;
		right: 3px;
		border: none;
		background-color: #ffffff;
		cursor: pointer;
	}

	i {
		width: 20px;
		height: 20px;
		background-color: #ffffff;
		font-size: 20px;
		font-weight: 700;
	}

	.link-content:hover > button {
		display: block;
	}

	h2 {
		width: 100%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		font-size: 24px;
	}

	a {
		display: inline-block;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #3682f3;
	}

	a:hover {
		color: #863ae9;
	}

	.link-description {
		overflow-y: scroll;
		scrollbar-width: none;
		overflow-wrap: anywhere;
		overscroll-behavior: contain;
	}

	p {
		margin-left: auto;
	}
</style>
