<script lang="ts">
  import EpicBox from "../components/EpicBox.svelte";
  //AAAAAAAAAAAAAAAAAAA vs code pls, it's not an error
  import Signature from "./signature.svg";
  import type { Types } from "../types";
  const elements: Types.BasicElement[] = [
    { text: "Full-Stack developer*" },
    { text: "cool guy" },
    { text: "*in the making" },
  ];
  let floatingBox1Height: number;
</script>

<style>
  .main {
    background-color: #505050;
    height: calc(100vh - 3rem);
    box-sizing: border-box;
  }

  .FloatingBox1 {
    text-align: start;
  }

  .FloatingBox1 > * {
    margin: 0;
  }

  .FloatingBox1 > h1 {
    font-family: monospace;
    font-size: 5rem;
    color: #cda869;
  }

  .FloatingBox1 > h2 {
    color: #333333;
    font-size: 3rem;
    line-height: 4rem;
    margin-bottom: 2rem;
  }

  .FloatingBox1 > h3 {
    color: #111111;
    font-size: 8rem;
    font-family: sans-serif;
    line-height: 6rem;
  }

  .FloatingBox1 > h4 {
    font-family: Consolas;
    color: #111111;
    font-size: 8rem;
    line-height: 7rem;
  }

  .FloatingBox2 {
    display: flex;
  }

  .FloatingBox2 > h1 {
    font-family: monospace;
    font-weight: 100;
    font-size: 3rem;
    color: #222222;
    margin: 32px;
  }

  header {
    display: flex;
  }

  section {
    position: absolute;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 10;
    clip-path: polygon(0 0, 50% 0, 80% 100%, 0% 100%);
    background-color: #505050;
  }
  aside {
    z-index: 5;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50vw;
    height: calc(100vh - 3rem);
    background-color: #202020;
  }
</style>

<div class="main">
  <section>
    <header>
      <div class="FloatingBox1" bind:clientHeight={floatingBox1Height}>
        <h1>hola,</h1>
        <h2>my name is</h2>
        <h3>ian</h3>
        <h4>elizondo</h4>
      </div>
      <Signature width={floatingBox1Height} height={floatingBox1Height} />
    </header>

    <div class="FloatingBox2">
      <h1>{'() =>'}</h1>
      <EpicBox title="and i'm a" {elements} />
    </div>
  </section>
  <aside>
    <div />
  </aside>
</div>
