<script lang="ts">
	import type { ResponseData, DataItem } from '../global.js';

	export let action: string;
	export let method: string = 'POST';
	export let change: (value: boolean) => boolean;
	export let links: any[];
	export let changeVisibility: (value: boolean) => boolean;
	export let errors: (data: DataItem) => void;

	async function handleSubmit (this: HTMLFormElement) {
		const data: ResponseData = await fetch(this.action, {
			method: this.method,
			credentials: 'include',
			body: new FormData(this)
		}).then(res => res.json());

		if (data.errors) {
			changeVisibility(true);
			errors(data.errors as DataItem);
		} else if (data.message) {
			console.log(data);
		} else {
			change(false);
			links = [data.link, ...links];
		}
	};
</script>

<form
	action={action}
	method={method}
	on:submit|preventDefault={handleSubmit}
>
	<slot></slot>
	<textarea name="description" placeholder="Description" rows="5" spellcheck="false"></textarea>
	<button class="add-link">
		Add Link
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

	.add-link {
		width: 100%;
		background-color: #2177c7;
		padding: 13px;
		border: none;
		outline: 1px solid #2177c7;
		border-radius: 6px;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	.add-link:hover {
		background-color: #2187d7;
		outline: 1px solid #2187d7;
	}
</style>
