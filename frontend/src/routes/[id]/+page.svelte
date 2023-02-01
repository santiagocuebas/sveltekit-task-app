<script lang="ts">
	import type { PageData } from './$types';
  import type { DataItem } from '$lib/global.js';
	import Nav from '$lib/components/Nav.svelte';
	import Link from '$lib/components/Link.svelte';
	import Add from '$lib/components/AddLink.svelte';
	import Edit from '$lib/components/EditLink.svelte'
	import Input from '$lib/components/Input.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';
	
	export let data: PageData;

	let { links, user } = data;

	let errors: DataItem = {};
	let visibleAdd = false;
	let visibleAddError = false;
	let visibleEdit = false;
	let visibleEditError = false;
	let link: any = null;

	let changeVisibilityAdd = (value: boolean) => visibleAdd = value;
	
	let changeVisibilityEdit = (value: boolean, values: any) => {
		link = values;
		
		visibleEdit = value;
	};

	let changeVisibilityAddError = (value: boolean) => visibleAddError = value;

	let changeVisibilityEditError = (value: boolean) => visibleEditError = value;
	
	const setErrors = (data: DataItem) => errors = data;
</script>

{#if visibleAdd}
<div class="link-absolute">
	<button class="link-occult" on:click={() => changeVisibilityAdd(false)}>
		-
	</button>
	<div class="link-add">
		<Add
			action='http://localhost:4200/api/link/add'
			bind:change={changeVisibilityAdd}
			bind:links={links}
			changeVisibility={changeVisibilityAddError}
			errors={setErrors}
		>
			{#if visibleAddError}
				<ErrorBox hide={changeVisibilityAddError} errors={errors} />
			{/if}
			<Input name='title' text='Title' className='input-upload' />
			<Input name='url' text='URL' className='input-upload' />
		</Add>
	</div>
</div>
{/if}

{#if visibleEdit}
<div class="link-absolute">
	<button class="link-occult" on:click={() => changeVisibilityEdit(false, link)}>
		-
	</button>
	<div class="link-add">
		<Edit
			action={`http://localhost:4200/api/link/edit/${link.id}`}
			bind:change={changeVisibilityEdit}
			bind:links={links}
			bind:link={link}
			changeVisibility={changeVisibilityEditError}
			errors={setErrors}
		>
			{#if visibleEditError}
				<ErrorBox hide={changeVisibilityEditError} errors={errors} />
			{/if}
		</Edit>
	</div>
</div>
{/if}

<Nav id={user.id} />
<div class="main-container">
	<div class="link-user">
		Welcome {user.firstname} {user.lastname}
	</div>

	<div class="links-container">
		{#if links.length > 0}
			{#each links as link (link.id)}
				<Link link={link} bind:change={changeVisibilityEdit} />
			{/each}
			<button class="link-button" on:click={() => changeVisibilityAdd(true)}>
				+
			</button>
		{:else}
			<div class="link-message">
				Haven't saved any links yet?
				<button class="link-save" on:click={() => changeVisibilityAdd(true)}>
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

	.link-occult {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		right: 0;
		margin-top: 25px;
		margin-right: 40px;
		border: none;
		border-radius: 50%;
		background-color: #f02a2a;
		font-size: 32px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.link-occult:hover {
		background-color: #f72323;
	}

	.link-add {
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
