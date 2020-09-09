<template>
  <Layout :show-logo="true">
    <div class="container">
      <h1>Projects</h1>
      <p>Here are some projects I have been working on</p>
      <div>
        <div v-bind:key="data.id" v-for="data in data">
          <div class="project-section">
            <h3>{{ data.title }}</h3>
            <p>{{ data.description }}</p>
            <div class="tech-list">
              <div v-bind:key="tech" v-for="tech in data.tech">
                <code class="tech">{{ tech }}</code>
              </div>
            </div>
            <div class="link-wrapper">
              <a class="link" v-bind:href="data.repo">REPO</a>
              <a class="link" v-bind:href="data.demo">DEMO</a>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import data from "../data/projects.json";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>
<style lang="scss">
.container {
  width: 80%;
  margin: auto;
}
.tech-list {
  display: flex;
  margin-bottom: 16px;
}
.tech {
  text-transform: uppercase;
  margin-right: 10px;
}
.link-wrapper {
  margin-bottom: 16px;
}
.link {
  font-weight: bold;
  margin-right: 10px;
}
</style>
