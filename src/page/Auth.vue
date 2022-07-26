<template>
  <div class="login">
    <div class="login-button-wrapper"><button id="signin">Sign in</button></div>
    
    <div class="login-button-wrapper"><button id="signup">Sign up</button></div>
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

<style src="../style/auth.css"></style>
