<script lang="ts">
  import TopBar from "./components/TopBar.svelte";
  import EpicBox from "./components/EpicBox.svelte";
  import InfoList from "./components/InfoList.svelte";
  import Projects from "./screens/Projects.svelte";
  import Home from "./screens/Home.svelte";
  import type { Types } from "./types";
  const btns = [
    { text: "home", onClick: () => console.log("pp") },
    { text: "principal" },
    { text: "example" },
  ];
  const fields: Types.Field[] = [
    { title: "title", text: "iasjfoasgoasgbsag" },
    { title: "title", text: "iasjfoasgoasgbsag" },
    { title: "title", text: "iasjfoasgoasgbsag" },
    { title: "title", text: "iasjfoasgoasgbsag" },
    { title: "title", text: "iasjfoasgoasgbsag" },
  ];
</script>

<style>
  main {
    text-align: center;
    max-height: calc(100vh - 3rem);
    overflow-y: auto;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    overflow: hidden;
  }

  div {
    flex-grow: 1;
    max-width: 100%;
    box-sizing: content-box;
    overflow-y: auto;
  }
</style>

<main>
  <TopBar elements={btns} />
  <div>
    <Home />
  </div>
</main>
