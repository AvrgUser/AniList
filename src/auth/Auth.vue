<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
  <main>
      <div class="log_a_d" v-on:click="redirMain">
        <img src="../icon.png" alt="" width="120px">
        <h1 v-on:click="redirMain">AniList</h1>
      </div>
      <div class="sign_d" id="sign-in_d">
        <h3>Sign in to AniList</h3>
        <input type="text" placeholder="Login" id="username">
        <input type="password" placeholder="Password" id="password">
        <button class="sign_b" v-on:click="login">Sign in</button>
        <a :href="signup" class="no_ak">no account?</a>
        <strong class="info" id="info"></strong>
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
  login(){
    let xhr = new XMLHttpRequest();
    const username_ = document.getElementById('username');
    const password_ = document.getElementById('password');
    const info_ = document.getElementById('info');

    if(username_.value == ""){ info_.textContent = "Введите логин!";  return; }
    if(password_.value == "") { info_.textContent = "Введите пороль!"; return; }

    let json = JSON.stringify({
      name: username_.value,
      password: password_.value
    });

  xhr.open("POST", '/authuser')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  console.log(json)
  xhr.send(json);
}
}
</script>

<style src="../style/auth.css"></style>
