/*
 * @Author: your name
 * @Date: 2022-03-25 01:38:56
 * @LastEditTime: 2022-03-25 01:40:19
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /XavierCoinVue/vue3/10/src/main.js
 */
import _ from 'lodash-es'
import { createApp } from 'vue'
import { sum } from './js/math'
import mul from './ts/mul'
import App from './vue/App.vue'

import './css/style.css'
import './css/title.less'

console.log('Hello World')
console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(_.join(['abc', 'cba'], '-'))

const titleEl = document.createElement('div')
titleEl.className = 'title'
titleEl.innerHTML = 'Hello Vite'
document.body.appendChild(titleEl)

// vue
createApp(App).mount('#app')
