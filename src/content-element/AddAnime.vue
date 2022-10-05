<template>
    <div class="add_anime">
      <input type="file" id="file" accept="image/jpeg,image/png,image/jpg" class="custom-file-input">
      <input type="text" id="name" placeholder="Name" class="i">

      <div id="genre" @click="genre()" class="div_genre">
        <p id="genre_content" class="add_genre">Genre</p>
      </div>
      <nav id="genre_btn" class="btn_genre">
            <button class="button_filter">Mortial arts</button>
            <button class="button_filter">War</button>
            <button class="button_filter">Drama</button>
            <button class="button_filter">Detective</button>
            <button class="button_filter">history</button>
            <button class="button_filter">Comedy</button>
            <button class="button_filter">Furs</button>
            <button class="button_filter">Maho-shojo</button>
            <button class="button_filter">Musical</button>
            <button class="button_filter">Everyday life</button>
            <button class="button_filter">Adventures</button>
            <button class="button_filter">Parody</button>
            <button class="button_filter">Romance</button>
            <button class="button_filter">Senen</button>
            <button class="button_filter">Sport</button>
            <button class="button_filter">Fairy tale</button>
            <button class="button_filter">Shojo-ai</button>
            <button class="button_filter">Senen-ai</button>
            <button class="button_filter">Samurai</button>
            <button class="button_filter">Thriller</button>
            <button class="button_filter">Horrors</button>
            <button class="button_filter">Fantasy</button>
            <button class="button_filter">School</button>
            <button class="button_filter">Etty's</button>
      </nav>

      <select id="year" class="select_add">
        <option>1971</option>
        <option>1977</option>
        <option>1980</option>
        <option>1991</option>
        <option>1992</option>
        <option>1993</option>
        <option>1994</option>
        <option>1995</option>
        <option>1996</option>
        <option>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>

      <select id="country" class="select_add">
        <option>Japanese</option>
        <option>USA</option>
        <option>China</option>
      </select>

      <select id="category" class="select_add">
        <option value="1">Viewed</option>
        <option value="2">Planned</option>
        <option value="3">Abandoned</option>
      </select>
      <input v-if="Number(a_value) == 3" type="number" id="series" placeholder="Last series" class="i">
      <input type="number" id="series" placeholder="Series" class="i">
      <input type="number" id="seasons" placeholder="Seasons" class="i">
      <textarea id="description" cols="30" rows="10"></textarea>
      <strong id="text_reg"></strong>
      <button class="add" @click="addAnime()">Add</button>
    </div>
  </template>
  
  <style>
.button_filter{
    background-color: #15141a;
    color: #f5dea4;
    outline: none;
    border-top: solid 1px;
    border-bottom: solid 1px;
    border-left: none;
    border-right: none;
    min-height: 34px;
}
.div_genre{
  margin-left: 11px;
  margin-right: 11px;
  margin-bottom: 10px;
  border: 2px solid;
  border-color: #f5deae;
  border-radius: 4px;
}
.add_genre{
    background-color: #15141a;
    min-height: -webkit-max-content;
    min-height: -moz-max-content;
    min-height: max-content;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    color: #f5dea4;
    padding: 7px;
}
.add_genre p{
    background-color: #666;
    margin: 2px;
    padding: 2px
}
.btn_genre{
    position: absolute;
    background-color: rgb(8, 65, 46);
    width: 225px;
    display: flex;
    flex-direction: column;
    max-height: 0;
    transition: all 0.5s ease-out;
    overflow: auto;
    z-index: 1;
    margin-left: 17px;

}
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
.select_add{
  padding-left: 5px;
  padding-right: 5px;
  border: 2px solid;
  border-color: rgb(245 222 174);
  border-radius: 4px;
  background-color: rgb(21 20 26);
  width: 240px;
  height: 35px;
  margin-bottom: 10px;
  outline: none;
  font-size: 15px;
}
.select_add:focus{
  border-color: rgb(56, 47, 47);
}
.select_add::placeholder{
  color: wheat;
}
.select_add::-webkit-outer-spin-button,
.select_add::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
  margin-bottom: 10px;
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
  import { setVariable } from "@/storage";
  @Options({
    components: {
    },
  })
  
export default class Anime extends Vue {
    a_value = false;
    isGenre = false;
    
    _genres = [
        'Mortial arts', 'War' ,'Drama', 
        'Detective', 'history', 'Comedy', 
        'Furs', 'Maho-shojo', 'Musical', 
        'Everyday_life', 'Adventures', 'Parody',
        'Romance', 'Senen', 'Sport', 'Fairy', 'tale', 
        'Shojo-ai', 'Senen-ai', 'Samurai', 'Thriller',
        'Horrors', 'Fantasy', 'Etty', 'School'
    ];
    mounted(): void {
      const Abandoned = document.getElementById('category')
      let value = (Abandoned as HTMLSelectElement).value;
      if(Number(value) == 3){ 
        this.a_value = true
      }else {
        this.a_value = false
      }

      //Genre
      const $genre_content = document.getElementById('genre_content');
        const $genre_btn = document.getElementById('genre_btn')?.querySelectorAll('button');
        const arr_genre: string|(string|null)[] = [];
        $genre_btn?.forEach((e) => {
            e.addEventListener('click', () => {

                
                let id = -1
                for(let i = 0; i < $genre_btn.length ; i++ ){
                    if($genre_btn[i] == e){
                        id = i
                    }
                }
                let index = arr_genre.indexOf(this._genres[id]);
                if(index == -1){
                    
                    //TODO: удаление из массива
                    arr_genre.push(this._genres[id]);
                    e.style.background = '#666';
                    console.log(arr_genre);
                } else{
                    arr_genre.splice(index, 1)
                        e.style.background = '#15141a';
                }
                $genre_content!.innerHTML = ''
                
                if(arr_genre.length <= 0) {
                    const p = document.createElement('p');
                    p.innerText = "Genre";
                    p.style.background = '#f0f8ff00';

                    $genre_content!.appendChild(p);
                } else{
                    arr_genre.forEach((e) => {
                    const p = document.createElement('p');
                    p.textContent = e;
                    
                    $genre_content!.appendChild(p);
                })
                }
            })
        })

    }
    genre(){
        const _genre = document.getElementById('genre_btn');

        if(this.isGenre == true){
            _genre!.style.maxHeight = "0px"
            _genre!.style.transition = "all 0.5s ease-out"
            this.isGenre = false
        }
        else if(this.isGenre == false){
            _genre!.style.maxHeight = "240px"
            _genre!.style.transition = "all 0.5s ease-in"
            this.isGenre = true
        }
    }
    addAnime(){
      var xhr = new XMLHttpRequest();

        const _file = document.getElementById('file');
        const _name = document.getElementById('name');
        const _genre = document.getElementById('genre');
        const _year = document.getElementById('year');
        const _country = document.getElementById('country');
        const _series = document.getElementById('series');
        const _seasons = document.getElementById('seasons');
        const _description = document.getElementById('description');

        const _text_reg = document.getElementById('text_reg');

        if(_file!.innerText == ""){ _text_reg!.textContent = "add an image!";  return; }
        if(_name!.innerText == ""){ _text_reg!.textContent = "enter a name";  return; }
        if(_genre!.innerText == ""){ _text_reg!.textContent = "enter a genre";  return; }
        if(_year!.innerText == ""){ _text_reg!.textContent = "choose the year of release";  return; }
        if(_country!.innerText == ""){ _text_reg!.textContent = "choose a country";  return; }
        if(_series!.innerText == ""){ _text_reg!.textContent = "choose the number of series";  return; }
        if(_seasons!.innerText == ""){ _text_reg!.textContent = "choose the number of seasons";  return; }
        if(_description!.innerText == ""){ _text_reg!.textContent = "choose a description";  return; }

        let ids = ['file', 'name', 'soul', 'year', 'side', 'series', 'seasons', 'description']

        let json = '{'

        for(let i = 0; i<ids.length;i++){
          let a = document.getElementById(ids[i])
          json += `${ids[i]}: ${a?.innerText}`
        }
        json+='}'

        xhr.open('POST', '/addAnime');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);
        setVariable('visible', false)
    }
  }
  </script>
  
  <style src="../style/main-content.css"></style>