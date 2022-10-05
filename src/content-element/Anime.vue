<template>
  <div class="content-element">
    <img class="ani_preview" src="https://proprikol.ru/wp-content/uploads/2020/05/kartinki-glaza-anime-7.jpg" alt="">
    <p class="name_ani">{{Name}}</p>
    <img src="https://cdn-icons-png.flaticon.com/512/2589/2589197.png" class="like">
  </div>
</template>

<script lang="ts">
import { getVariable, SetOnVarChangeListener, setVariable } from "@/storage";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Anime extends Vue {
  isLike = false;
  animeID = getVariable('anime_id')
  likeAni = []
  data(){
    return{
      Name: 'непризнанный школой владыка демонов'
    }
  }

  beforeMount(){
    this.animeID = getVariable('anime_id')
    SetOnVarChangeListener('anime_id', () =>{
      this.animeID = getVariable('anime_id')
      if(!this.animeID) {
        
        console.log('animeID is null')
        return
      }
      else console.log('isnt null')
      this.animeID.forEach((e: string) => {
        let like = document.getElementById(e)?.querySelector('.like');
        (like as HTMLElement).onclick = () => {
          console.log('aaa')
          if(this.isLike == false){
          this.isLike = true;
          (like as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png';
          (like as HTMLElement).style.filter = 'none'
          this.likeAni.push((e as never));
          setVariable('viewLike', true)
          setVariable('likeAni', this.likeAni)
          console.log('ggggg')
          }
          else{
            this.isLike = false;
            (like as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2589/2589197.png';
            (like as HTMLElement).style.filter = 'brightness(9) invert(3)'
          }
        }
      })
    })
    

  }
}
</script>

<style>
.ani_preview{
  width: 200px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: inset 2px #f5deb3;
  background-position: center center;
  background-repeat: no-repeat;

}
.name_ani{
  margin-top: 5px;
  height: auto;
  width: auto;
  padding-left: 6px;
  padding-right: 6px;
}
.like{
  z-index: 1;
  width: 30px;
  position: absolute;
  bottom: 5px;
  left: 5px;
  filter: brightness(9) invert(3)
}
</style>