<template>
  <div>
  <router-link to="./page/Auth.vue">страница с порнухой</router-link>
    hello
    <button>
    <router>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Auth from "./page/Auth.vue";

@Options({
  components: {
    Auth
  },
})

export default class App extends Vue {}
</script>

<style>

</style>
