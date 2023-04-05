<script lang="ts">
	import type { PageData } from './$types';
  import type { DataItem, ILink } from '$lib/global.js';
	import { clickOutside } from '$lib/services/click-outside';
	import Nav from '$lib/components/Nav.svelte';
	import Link from '$lib/components/Link.svelte';
	import Form from '$lib/components/FormLink.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';
	
	export let data: PageData;

	let errors: DataItem = {};
	let visible = false;
	let visibleError = false;
	let link: ILink | null = null;
	
	let changeVisibility = (value: boolean, values: ILink | null) => {
		link = values;
		visible = value;
		visibleError = false;
	};
	
	const setErrors = (data: DataItem) => errors = data;
</script>

{#if visible}
<div class="link-absolute">
	<div
		class="link-container"
		use:clickOutside
		on:outclick={() => changeVisibility(false, null)}
	>
		<Form
			bind:visible={visible}
			bind:show={visibleError}
			bind:links={data.links}
			bind:link={link}
			errors={setErrors}
		>
			{#if visibleError}
				<ErrorBox bind:hide={visibleError} errors={errors} />
			{/if}
		</Form>
	</div>
</div>
{/if}

<Nav id={data.user.id} />
<div class="main-container">
	<div class="link-user">
		Welcome {data.user.firstname} {data.user.lastname}
	</div>

	<div class="links-container">
		{#if data.links.length > 0}
			{#each data.links as link (link.id)}
				<Link link={link} bind:change={changeVisibility} />
			{/each}
			<button class="link-button" on:click={() => visible = true}>
				+
			</button>
		{:else}
			<div class="link-message">
				Haven't saved any links yet?
				<button class="link-save" on:click={() => visible = true}>
					Starts now!
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.link-absolute {
		display: flex;
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		bottom: 0;
		background-color: #000000aa;
		z-index: 200;
	}

	.link-container {
		margin: auto;
		margin-top: 140px;
		padding: 20px;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #777777;
	}

	.main-container {
		min-width: 460px;
		min-height: calc(100vh - 56px);
	}

	.link-user {
		width: fit-content;
		margin: auto;
		margin-top: 20px;
		font-size: 32px;
		font-weight: 700;
	}

	.links-container {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, 200px);
		grid-auto-rows: 200px;
		width: 80%;
		min-width: 460px;
		max-width: 1120px;
		min-height: 75vh;
		margin: 20px auto;
		padding: 20px;
		border-radius: 12px;
		background-color: #ffffff;
		box-shadow: 0 4px 10px #aaaaaa;
		gap: 20px;
	}

	.link-button {
		align-self: center;
		width: 80px;
		height: 80px;
		margin: auto;
		border: none;
		border-radius: 50%;
		background-color: #2b4de6;
		font-size: 40px;
		font-weight: 700;
		color: #ffffff;
		box-shadow: 0 0 10px -2px #2626ac;
		cursor: pointer;
	}

	.link-button:hover {
		background-color: #2b4df6;
	}

	.link-message {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		padding: 5px;
		text-align: center;
		font-size: 18px;
		font-weight: 500;
		gap: 25px;
	}

	.link-save {
		width: max-content;
		height: min-content;
		padding: 8px 32px;
		border: none;
		border-radius: 12px;
		background-color: #2b4de6;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.link-save:hover {
		background-color: #2b4df6;
	}
</style>
