<script lang="ts">
  import { goto } from "$app/navigation";
  import type { ResponseData } from "$lib/global.js";
	export let id: string;

	const handleLogout = async () => {
		const data: ResponseData = await fetch('http://localhost:4200/api/auth/logout', {
			method: 'POST',
			credentials: 'include',
			body: null
		}).then(res => res.json());

		if (data.message) console.log(data.message);

		if (typeof data.url === 'string') goto(data.url);
	};

	const handleDelete = async () => {
		const data: ResponseData = await fetch('http://localhost:4200/api/user/delete', {
			method: 'DELETE',
			credentials: 'include',
			body: null
		}).then(res => res.json());

		if (data.message) console.log(data.message);

		if (typeof data.url === 'string') goto(data.url);
	};
</script>

<nav>
	<h2>FAVORITED LINKS</h2>
	<ul>
		<a href="/{id}">
			<li>Profile</li>
		</a>
		<span>|</span>
		<a href="/logout" on:click={handleLogout}>
			<li>Log out</li>
		</a>
		<span>|</span>
		<a href="/deleteuser" on:click={handleDelete}>
			<li>Delete User</li>
		</a>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 460px;
		max-width: 100%;
		height: 56px;
		padding: 0 20px;
		background-color: #118cbd;
		color: #ffffff;
	}

	h2 {
		font-size: 32px;
	}

	ul {
		display: flex;
		list-style: none;
		gap: 5px;
	}

	li {
		font-size: 17px;
		font-weight: 600;
		color: #ffffff
	}

	span {
		font-size: 17px;
		font-weight: 600;
	}
</style>
