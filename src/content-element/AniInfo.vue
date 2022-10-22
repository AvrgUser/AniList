<template>
  <div class="aniinfo">
    <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmNWRlYWUiPjxwYXRoIGQ9Ik0zNC40LDQyLjUwODA4bDQzLjQ5MTkyLDQzLjQ5MTkybC00My40OTE5Miw0My40OTE5Mmw4LjEwODA4LDguMTA4MDhsNDMuNDkxOTIsLTQzLjQ5MTkybDQzLjQ5MTkyLDQzLjQ5MTkybDguMTA4MDgsLTguMTA4MDhsLTQzLjQ5MTkyLC00My40OTE5Mmw0My40OTE5MiwtNDMuNDkxOTJsLTguMTA4MDgsLTguMTA4MDhsLTQzLjQ5MTkyLDQzLjQ5MzY0bC00My40OTE5MiwtNDMuNDkzNjR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" @click="back()" class="cancel" alt="">
    <div class="likeContent">
      <select id="category" class="select_add" v-on:change="change()">
        <option value="Viewed">Viewed</option>
        <option value="Planned">Planned</option>
        <option value="Abandoned">Abandoned</option>
      </select>

      <select id="rating" class="select_add">
        <option value="0">Raitng</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="count" id="series" class="i" placeholder="Series" style="display: none">

      <button @click="next()" class="continue">continue</button>

    </div>
  </div>
</template>
<style>
.cancel{
  width: 40px;
  position: absolute;
  top: 53%;
  right: 50%;
  transform: translate(50%, 50%);
}
.likeContent{
  position: absolute;
  display: inline-grid;
  padding: 18px;
  border: solid;
  text-align: center;
  background-color: #15141aeb;
  border-radius: 6px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-items: center;
}
.continue{
  text-align: center;
  border: 2px solid;
  border-color: rgb(245 222 179);
  border-radius: 4px;
  background-color: rgb(32, 32, 32);
  height: 40px;
  width: max-content;
  font-size: 17px;
  padding: 5px;
  margin-top: 15px;
  position: relative;
}
.continue:hover{
    border-color: rgb(63, 56, 45);
    cursor: pointer;
}
.continue:active{
    border-color: rgb(245 222 179);
}

</style>
<script lang="ts">
import { getVariable, SetOnVarChangeListener, setVariable } from "@/storage";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})

export default class Anime extends Vue {
value!: number;
animeLikeID = getVariable('animeLikeID');
  change(){
    const category = document.getElementById("category");
    const series = document.getElementById("series");
    const rating = document.getElementById("rating");
    let value_category = (category as HTMLSelectElement)!.value;
    let value_series = (series as HTMLSelectElement)!.value;
    let value_rating = (rating as HTMLSelectElement)!.value;

    Number(value_category) == 1 

    if(value_category == 'Viewed'){
      series!.style.display = "none"
      rating!.style.display = "block"
    }
    else if(value_category == 'Abandoned'){
      rating!.style.display = "none"
      series!.style.display = "block"
    } 
    else{
      series!.style.display = "none"
      rating!.style.display = "none"
    }
  }
  next(){
    const category = document.getElementById("category");
    const series = document.getElementById("series");
    const rating = document.getElementById("rating");
    let value_category = (category as HTMLSelectElement)!.value;
    let value_series = (series as HTMLSelectElement)!.value;
    let value_rating = (rating as HTMLSelectElement)!.value;
    var elements = document.getElementsByClassName("aniinfo");

    var xhr = new XMLHttpRequest();

        xhr.open('POST', '/liked');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let json = JSON.stringify({
            liked: [this.animeLikeID, value_category, value_series, value_rating,]
            
        });
        xhr.send(json);
        
    setVariable('viewLike', false)
    setVariable('animeLikeID', null)
    console.log(this.animeLikeID, value_category, value_series, value_rating)
    
  }
  back(){
    setVariable('viewLike', false)
    let like = document.getElementById(this.animeLikeID)?.querySelector('.like');
    like!.classList.remove('liked');
    (like as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2589/2589197.png';
    (like as HTMLElement).style.filter = 'brightness(9) invert(3)'
    setVariable('animeLikeID', null);
    
  }
}

</script>

<style src="../style/main-content.css"></style>