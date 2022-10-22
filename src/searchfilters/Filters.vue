<style>
::-webkit-scrollbar {
    background-color: #000;
    width: 4px;
    height: 4px;
}
::-webkit-scrollbar-thumb{
    background-color: #f5dea4;
    border-radius: 4px;
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
    margin-top: 4px;
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
.div_f{
    margin-top: 10px;
    min-height: -webkit-max-content;
    width: auto;
}
.div_f p {
    margin: 2px;
    padding: 2px;
    width: auto;
}
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
.content_filter{
    background-color: #15141a;
    min-height: -webkit-max-content;
    min-height: -moz-max-content;
    min-height: max-content;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    color: #f5dea4;
    padding: 5px;
}
.content_filter p{
    background-color: #666;
}
.btn_filter{
    position: absolute;
    background-color: rgb(8, 65, 46);
    width: 225px;
    display: flex;
    flex-direction: column;
    max-height: 0;
    transition: all 0.5s ease-out;
    overflow: auto;
    z-index: 1;
    margin-left: 2px;

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
    z-index: 0;
}
.search:hover{
    border-color: rgb(63, 56, 45);
    cursor: pointer;
}
.search:active{
    border-color: rgb(245 222 179);
}
  </style>
<template>
    <div class="filter">
        
        <input type="search" placeholder="Search" class="i"><br>

        <strong>Filter</strong>
        
        <div id="genre" @click="genre()" class="div_f">
            <p id="genre_content" class="content_filter">Genre</p>
        </div>
        <nav id="genre_btn" class="btn_filter">
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
        
        <div id="year" @click="year()" class="div_f">
            <p id="year_content" class="content_filter">Year</p>
        </div>
        <nav id="year_btn" class="btn_filter">
            <button class="button_filter">1971</button>
            <button class="button_filter">1977</button>
            <button class="button_filter">1980</button>
            <button class="button_filter">1991</button>
            <button class="button_filter">1992</button>
            <button class="button_filter">1993</button>
            <button class="button_filter">1994</button>
            <button class="button_filter">1995</button>
            <button class="button_filter">1996</button>
            <button class="button_filter">1997</button>
            <button class="button_filter">1998</button>
            <button class="button_filter">1999</button>
            <button class="button_filter">2000</button>
            <button class="button_filter">2001</button>
            <button class="button_filter">2002</button>
            <button class="button_filter">2003</button>
            <button class="button_filter">2004</button>
            <button class="button_filter">2005</button>
            <button class="button_filter">2006</button>
            <button class="button_filter">2007</button>
            <button class="button_filter">2008</button>
            <button class="button_filter">2009</button>
            <button class="button_filter">2010</button>
            <button class="button_filter">2011</button>
            <button class="button_filter">2012</button>
            <button class="button_filter">2013</button>
            <button class="button_filter">2014</button>
            <button class="button_filter">2015</button>
            <button class="button_filter">2016</button>
            <button class="button_filter">2017</button>
            <button class="button_filter">2018</button>
            <button class="button_filter">2019</button>
            <button class="button_filter">2020</button>
            <button class="button_filter">2021</button>
            <button class="button_filter">2022</button>
        </nav>

        <div id="country" @click="country()" class="div_f">
            <p id="country_content" class="content_filter">Country</p>
        </div>
        <nav id="country_btn" class="btn_filter">
            <button class="button_filter">Japanese</button>
            <button class="button_filter">USA</button>
            <button class="button_filter">China</button>
        </nav>

        <div id="type" @click="type()" class="div_f">
            <p id="type_content" class="content_filter">Type</p>
        </div>
        <nav id="type_btn" class="btn_filter">
            <button class="button_filter">OVA</button>
            <button class="button_filter">ONA</button>
            <button class="button_filter">TV</button>
            <button class="button_filter">Feature film</button>
            <button class="button_filter">Short film</button>
            <button class="button_filter">Announcement</button>
        </nav>

        <div v-if="isAuth" id="сategory" @click="сategory()" class="div_f">
            <p id="сategory_content" class="content_filter">Category</p>
        </div>
        <nav id="сategory_btn" class="btn_filter">
            <button class="button_filter">Viewed</button>
            <button class="button_filter">Planned</button>
            <button class="button_filter">Abandoned</button>
        </nav>

        <button class="search" @click="filters()">Search</button>
    </div>  
</template>
<script lang="ts">
import { getVariable, SetOnVarChangeListener, setVariable } from "@/storage";
import { Vue } from "vue-class-component";

export default class Nav extends Vue {
    isAuth = getVariable('isAuth');

    isGenre = false;
    isYear = false
    isCountry = false;
    isType = false;
    isCategory = false;

    _genres = [
        'Mortial arts', 'War' ,'Drama', 
        'Detective', 'history', 'Comedy', 
        'Furs', 'Maho-shojo', 'Musical', 
        'Everyday_life', 'Adventures', 'Parody',
        'Romance', 'Senen', 'Sport', 'Fairy', 'tale', 
        'Shojo-ai', 'Senen-ai', 'Samurai', 'Thriller',
        'Horrors', 'Fantasy', 'Etty', 'School'
    ];
    _year = [
        '1971', '1977', '1980', '1991', '1992', '1993', '1994',
        '1995', '1996', '1997', '1998', '1999', '2000', '2001',
        '2002', '2003', '2004', '2005', '2006', '2007',  '2008', 
        '2009', '2010', '2011', '2012', '2013','2014', '2015', 
        '2016', '2017', '2018', '2019', '2020', '2021', '2022',
    ]
    _country = [
        'Japanese', 'USA', 'China'
    ]
    _type = [
        'OVA', 'ONA', 'TV', 'Feature film', 'Short film', 'Announcement'
    ]
    _category = [
        'Viewed', 'Planned', 'Abandoned'
    ]

    mounted(): void {
        SetOnVarChangeListener('isAuth', () => {
            this.isAuth = getVariable('isAuth');
            this.$forceUpdate()
        })

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

        //Year
        const $year_content = document.getElementById('year_content');
        const $year_btn = document.getElementById('year_btn')?.querySelectorAll('button');
        const arr_year: string|(string|null)[] = [];
        $year_btn?.forEach((e) => {
            e.addEventListener('click', () => {
                let id = -1
                for(let i = 0; i < $year_btn.length ; i++ ){
                    if($year_btn[i] == e){
                        id = i
                    }
                }
                let index = arr_year.indexOf(this._year[id]);
                if(index == -1){
                    
                    //TODO: удаление из массива
                    arr_year.push(this._year[id]);
                    e.style.background = '#666';
                } else{
                    arr_year.splice(index, 1)
                        e.style.background = '#15141a';
                }
                $year_content!.innerHTML = ''
                
                if(arr_year.length <= 0) {
                    const p = document.createElement('p');
                    p.innerText = "Year";
                    p.style.background = '#f0f8ff00';

                    $year_content!.appendChild(p);
                } else{
                    arr_year.forEach((e) => {
                    const p = document.createElement('p');
                    p.textContent = e;
                    
                    $year_content!.appendChild(p);
                })
                }
            })
        })

        //Country
        const $country_content = document.getElementById('country_content');
        const $country_btn = document.getElementById('country_btn')?.querySelectorAll('button');
        const arr_country: string|(string|null)[] = [];
        $country_btn?.forEach((e) => {
            e.addEventListener('click', () => {
                let id = -1
                for(let i = 0; i < $country_btn.length ; i++ ){
                    if($country_btn[i] == e){
                        id = i
                    }
                }
                let index = arr_country.indexOf(this._country[id]);
                if(index == -1){
                    arr_country.push(this._country[id]);
                    e.style.background = '#666';
                } else{
                    arr_country.splice(index, 1)
                        e.style.background = '#15141a';
                }
                $country_content!.innerHTML = ''
                
                if(arr_country.length <= 0) {
                    const p = document.createElement('p');
                    p.innerText = "Year";
                    p.style.background = '#f0f8ff00';

                    $country_content!.appendChild(p);
                } else{
                    arr_country.forEach((e) => {
                    const p = document.createElement('p');
                    p.textContent = e;
                    
                    $country_content!.appendChild(p);
                })
                }
            })
        })

        //Type
        const $type_content = document.getElementById('type_content');
        const $type_btn = document.getElementById('type_btn')?.querySelectorAll('button');
        const arr_type: string|(string|null)[] = [];
        $type_btn?.forEach((e) => {
            e.addEventListener('click', () => {
                let id = -1
                for(let i = 0; i < $type_btn.length ; i++ ){
                    if($type_btn[i] == e){
                        id = i
                    }
                }
                let index = arr_type.indexOf(this._type[id]);
                if(index == -1){
                    arr_type.push(this._type[id]);
                    e.style.background = '#666';
                } else{
                    arr_type.splice(index, 1)
                        e.style.background = '#15141a';
                }
                $type_content!.innerHTML = ''
                
                if(arr_type.length <= 0) {
                    const p = document.createElement('p');
                    p.innerText = "Year";
                    p.style.background = '#f0f8ff00';

                    $type_content!.appendChild(p);
                } else{
                    arr_type.forEach((e) => {
                    const p = document.createElement('p');
                    p.textContent = e;
                    
                    $type_content!.appendChild(p);
                })
                }
            })
        })

        //Category
        const $category_content = document.getElementById('сategory_content');
        const $category_btn = document.getElementById('сategory_btn')?.querySelectorAll('button');
        const arr_category: string|(string|null)[] = [];
        $category_btn?.forEach((e) => {
            e.addEventListener('click', () => {
                let id = -1
                for(let i = 0; i < $category_btn.length ; i++ ){
                    if($category_btn[i] == e){
                        id = i
                    }
                }
                let index = arr_category.indexOf(this._category[id]);
                if(index == -1){
                    arr_category.push(this._category[id]);
                    e.style.background = '#666';
                } else{
                    arr_category.splice(index, 1)
                        e.style.background = '#15141a';
                }
                $category_content!.innerHTML = ''
                
                if(arr_category.length <= 0) {
                    const p = document.createElement('p');
                    p.innerText = "Year";
                    p.style.background = '#f0f8ff00';

                    $category_content!.appendChild(p);
                } else{
                    arr_category.forEach((e) => {
                    const p = document.createElement('p');
                    p.textContent = e;
                    
                    $category_content!.appendChild(p);
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
    year(){
        const _yer = document.getElementById('year_btn');

        if(this.isYear == true){
            _yer!.style.maxHeight = "0px"
            _yer!.style.transition = "all 0.5s ease-out"
            this.isYear = false
        }
        else if(this.isYear == false){
            _yer!.style.maxHeight = "240px"
            _yer!.style.transition = "all 0.5s ease-in"
            this.isYear = true
        }
    }
    country(){
        const _country = document.getElementById('country_btn');

        if(this.isCountry == true){
            _country!.style.maxHeight = "0px"
            _country!.style.transition = "all 0.5s ease-out"
            this.isCountry = false
        }
        else if(this.isCountry == false){
            _country!.style.maxHeight = "240px"
            _country!.style.transition = "all 0.5s ease-in"
            this.isCountry = true
        }
    }
    type(){
        const _type = document.getElementById('type_btn');

        if(this.isType == true){
            _type!.style.maxHeight = "0px"
            _type!.style.transition = "all 0.5s ease-out"
            this.isType = false
        }
        else if(this.isType == false){
            _type!.style.maxHeight = "240px"
            _type!.style.transition = "all 0.5s ease-in"
            this.isType = true
        }
    }
    сategory(){
        const _category = document.getElementById('сategory_btn');

        if(this.isCategory == true){
            _category!.style.maxHeight = "0px"
            _category!.style.transition = "all 0.5s ease-out"
            this.isCategory = false
        }
        else if(this.isCategory == false){
            _category!.style.maxHeight = "240px"
            _category!.style.transition = "all 0.5s ease-in"
            this.isCategory = true
        }
    }
    filters(){
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/getanimelist');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let json = JSON.stringify({
            filters: [this._genres, this._year, this._country, this._type, this._category]
        });
        xhr.send(json);
    }
}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet">