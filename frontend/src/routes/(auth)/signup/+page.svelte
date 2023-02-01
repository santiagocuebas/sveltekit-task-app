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
	<h2 class="form-title">Sign up</h2>
	<Form
		action='http://localhost:4200/api/auth/signup'
		change={changeErrorBox}
		errors={setErrors}
	>
		{#if visible}
			<ErrorBox hide={changeErrorBox} errors={errors} />
		{/if}
		<Input className='input-signup' name='firstname' text='Firstname' />
		<Input className='input-signup' name='lastname' text='Lastname' />
		<Input className='input-signup' type='email' name='email' text='Email' />
		<Input className='input-signup' type='password' name='password' text='Password' />
		<Input className='input-signup' type='password' name='confirmPassword' text='Confirm Password' />
		<button>
			Register
		</button>
	</Form>
	<div class="form-footer">
		<a class="form-link" href="/login">Already have an account?</a>
	</div>
</div>

<style>
	button {
		width: min-content;
		height: min-content;
		margin: auto;
		padding: 8px 32px;
		border: none;
		border-radius: 6px;
		background-color: #37a063;
		font-size: 18px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #37b063;
	}
</style>
