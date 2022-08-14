<template>
<main>
    <div class="log_a_d" v-on:click="redirMain">
        <img src="../icon.png" alt="" width="120px">
        <h1 v-on:click="redirMain">AniList</h1>
    </div>
    <div class="sign_d" id="sign-up_d">
        <h3>Sign up to AniList</h3>
        <input type="email" placeholder="Email" id="email">
        <input type="text" placeholder="Login" id="username">
        <input type="password" placeholder="Password" id="password">
        <button class="sign_b" v-on:click="signin_">Sign up</button>
        <a :href="signin" class="no_ak">Log in</a>
        <strong id="info"></strong>
    </div>
</main>
</template>

<script>
import { Options, Vue } from "vue-class-component";

console.log('fffff')

@Options({
components: {
},
})
export default class Reg extends Vue {
    data(){
        return{
            signin:`http://${window.location.host}/auth?m=signin`
        }
    }
    redirMain(){
        window.location.replace(`http://${window.location.host}/`);
    }
    signin_(){
        let xhr = new XMLHttpRequest();
        const email_ = document.getElementById('email');
        const username_ = document.getElementById('username');
        const password_ = document.getElementById('password');
        const info_ = document.getElementById('info');
        if(email_.value == ""){ info_.textContent = "введите адрес электроной почты!";  return; }
        if(username_.value == ""){ info_.textContent = "Введите логин!";  return; }
        if(password_.value == "") { info_.textContent = "Введите пороль!"; return; }
        if(username_.value.length < 3) { info_.textContent = "Минимальная длина логина 3 символа!"; return; }
        if(password_.value.length < 6) { info_.textContent = "Минимальная длина пороля 6 символов!"; return; }
        if(username_.value.includes(" ")) { info_.textContent = "Нельзя оставлять отспуты!"; return; }

        let json = JSON.stringify({
            user: username_.value,
            password: password_.value
        });

        xhr.open("POST", '/reg')
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.send(json);
    }
}
</script>

<style src="../style/auth.css"></style>
