<template>
  <Layout>
    <g-image alt="seike460" src="~/favicon.png" width="135" />
    <h1>portfolio.seike460.com</h1>
    <div class="article">
      <div v-for="item in $page.allPost.edges">
        <div v-html="item.node.content"/>
      </div>
    </div>
    <p class="home-links">
      <a href="https://slide.seike460.com/#/" target="_blank">slide</a>
      <a href="https://blog.seike460.com/" target="_blank">Blog</a>
    </p>
  </Layout>
</template>

<script>
export default {
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<script>
  export default {}
</script>

<page-query>
query posts {
  allPost {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>
