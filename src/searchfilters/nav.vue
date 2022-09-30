<template>
  <div class="filter">
    <span class="filter-txt">Фильтр</span>
    <div class="filter-element"><span>жанр</span></div>
    <div class="filter-element"><span>Кол-во сезонов</span></div>
    <div class="filter-element"><span>год</span></div>
    <div class="filter-element"><span>Тип</span></div>
    <div class="filter-element"><span>Страну</span></div><br>
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Kanit:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet">