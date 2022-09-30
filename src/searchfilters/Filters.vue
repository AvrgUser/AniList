<template>
    <div class="filter">
        <strong>Filter</strong>

        <div id="genre" @click="style()">
            <p id="selected" >Жанр</p>
        </div>
        <nav id="select">
            <button class="genre_f">1</button>
            <button class="genre_f">2</button>
            <button class="genre_f">3</button>
            <button class="genre_f">4</button>
            <button class="genre_f">5</button>
            <button class="genre_f">6</button>
            <button class="genre_f">7</button>
            <button class="genre_f">8</button>
            <button class="genre_f">9</button>
            <button class="genre_f">10</button>
        </nav>

        <div id="s">
            <p id="selected" >год</p>
        </div>

        <div id="s">
            <p id="selected" >Страна</p>
        </div>

        <div id="s">
            <p id="selected" >Тип</p>
        </div>

        <button class="search">Search</button>
    </div>  
  </template>
  <style>
div{
    margin-top: 10px;
}
.genre_f{
    background-color: #15141a;
    color: #f5dea4;
    outline: none;
    height: 26px;
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-left: none;
    border-right: none;
}
#selected{
    background-color: #15141a;
    min-height: -webkit-max-content;
    min-height: -moz-max-content;
    min-height: max-content;
    max-width: 200px;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    color: #f5dea4;
    padding: 3px;
}
#selected p{
    background-color: #666;
}
#select{
    position: absolute;
    background-color: rgb(8, 65, 46);
    width: 200px;
    display: flex;
    flex-direction: column;
    max-height: 0;
    transition: all 0.5s ease-out;
    overflow: hidden;
}
nav button:hover{
    cursor: pointer;
}
.search{
    text-align: center;
    border: 2px solid;
    border-color: rgb(245 222 179);
    border-radius: 4px;
    background-color: rgb(32, 32, 32);
    height: 40px;
    width: 70px;
    font-size: 17px;
    padding: 5px;
    margin-top: 15px;
    position: relative;
    z-index: -1;
}
.search:hover{
    border-color: rgb(63, 56, 45);
    cursor: pointer;
}
.search:active{
    border-color: rgb(245 222 179);
}
  </style>
  <script lang="ts">
  import { Options, Vue } from "vue-class-component";
    
  export default class Nav extends Vue {
    isGenre = false;
    style(){
        const _genre = document.getElementById('select');

        if(this.isGenre == true){
            _genre!.style.maxHeight = "0px"
            _genre!.style.transition = "all 0.5s ease-out"
            this.isGenre = false
        }
        else if(this.isGenre == false){
            _genre!.style.maxHeight = "300px"
            _genre!.style.transition = "all 0.5s ease-in"
            this.isGenre = true
        }
        
    }
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet">