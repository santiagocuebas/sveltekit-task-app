<script lang="ts">
	import type { DataItem, ILink } from '../global.js';
	import { DIR } from '../config.js';
	import { handleRequest } from '../services/services.js';

	export let link: ILink | null;
	export let links: ILink[];
	export let visible: boolean;
	export let show: boolean;
	export let errors: (data: DataItem) => void;

	let action = '';
	let method = '';

	function handleAdd() {
		action = DIR + `/api/link/add`;
		method = 'POST';
	}

	function handleEdit() {
		action =  DIR + `/api/link/edit/${link?.id}`;
		method = 'PUT';
	}

	async function handleDelete() {
		action = DIR + `/api/link/delete/${link?.id}`;
		method = 'DELETE';
	};

	async function handleSubmit (this: HTMLFormElement) {
		const data = await handleRequest(this);

		if (data.message) console.log(data.message); 

		if (data.errors) {
			errors(data.errors as DataItem);
			show = true;
		}

		if (data.delete) {
			links = links.filter(item => item.id !== link?.id );
			link = null;
			visible =  false;
		}
		
		if (data.edit) {
			const formData = new FormData(this);
			links = links.map(item => {
        if (item.id === link?.id) {
					item.title = formData.get('title') as string;
					item.url = formData.get('url') as string;
					item.description = formData.get('description') as string;
				};

        return item;
      });

			link = null;
			show = false;
			visible =  false;
		}
		
		if (data.link) {
			links = [data.link as ILink, ...links];
			show = false;
			visible =  false;
		}
	};
</script>

<form
	action={action}
	method={method}
	on:submit|preventDefault={handleSubmit}
>
	<slot></slot>
  <input
		type='text' name='title' placeholder='Title'
		value={link ? link.title : ''}
	>
  <input type='text' name='url' placeholder='URL'value={link ? link.url : ''}>
	<textarea name="description" placeholder="Description" rows="5" spellcheck="false" value={link ? link.description : ''}></textarea>
	{#if link}
		<button on:click={handleDelete}>
			Delete
		</button>
		<button class="edit" on:click={handleEdit}>
			Edit
		</button>
		{:else}
		<button class="add" on:click={handleAdd}>
			Add Link
		</button>
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		width: min-content;
		height: min-content;
		gap: 12px;
	}
  
  input {
    width: 430px;
    padding: 14px;
    border: none;
    outline: 1px solid #aaaaaa;
    border-radius: 6px;
    font-size: 16px;
  }

  input:focus {
    outline: 2px solid #1989f1;
  }

	textarea {
		width: 100%;
		padding: 14px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	textarea:focus {
		outline: 2px solid #1989f1;
	}

	button {
		width: 66%;
		padding: 13px;
		border: none;
		outline: 1px solid #ca1212;
		border-radius: 6px;
		background-color: #ca1212;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #da1212;
		outline: 1px solid #da1212;
	}

	.edit {
		width: 31%;
		margin-left: auto;
		outline: 1px solid #7c7777;
		background-color: #7c7777;
	}

	.edit:hover {
		background-color: #8c8787;
		outline: 1px solid #8c8787;
	}

	.add {
		width: 100%;
		outline: 1px solid #2177c7;
		background-color: #2177c7;
	}

	.add:hover {
		background-color: #2187d7;
		outline: 1px solid #2187d7;
	}
</style>
