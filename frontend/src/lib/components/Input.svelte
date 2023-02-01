<script lang="ts">
	export let type: string = 'text';
	export let text: string;
	export let name: string;
	export let className: string;
</script>

<input
	class={className}
	type={type}
	name={name}
	placeholder={text}
>

<style>
	.input-login {
		width: 400px;
		padding: 16px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	.input-login:focus {
		outline: 2px solid #1989f1;
	}

	.input-signup {
		width: 360px;
		padding: 14px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	.input-signup:focus {
		outline: 2px solid #1989f1;
	}
	
	.input-upload {
		width: 430px;
		padding: 14px;
		border: none;
		outline: 1px solid #aaaaaa;
		border-radius: 6px;
		font-size: 16px;
	}

	.input-upload:focus {
		outline: 2px solid #1989f1;
	}
</style>
