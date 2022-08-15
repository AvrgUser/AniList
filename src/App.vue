<template>
  <header>
    <div class="log_d" v-on:click="redirMain">
      <img src="./icon.png" alt="" width="120px">
      <h1 >AniList</h1>
    </div>
    <accaunt></accaunt>
  </header>

  <main>
    <h1><strong>All anime</strong></h1>
    <div>
      <aside class="filter">
        <strong>Filter</strong>
      </aside>
      <div class="fulanini">
        <anime></anime>
      </div>
    </div>

  </main>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import Accaunt from "./Accaunt.vue";
import Anime from "./content-element/Anime.vue";

@Options({
  components: {
    Accaunt,
    Anime
  },
})

export default class App extends Vue {
  data(){
    return{
      title:'AniList'
    }
  }
  redirMain(){
        window.location.href = `http://${window.location.host}/`;
    }
}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">