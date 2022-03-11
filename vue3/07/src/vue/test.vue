<!--
 * @Author: your name
 * @Date: 2022-02-25 16:10:28
 * @LastEditTime: 2022-02-25 16:42:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3/07/src/vue/test.vue
-->

<template>
    <h2>测试设定了罚款就</h2>
    <hello></hello>
</template>

<script>

    import Hello from './hello.vue'

    export default {
        data() {
            return {
                title: 'csdl ',
                message: '好酸的'
            }
        },
        methods: {

        },

        components: {
            Hello
        }
    }
</script>


<style>
    .red {
        color: red;
    }
</style>
