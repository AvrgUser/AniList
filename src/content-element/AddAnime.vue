<template>
    <div class="add_anime">
      <input type="file" id="file" accept="image/jpeg,image/png,image/jpg" class="custom-file-input">
      <input type="text" id="name" placeholder="Name" class="i">
      <input type="text" id="soul" placeholder="Soul" class="i">
      <input type="date" id="year" placeholder="Year" class="i">
      <input type="text" id="side" placeholder="Side" class="i">
      <input type="number" id="series" placeholder="Series" class="i">
      <input type="number" id="seasons" placeholder="Seasons" class="i">
      <textarea id="description" cols="30" rows="10"></textarea>
      <button class="add" @click="addAnime">Add</button>
    </div>
  </template>
  
  <style>
  .custom-file-input {
    text-align: left;
    border: 2px solid;
    border-color: rgb(245 222 179);
    border-radius: 4px;
    width: 150px;
    text-align: left;
    width: 235px;
    height: 25px;
  }
  .custom-file-input::-webkit-file-upload-button {
    border-left: 2px solid;
    border-color: rgb(245 222 179);
    background-color: rgb(32, 32, 32);
    height: 25px;
    cursor: pointer;
    color: wheat;
  }
  .custom-file-input::before {
    color: wheat;
    display: inline-block;
    background-color: #202020;
    outline: none;
    opacity: 0;
    font-size: 10pt;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active {
    outline: 0;
  }
  .custom-file-input:active::before {
    background-color: #202020;
  }
  
  .i{
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid;
    border-color: rgb(245 222 174);
    border-radius: 4px;
    background-color: rgb(21 20 26);
    width: 225px;
    height: 35px;
    margin-top: 15px;
    outline: none;
    font-size: 15px;
    overflow: hidden;
  }
  .i:focus{
    border-color: rgb(56, 47, 47);
  }
  .i::placeholder{
    color: wheat;
  }
  .i::-webkit-outer-spin-button,
  .i::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  
  .add{
    text-align: center;
    border: 2px solid;
    border-color: rgb(245 222 179);
    border-radius: 4px;
    background-color: rgb(32, 32, 32);
    height: 40px;
    width: 100px;
    font-size: 17px;
    padding: 5px;
    margin-top: 15px;
    position: relative;
    
  }
  .add:hover{
    border-color: rgb(63, 56, 45);
    cursor: pointer;
  }
  .add:active{
    border-color: rgb(245 222 179);
  }
  
  textarea{
    padding-left: 5px;
    border: 2px solid;
    border-color: rgb(245 222 174);
    border-radius: 4px;
    background-color: rgb(21 20 26);
    width: 225px;
    height: 35px;
    margin-top: 15px;
    outline: none;
    font-size: 15px;
    height: 80px;
    resize: none;
    overflow: hidden;
  }
  </style>
  <script lang="ts">
  import { Options, Vue } from "vue-class-component";
  
  @Options({
    components: {
    },
  })
  
  export default class Anime extends Vue {
    addAnime(){
      var xhr = new XMLHttpRequest();

        const file = document.getElementById('file')
        const name_ = document.getElementById('name')
        const soul = document.getElementById('soul')
        const year = document.getElementById('year')
        const side = document.getElementById('side')
        const series = document.getElementById('series')
        const seasons = document.getElementById('seasons')
        const description = document.getElementById('description')

        if(name_.value == ""){  return; }
        

        let json = JSON.stringify({
            _file: file,
            _Name: name_.value,
            _Soul: soul,
            _Year: year,
            _Side: side,
            _Series: series,
            _Seasons: seasons,
            _Description: description
        });

        xhr.open('POST', '/addAnime');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);

    }
  }
  </script>
  
  <style src="../style/main-content.css"></style>