<template>
<header>
  <img src="./icon.png" class="logo">
  <H1>AniList</H1>
  <Auth class="auth_com"></Auth>
</header>
<main class="main">
  <aside class="sideblock">
      <section><Nav></Nav></section>
  </aside>

  <MainContent class="MainContent"></MainContent>
  
</main>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import Auth from "./page/Auth.vue";
import Nav from "./searchfilters/nav.vue";
import MainContent from "./main-content/MainContent.vue"

@Options({
  components: {
    Auth,
    Nav,
    MainContent
  },
})

export default class App extends Vue {}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">