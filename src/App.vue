<template>
  <header>

    <div class="log_d" v-on:click="redirMain">
      <img src="./icon.png" alt="" width="120px">
      <h1>AniList</h1>
    </div>
    <div class="auth_d">
      <Accaunt v-if="isAuth"></Accaunt>
      <Signin_Signup v-if="!isAuth"></Signin_Signup>
    </div>
  </header>
  <add-anime v-if="isVisible" class="add_anime"></add-anime>

  <main>
    <h1><strong>All anime</strong></h1>
    <div class="main_">
      <AniInfo v-if="viewLike" :id="animeLikeID" class="aniinfo"></AniInfo>
      <filters></filters>
      <div class="fulanini" id="allanime">
          <anime v-for="index in countAni" :key="index" :id="'anime_' + index"></anime>
          
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
import Filters from "./searchfilters/Filters.vue"
import Signin_Signup from "./Signin-Signup.vue"

import { getVariable, SetOnVarChangeListener, setVariable } from "./storage"
@Options({
  components: {
    Accaunt,
    Anime,
    AniInfo,
    AddAnime,
    Signin_Signup,
    Filters
  },
})

export default class App extends Vue {
  isAuth = false
  isRoot = true
  viewLike = getVariable('viewLike')
  isVisible = getVariable('visible')
  animeLikeID = getVariable('animeLikeID')
  countAni = getVariable('countAni'); //сюда приходит кол-во аниме
  animeID = [] //id блоков с аниме

  mounted(){
    const $id = document.getElementById('allanime')?.querySelectorAll('div')
    $id?.forEach((e) => {
      this.animeID.push((e.id as never))

    })
    setVariable('anime_id', this.animeID)
  }
  _onVarChange(){
    this.isVisible = getVariable('visible')
    this.$forceUpdate()
  }
  
  redirMain(){
    window.location.href = `http://${window.location.host}/`;
  }
  beforeMount(){
    SetOnVarChangeListener('visible', this._onVarChange)
    SetOnVarChangeListener('viewLike' ,() => {
      this.viewLike = getVariable('viewLike')
      this.$forceUpdate()
    })
    SetOnVarChangeListener('animeLikeID' ,() => {
      this.animeLikeID = getVariable('animeLikeID')
      this.$forceUpdate()
    })
    let xhr = new XMLHttpRequest();

    xhr.open("GET", '/getuserinfo')
    xhr.onloadend = ()=>{
      if(xhr.status==200){
        this.isAuth = !xhr.responseText.includes('user is not authorized')
        setVariable('username', JSON.parse(xhr.responseText).name);
        setVariable('isAuth', true)
        SetOnVarChangeListener('isAuth', this.isAuth = getVariable('isAuth'))
      }
    }
    xhr.send()

    let xhr_ = new XMLHttpRequest();
    xhr_.open('GET', '/getanimelist');
    xhr_.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let json = JSON.stringify({
      filters: []
    });
    xhr_.onloadend = ()=>{
        let request = JSON.parse(xhr_.responseText).lenght
        this.countAni = request;
    };
    xhr_.send(json);
    
    SetOnVarChangeListener('visible', () => {
      this.isVisible = getVariable('visible')
      this.$forceUpdate()
    })
  }
}
</script>

<style src="./style.css"></style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&display=swap" rel="stylesheet">