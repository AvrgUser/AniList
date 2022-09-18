<template>
  <header>

    <div class="log_d" v-on:click="redirMain">
      <img src="./icon.png" alt="" width="120px">
      <h1>{{title}}</h1>
    </div>
    
    <div class="auth_d">
      <Accaunt v-if="isAuth"></Accaunt>
      <Signin_Signup v-if="!isAuth"></Signin_Signup>
    </div>

  </header>
  <add-anime v-if="isVisible" class="add_anime"></add-anime>

  <main>
    <h1><strong>All anime</strong></h1>
    <div style="margin-top: 15px;">

      <aside class="filter">
        <strong>Filter</strong>
      </aside>
      <div class="fulanini" >
      </div>
    </div>
  </main>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component"
import Accaunt from "./Accaunt.vue"
import Anime from "./content-element/Anime.vue"
import AniInfo from "./content-element/AniInfo.vue"
import AddAnime from "./content-element/AddAnime.vue"
import Signin_Signup from "./Signin-Signup.vue"
import { getVariable, SetOnVarChangeListener, setVariable } from "./storage"
@Options({
  components: {
    Accaunt,
    Anime,
    AniInfo,
    AddAnime,
    Signin_Signup
  },
})

export default class App extends Vue {
  isAuth = false
  isRoot = true
  isVisible = getVariable('visible')
  title = 'AniList'
  _onVarChange(){
    this.isVisible = getVariable('visible')
    console.log('visibility changed')
    this.$forceUpdate()
  }
  redirMain(){
    window.location.href = `http://${window.location.host}/`;
  }
  beforeMount(){
    SetOnVarChangeListener('visible', this._onVarChange)
    let xhr = new XMLHttpRequest();

    xhr.open("GET", '/getuserinfo')
    xhr.onloadend = ()=>{
      if(xhr.status==200){
        this.isAuth = !xhr.responseText.includes('user is not authorized')
        setVariable('username', JSON.parse(xhr.responseText).name);
      }
    }
    xhr.send()
    
  }
}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">