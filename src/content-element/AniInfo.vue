<template>
  <div class="anime_info">
      <input type="text" placeholder="111111111111111111111111111111">
      <button @click="next()">121111111111111113</button>
  </div>
</template>
<style>

</style>
<script lang="ts">
import { setVariable } from "@/storage";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})

export default class Anime extends Vue {

  next(){
    setVariable('view', false)
  }
  mounted(){
    console.log('SOSIHUI')
  }
}

</script>

<style src="../style/main-content.css"></style>