<template>
  <div class="filter">
    <div class="filter-element"><span> жанр</span></div>
    <div class="filter-element"><span>Кол-во сезонов</span></div>
    <div class="filter-element"><span> год</span></div>
    <div class="filter-element"><span> типТип</span></div>
    <div class="filter-element"><span> Страну</span></div><br>
    <div class="button-wrapper-search"><button>Найти</button></div>
  </div>  
  
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Nav extends Vue {}
</script>

<style src="../style/nav.css">

</style>