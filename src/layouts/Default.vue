<template>
  <div class="layout">
    <header class="header">
      <strong>
        <h1>portfolio.seike460.com</h1>
      </strong>
      <nav class="nav">
        <a class="nav__link" href="https://slide.seike460.com/#/" target="_blank">slide</a>
        <a class="nav__link" href="https://blog.seike460.com/" target="_blank">Blog</a>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
