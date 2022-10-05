<template>
    <button class="sign_in" id="add" v-if="root" @click="isVisible">Add-Anime</button>
    <strong>{{username}}</strong>
    <button class="sign_in" id="sign-up"  @click="signOut">Sign out</button>
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
import { SetOnVarChangeListener, getVariable, setVariable} from "./storage";

@Options({
    components: {
        
    },
})

export default class Accaunt extends Vue {
    root = true
    username = getVariable('username')
    isVisible(){
        setVariable('visible', !getVariable('visible'))
        var content = document.getElementById('add')
        if(getVariable('visible')){ content!.textContent = "Close"; }
        if(!getVariable('visible')){ content!.textContent = "Add-Anime"; }
    }
    beforeMount(){
        SetOnVarChangeListener('username', this._onVarChange)
    }
    _onVarChange = ()=>{
        this.username = getVariable('username')
    }
    redirSign_in(){
        window.location.href = `http://${window.location.host}/auth?m=signin`;
    }
    redirSign_up(){
        window.location.href = `http://${window.location.host}/auth?m=signup`
    }
    signOut(){
        var xhr = new XMLHttpRequest();

        xhr.open('POST', '/signout');
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onloadend = ()=>{
            window.location.href = `http://${window.location.host}/`;
        }
        xhr.send();
    }
}
</script>