import Vue from "vue"
import { createApp } from 'vue'
import App from './App.vue'
import Auth from './page/Auth.vue'

import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
      { path: './App.vue', redirect: './page/Auth.vue' }
    ]
    })

createApp(App).mount('#app')
createApp(Auth).mount('#auth')