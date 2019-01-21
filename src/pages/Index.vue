<template>
  <Layout>
    <g-image alt="seike460" src="~/favicon.png" width="135" />
    <div class="article">
      <div v-for="item in $page.allPost.edges">
        <div v-html="item.node.content"/>
      </div>
    </div>
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
