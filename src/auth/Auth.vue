<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
  <main>
      <div class="log_a_d" v-on:click="redirMain">
        <img src="../icon.png" alt="" width="120px">
        <h1 v-on:click="redirMain">AniList</h1>
      </div>
      <div class="sign_d" id="sign-in_d">
        <h3>Sign in to AniList</h3>
        <input type="text" placeholder="Login">
        <input type="password" placeholder="Password">
        <button class="sign_b">Sign in</button>
        <a :href="signup" class="no_ak">no account?</a>
      </div>
  </main>
</template>

<script>
import { Options, Vue } from "vue-class-component";



@Options({
  components: {
  },
})
export default class Auth extends Vue {
  data(){
    return{
      signup:`http://${window.location.host}/auth?m=signup`
    }
  }
  redirMain(){
    window.location.replace(`http://${window.location.host}/`);
  }
}
</script>

<style src="../style/auth.css"></style>
