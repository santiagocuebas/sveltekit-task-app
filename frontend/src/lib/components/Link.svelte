<script lang="ts">
  import { format } from 'timeago.js';
  
  export let link: any;
  export let change: (value: boolean, values: any) => any;
</script>

<div class="link-content">
  <i class="fa-solid fa-plus" on:mousedown={change(true, link)}></i>
  <h2>
    {link.title}
  </h2>
  <a href="{link.url}" target="_blank" rel="noreferrer">
    {link.url}
  </a>
  <div class="link-description">
    {link.description}
  </div>
  <p class="link-createdAt">
    {format(link.createdAt)}
  </p>
</div>

<style>
  .link-content {
    display: flex;
    position: relative;
    align-content: space-between;
    flex-wrap: wrap;
    max-width: 200px;
    max-height: 200px;
    padding: 5px;
    border-radius: 8px;
    box-shadow: 0 1px 10px -4px #222222;
  }
  
  i {
    display: none;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    margin: 5px 5px 0 0;
    background-color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }

  .link-content:hover > i {
    display: block;
  }

  h2 {
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 24px;
  }

  a {
    display: inline-block;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: #3682f3;
  }

  a:hover {
    color: #863ae9;
  }

  .link-description {
    width: 100%;
    height: 80px;
    overflow: hidden;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
  }

  .link-createdAt {
    margin-left: auto;
  }
</style>
