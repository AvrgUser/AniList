<template>
    <button class="sign_in" id="root" v-if="root">Add-Anime</button>
    <strong>{{username}}</strong>
    <button class="sign_in" id="sign-up" >Sign out</button>
</template>

<style>
strong{
    margin-right: 10px;
    font-size: 19px;
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
import { SetOnNameChangeListener, username_ } from "./var";

@Options({
    components: {
        
    },
})

export default class App extends Vue {
    root = false
    username = ''
    beforeMount(){
        SetOnNameChangeListener(this._onNameChange);
    }
    _onNameChange = ()=>{
        this.username = username_
    }
    redirSign_in(){
        window.location.href = `http://${window.location.host}/auth?m=signin`;
    }
    redirSign_up(){
        window.location.href = `http://${window.location.host}/auth?m=signup`
    }
    signOut(){
        var xhr = new XMLHttpRequest();

        let json = JSON.stringify({
            
        });

        xhr.open('POST', '/sigout');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(json);

    }
}
</script>