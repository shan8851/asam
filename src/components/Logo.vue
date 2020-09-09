<template>
  <g-link class="logo" to="/">
    <g-image class="nav-image" src="~/assets/images/headshot.jpg" />
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  .nav-image {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }
}
</style>
