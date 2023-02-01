<script lang="ts">
	import type { DataItem } from '$lib/global.js';
	import Form from '$lib/components/Form.svelte';
	import Input from '$lib/components/Input.svelte';
	import ErrorBox from '$lib/components/ErrorBox.svelte';

	let errors: DataItem = {};
	let visible = false;

	const changeErrorBox = (value: boolean) => visible = value;
	
	const setErrors = (data: DataItem) => errors = data;
</script>

<div class="form-container">
	<h2 class="form-title">Log in</h2>
	<Form
		action='http://localhost:4200/api/auth/login'
		change={changeErrorBox}
		errors={setErrors}
	>
		{#if visible}
			<ErrorBox hide={changeErrorBox} errors={errors} />
		{/if}
		<Input className='input-login' type='email' name='email' text='Email' />
		<Input className='input-login' type='password' name='password' text='Password' />
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
