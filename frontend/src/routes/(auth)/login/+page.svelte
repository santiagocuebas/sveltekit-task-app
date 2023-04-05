<script lang="ts">
	import type { DataItem } from '$lib/global.js';
	import Form from '$lib/components/Form.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';
	import { DIR } from '$lib/config.js';

	let errors: DataItem = {};
	let visible = false;
	
	const setErrors = (data: DataItem) => errors = data;
</script>

<div class="form-container">
	<h2 class="form-title">Log in</h2>
	<Form
		action='{DIR}/api/auth/login'
		show={visible}
		errors={setErrors}
	>
		{#if visible}
			<ErrorBox hide={visible} errors={errors} />
		{/if}
		<input type='email' name='email' placeholder='Email'>
		<input type='password' name='password' placeholder='Password'>
		<button>
			Login
		</button>
	</Form>
	<div class="form-footer">
		Don't have an account?
		<a class="form-link" href="/signup">Subscribe!</a>
	</div>
</div>

<style>
	input {
		width: 400px;
		padding: 16px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	input:focus {
		outline: 2px solid #1989f1;
	}

	button {
		width: 100%;
		background-color: #2177c7;
		padding: 13px;
		border: none;
    outline: 1px solid #2177c7;
		border-radius: 6px;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #2187d7;
    outline: 1px solid #2187d7;
	}
</style>
