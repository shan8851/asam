<template>
  <Layout :show-logo="true">
    <div class="home-container">
      <h1 class="heading">Hi, I'm Asam</h1>
      <h3 class="subheading">A software developer from the 🇬🇧</h3>
      <div class="details">
        <p>
          🤓 You can read more about me
          <g-link class="link" to="/about">HERE</g-link>
        </p>
        <p>
          ✍️ I keep a (somewhat) regular blog
          <g-link class="link" to="/blog">HERE</g-link>
        </p>
        <p>
          📧 If you want to chat, work together or anything else, you can
          contact me
          <a href="mailto:asamshan456@gmail.com" class="link">HERE</a>
        </p>
        <p>
          👨‍💻 Check out what I have been working on
          <g-link class="link" to="/projects">HERE</g-link>
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
<style lang="scss">
.home-container {
  width: 80%;
  margin: auto;
  margin-top: 20vh;
}
.heading {
  font-size: 72px;
}
.subheading {
  font-size: 36px;
  margin: 0;
}
.details {
  margin: 20px 10px;
}
.link {
  font-weight: bold;
}
</style>
