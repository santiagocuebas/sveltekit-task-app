<script lang="ts">
	import type { ResponseData, DataItem } from '../global.js';

	export let action: string;
	export let method: string = 'POST';
	export let change: (value: boolean, values: any) => void;
	export let links: any[];
	export let link: any;
	export let changeVisibility: (value: boolean) => boolean;
	export let errors: (data: DataItem) => void;

	async function handleEdit (this: HTMLButtonElement) {
		const data: ResponseData = await fetch(`http://localhost:4200/api/link/edit/${link.id}`, {
			method: 'POST',
			credentials: 'include',
			body: new FormData(this.parentElement as HTMLFormElement)
		}).then(res => res.json());

		if (data.message) {
			console.log(data.message);
		} else if (data.errors !== undefined) {
			changeVisibility(true);
			errors(data.errors as DataItem);
		} else {
			const reloadLinks = links.map(item => {
        if (item.id === link.id) {
          item.title = link.title;
          item.url = link.url;
          item.description = link.description;
        }

        return item;
      });

			change(false, null);

			links = reloadLinks;
		}
	};

	async function handleDelete (this: HTMLButtonElement) {
		const data: ResponseData = await fetch(`http://localhost:4200/api/link/delete/${link.id}`, {
			method: 'DELETE',
			credentials: 'include',
			body: null
		}).then(res => res.json());

		if (data.delete === true) links = links.filter(({ id }) => id !== link.id );

		if (data.message) console.log(data.message);

		change(false, null);
	};
</script>

<form
	action={action}
	method={method}
>
	<slot></slot>
  <input type='text' name='title' placeholder='Title' bind:value={link.title}>
  <input type='text' name='url' placeholder='URL' bind:value={link.url}>
	<textarea name="description" placeholder="Description" rows="5" spellcheck="false" bind:value={link.description}></textarea>
	<button class="delete-link" on:click|preventDefault={handleDelete}>
		Delete
	</button>
	<button class="edit-link" on:click|preventDefault={handleEdit}>
		Edit
	</button>
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

	.delete-link {
		width: 66%;
		background-color: #ca1212;
		padding: 13px;
		border: none;
		outline: 1px solid #ca1212;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.delete-link:hover {
		background-color: #da1212;
		outline: 1px solid #da1212;
	}

	.edit-link {
		width: 31%;
		background-color: #7c7777;
		margin-left: auto;
		padding: 13px;
		border: none;
		outline: 1px solid #7c7777;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.edit-link:hover {
		background-color: #8c8787;
		outline: 1px solid #8c8787;
	}
</style>
