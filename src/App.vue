<template>
  <header>
    <div class="log_d" v-on:click="redirMain">
      <img src="./icon.png" alt="" width="120px">
      <h1 >AniList</h1>
    </div>
    <button class="sign_up" id="sign-up" v-on:click="redirSign_up">Sign up</button>
    <button class="sign_in" id="sign-up" v-on:click="redirSign_in">Sign in</button>
  </header>

</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";

console.log('ddd');

@Options({
  components: {
  },
})

export default class App extends Vue {
  data(){
    return{
      title:'AniList'
    }
  }
  redirSign_in(){
    console.log('nigger')
    window.location.replace(`http://${window.location.host}/auth`);
  }
  redirSign_up(){
    console.log('ssss')
    window.location.replace(`http://${window.location.host}/reg`);
  }
  redirMain(){
    console.log('gggg')
    window.location.replace(`http://${window.location.host}/`);
  }
}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">