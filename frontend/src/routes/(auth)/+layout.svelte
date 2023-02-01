<div class="main-container">
	<slot></slot>
</div>

<style>
	:global(.form-container) {
		display: flex;
		flex-wrap: wrap;
		width: min-content;
		margin: auto;
		margin-top: 40px;
		padding: 20px;
		border-radius: 12px;
		background-color: #ffffff;
		box-shadow: 0 3px 10px #888888;
		gap: 20px;
	}

	:global(.form-title) {
		width: 100%;
		text-align: center;
		font-size: 24px;
	}

	:global(.form-footer) {
		width: 100%;
		text-align: center;
		font-size: 18px;
	}

	:global(.form-link) {
		font-size: 18px;
		color: #0f6abe;
	}

	:global(.form-link:hover) {
		color: #8303a3;
	}
</style>
