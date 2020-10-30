<script lang="typescript">
  import type { element } from "svelte/internal";
  import type { Types } from "../types";
  export let title: string;
  export let elements: Types.BasicElement[];
</script>

<style>
  section {
    background-color: #222;
    padding: 16px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    text-align: start;
  }

  p {
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #397300;
    margin: 0;
  }

  h1 {
    margin: 8px;
    padding: 4px;
    border-radius: 4px;
    background-color: #505050;
    color: #cda869;
    font-family: monospace;
    font-size: 4.5rem;
    font-weight: 200;
  }

  h1::before {
    content: ">";
  }

  .clickable {
    cursor: pointer;
  }

  .clickable:hover {
    color: #007acc;
  }
</style>

<section>
  <p>{title}</p>
  {#each elements as element}
    <h1 class={element.onClick ? 'clickable' : ''} on:click={element.onClick}>
      {element.text}
    </h1>
  {/each}
</section>
