<script lang="ts">
  import { handleRequest } from '$lib/services/services.js';
	import type { DataItem } from '../global.js';

	export let action: string;
	export let method: string = 'POST';
	export let show: boolean;
	export let errors: (data: DataItem) => void;

	async function handleSubmit (this: HTMLFormElement) {
		const data = await handleRequest(this);
	
		if (typeof data.id === 'string') {
			window.location.href = '/' + data.id;
		}

		if (data.message !== undefined) console.log(data.message);

		if (data.errors !== undefined) {
			show = true;
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
