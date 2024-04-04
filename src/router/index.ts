// import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import * as VueRouter from 'vue-router';
import Word from '../pages/Word.vue'
import {createRouter, createWebHistory} from "vue-router";

const routes: Array<any> = [
    {
        path: '/:catchAll(.*)',
        redirect: { name: 'word' },
    },
    {
        name: 'word',
        path: '/word',
        component: Word,
    }
]

const options = {end: false, history: createWebHistory("localhost"), routes: routes, sensitive: false, strict: false}


const router = createRouter(options)

export default router
