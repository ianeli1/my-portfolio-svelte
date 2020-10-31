<script lang="ts">
  import type { Types } from "../types";
  export let fields: Types.Field[] = [];
  export let link: Types.Field | undefined;
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    padding: 24px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background-color: #111;
    text-align: start;
    box-sizing: border-box;
  }
  h1 {
    font-family: monospace;
    font-size: 3rem;
    line-height: 3rem;
    color: #cda869;
  }
  h1::after {
    content: ":";
  }
  p {
    font-family: monospace;
    font-size: 2.5rem;
    color: white;
  }
</style>

<div>
  {#each fields as field}
    <h1>{field.title}</h1>
    <p>
      {@html field.text}
    </p>
  {/each}
  {#if link}<a href={link.text} target="_blank">link.title</a>{/if}
</div>
