<template>
<div class="log_a_d" v-on:click="redirMain">
    <img src="../icon.png" alt="" width="120px">
    <h1 v-on:click="redirMain">AniList</h1>
</div>
<main>
    <div class="sign_d" id="sign-up_d">
        <h3>Sign up to AniList</h3>
        <input type="email" placeholder="Email">
        <input type="text" placeholder="Login">
        <input type="password" placeholder="Password">
        <button class="sign_b">Sign up</button>
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
// mounted(){
// }
}
</script>

<style src="../style/auth.css"></style>
