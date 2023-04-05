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
	<h2 class="form-title">Sign up</h2>
	<Form
		action='{DIR}/api/auth/signup'
		show={visible}
		errors={setErrors}
	>
		{#if visible}
			<ErrorBox hide={visible} errors={errors} />
		{/if}
		<input type='text' name='firstname' placeholder='Firstname'>
		<input type='text' name='lastname' placeholder='Lastname'>
		<input type='email' name='email' placeholder='Email'>
		<input type='password' name='password' placeholder='Password'>
		<input type='password' name='confirmPassword' placeholder='Confirm Password'>
		<button>
			Register
		</button>
	</Form>
	<div class="form-footer">
		<a class="form-link" href="/login">Already have an account?</a>
	</div>
</div>

<style>
	input {
		width: 360px;
		padding: 14px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	input:focus {
		outline: 2px solid #1989f1;
	}

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
