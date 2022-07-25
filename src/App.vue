<template>
<header>
  <img src="./icon.png" class="logo">
  <H1>AniList</H1>
  <Auth class="auth_com"></Auth>
</header>
  <div class="grid">
    <aside class="sideblock">
    </aside>
    hello
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Auth from "./page/Auth.vue";
@Options({
  components: {
    Auth
  },
})

export default class App extends Vue {}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">