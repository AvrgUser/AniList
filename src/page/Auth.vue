<template>
  <div class="inline">
    <button id="signin">Sign in</button>
    <button id="signin">Sign up</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Auth extends Vue {}
</script>

<style>
  .inline button{
    background-color: rgb(43, 43, 43);
    border-width: 4px;
    border-radius: 9px;
    border-color: rgb(255, 243, 212);
    width: 80px;
    height: 40px;
    position: relative;
    transform: translate(0, 10%);
    margin-left: 10px;
    border-style: solid;
  } 
  .inline button:hover{
    background-color: rgb(40, 40, 40);
    border-color: rgb(105, 95, 69);
  }
</style>
