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
  animeID = getVariable('anime_id')
  data(){
    return{
      Name: 'непризнанный школой владыка демонов'
    }
  }

  beforeMount(){
    this.animeID = getVariable('anime_id')

    SetOnVarChangeListener('anime_id', () =>{
      this.animeID = getVariable('anime_id')
      this.$forceUpdate()
      if(!this.animeID) {return}
      
      this.animeID.forEach((e: string) => {
        let like = document.getElementById(e)?.querySelector('.like');

        (like as HTMLElement).onclick = () => {
          if(!getVariable('isAuth')){alert('You are not logged in'); return}
          if(like!.className.indexOf('liked') == -1){
            (like as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png';
            (like as HTMLElement).style.filter = 'none';
            like!.classList.add('liked');
            setVariable('viewLike', true);
            setVariable('animeLikeID', (e as never));
          }
          else{
            like!.classList.remove('liked');
            (like as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2589/2589197.png';
            (like as HTMLElement).style.filter = 'brightness(9) invert(3)'
            var xhr = new XMLHttpRequest();

            xhr.open('POST', '/deliked');
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            let json = JSON.stringify({
                liked: e
            });
            xhr.send(json);
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