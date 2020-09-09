<template>
  <Layout :show-logo="true">
    <div class="container">
      <h1>About Me</h1>
      <p>
        I am a software engineer working in the Javascript space, I am a big fan
        of the jam stack. I have a lot of experience with Gatsby and React, but
        have more recently started looking at Vue. In fact this very site was
        built with Gridsome, a static site generator for Vue, which is heavily
        influenced by Gatsby.
      </p>
      <p>
        I am a second career developer who came from the business world. My
        experience in business has helped me understand the commercial side of
        this world, which has been very useful thus far in my career.
      </p>
      <p>
        Outside of work I am interested in learning more about the operations
        side of the industry, I have a great friend helping mw with the Docker,
        AWS, K8s and more as well as starting to get more and more experience
        with NodeJS in a bid to become a more well rounded engineer.
      </p>
      <h2>Mentoring</h2>
      <p>
        I have been lucky enough to have some great mentors so far in my career.
        Without these I definitely wouldn't be where I am today. To that end I
        try to give back and look to help as many people looking to get into the
        industry as I can. You can find more about my mentoring over at
        <a href="https://mentors.codingcoach.io/?name=Asam+Shan"
          >Coding Coach</a
        >
      </p>
      <h2>Writing</h2>
      <p>
        Not that you would know it giving the state of my
        <g-link to="/blog">blog</g-link>, but I had a small stint writing for a
        living. I have always enjoyed it and kept a blog for the past couple of
        years essentially journaling my journey into web development. It is not
        your typical dev blog filled with tutorials - there are already a bunch
        of those, but I hope it gives insight into how I came from 0 to hired
        and I hope it can help others do the same.
      </p>
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
.container {
  width: 80%;
  margin: auto;
}
</style>
