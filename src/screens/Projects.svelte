<script lang="ts">
  import EpicBox from "../components/EpicBox.svelte";
  import InfoList from "../components/InfoList.svelte";
  import type { Types } from "../types";
  const githubURL = "https://api.github.com/users/ianeli1/repos";
  let selected = 0;
  let projects: Types.Field[][] = [];
  let names: Types.BasicElement[] = [];
  fetchGitHubData()
    .then((list) => {
      return list.map(
        (project) =>
          [
            { title: "name", text: project.name },
            { title: "description", text: project.description },
            { title: "language", text: project.language },
            {
              title: "other_info",
              text: `date_created: ${project.created_at.slice(
                0,
                10
              )}<br>last_update: ${project.updated_at.slice(0, 10)}`,
            },
          ] as Types.Field[]
      );
    })
    .then((r) => {
      projects = r;
      names = projects.map((c, i) => ({
        text: c[0].text,
        onClick: () => {
          selected = i;
        },
      }));
      console.log(projects);
    });

  async function fetchGitHubData() {
    const res = await fetch(githubURL);
    return (await res.json()) as Types.GitHubProject[];
  }
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 30%;
    height: calc(100vh - 3rem);
    overflow: hidden;
    background-color: #505050;
  }
  section {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    flex-grow: 1;
    text-align: start;
    padding: 0 70px;
  }
  section::-webkit-scrollbar {
    display: none;
  }
  h1 {
    font-size: 4rem;
    line-height: 4.5rem;
    color: #cda869;
    margin: 1rem;
  }
  article {
    padding: 1rem 0;
  }
</style>

<div>
  <section>
    <h1>my projects,</h1>
    <article>
      <EpicBox title="from my github" elements={names} />
    </article>
  </section>
  <InfoList fields={projects[selected]} />
</div>
