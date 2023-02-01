<script lang="ts">
  import { goto } from '$app/navigation';
	import type { ResponseData, DataItem } from '../global.js';

	export let action: string;
	export let method: string = 'POST';
	export let change: (value: boolean) => void;
	export let errors: (data: DataItem) => void;

	async function handleSubmit (this: HTMLFormElement) {
		const data: ResponseData = await fetch(this.action, {
			method: this.method,
			credentials: 'include',
			body: new FormData(this)
		}).then(res => res.json());
	
		if (typeof data.userURL === 'string') goto(data.userURL);

		if (data.message !== undefined) console.log(data.message);

		if (data.errors !== undefined) {
			change(true);
			errors(data.errors as DataItem);
		}
	};
</script>

<form
	action={action}
	method={method}
	on:submit|preventDefault={handleSubmit}
>
	<slot></slot>
</form>

<style>
	form {
		display: flex;
		flex-wrap: wrap;
		width: min-content;
		height: min-content;
		gap: 12px;
	}
</style>
