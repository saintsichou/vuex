<template>
    <div class="parent">
        <h3>这里是父组件</h3>
        <button type="button" @click="clickHandler">修改自己文本</button>
        <button type="button" @click="clickHandler2">修改子组件文本</button>
        <div>Test: {{msg2}}</div>
        <child></child>
    </div>
</template>

<script>
/* eslint-disable */
    import store from '../store'
    import Child from './child.vue'
    import {mapState} from 'vuex';
    export default {
   
        computed: {
            ...mapState({
                msg2:state=>state.testMsg 
            })
            //也可以用这个获取msg2
            // msg2 () {
            //     return this.$store.getters.getMsg;
            // }
        },
        methods:{
            clickHandler(){
                this.$store.dispatch('setMsg','李二狗自己')
            },
            clickHandler2(){
                 this.$store.dispatch('setMsg2','李二狗儿子')
            }
        },
        components:{
            'child': Child
        },
        store,
    }
    /* eslint-disable */
</script>
<style scoped>
    .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>
