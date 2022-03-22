/*
 * @Author: your name
 * @Date: 2022-02-25 15:24:29
 * @LastEditTime: 2022-03-11 15:02:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3/07/src/main.js
 */
import { sum } from "./js/math";
const { priceFormat } = require("./js/format");

import { createApp } from 'vue/dist/vue.esm-bundler';

import "./js/element";

import App from "./vue/test.vue"

console.log(sum(20, 30));
console.log(priceFormat());

const message = "Hello World";
const names = ["abc", "cba", "nba"];

names.forEach(item => console.log(item));
console.log(message);


// const app = createApp({
//     template: `<h2>蓝色大海范围里</h2>`,
//     data() {
//         return {
//             title: "hello"
//         }
//     },
//     components: {
//         Sce
//     }
// })

const app = createApp(App)

app.mount('#app');
