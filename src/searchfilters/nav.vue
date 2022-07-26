<template>
  <div class="filter">
    <div class="filter-genre"><span>Выберите жанр</span></div>
    <div class="filter-season"><span>Кол-во сезонов</span></div>
    <div class="filter-year"><span>Выберите год</span></div>
    <div class="filter-type"><span>Выберите типТип</span></div>
    <div class="filter-country"><span>Выберите Страну</span></div>

    <button>Найти</button>

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