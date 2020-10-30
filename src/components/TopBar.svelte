<script lang="typescript">
  import type { Types } from "../types";
  export let elements: Types.BasicElement[];
  export let selected = 0;
  let _elements = elements.map((x) => ({ ...x, width: 0, offset: 0 }));
  function handleClick(id) {
    return () => {
      selected = id;
      const curr = elements[id];
      curr.onClick && curr.onClick();
    };
  }
</script>

<style>
  section {
    display: flex;
    height: 3rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: #222;
  }
  h1 {
    font-size: 2rem;
    line-height: 2rem;
    margin: 0;
    font-family: monospace;
    font-weight: 100;
  }
  button {
    background-color: transparent;
    padding: 6px 12px;
    border: none;
  }

  .ripple {
    background-position: center;
    transition: background 0.8s;
  }
  .ripple:hover {
    background: #000 radial-gradient(circle, transparent 1%, #000 1%)
      center/15000%;
  }

  .ripple:hover > h1 {
    color: white;
  }

  .ripple:active {
    background-color: #cda869;
    background-size: 100%;
    transition: background 0s;
  }

  span {
    position: absolute;
    height: 2px;
    background-color: white;
    top: calc(3rem - 2px);
    transition: width 200ms;
    transition: left 200ms;
  }
</style>

<section>
  {#each _elements as element, i}
    <button
      class="ripple"
      bind:clientWidth={element.width}
      bind:offsetWidth={element.offset}
      on:click={handleClick(i)}>
      <h1 style="color: {i == selected ? '#cda869' : 'white'};">
        {element.text}
      </h1>
    </button>
  {/each}
  <span
    style="width: {_elements[selected].width}px; left: {_elements.reduce((acc, cv, i) => (i < selected ? acc + cv.width : acc), 0)}px" />
</section>
