<template>
    <div class="auth_d">
      <button class="sign_up" id="sign-up" v-on:click="redirSign_up">Sign up</button>
      <button class="sign_in" id="sign-up" v-on:click="redirSign_in">Sign in</button>
    </div>
    <div class="accaunt">
        <strong>{{username}}</strong>
        <button class="sign_in" id="sign-up" >Sign out</button>
    </div>
</template>

<style>
.accaunt{
    float: right;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    display: none;
}
.sign_in, .sign_up{
  text-align: center;
  border: 2px solid;
  border-color: rgb(245 222 179);
  border-radius: 4px;
  background-color: rgb(32, 32, 32);
  height: 35px;
  margin-right: 10px;
  padding: 5px;
}
.sign_in:hover, .sign_up:hover, .sign_b:hover{
  border-color: rgb(63, 56, 45);
  cursor: pointer;
}
.sign_in:active, .sign_up:active, .sign_b:active{
  border-color: rgb(245 222 179);
}
</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
    
    },
})

export default class App extends Vue {
    data(){
        return{
            username: 'Axmed'
        }
    }
  
    redirSign_in(){
        window.location.href = `http://${window.location.host}/auth?m=signin`;
    }
    redirSign_up(){
        window.location.href = `http://${window.location.host}/auth?m=signup`
    }
}
</script>