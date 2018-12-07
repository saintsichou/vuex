<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <div>childText: {{msg2}}</div>
        <button type="button" @click="clickHandler">修改父组件文本</button>
        <button type="button" @click="clickHandler2">修改自己文本</button>
    </div>
</template>

<script>
/* eslint-disable */
    import store from '../store'
    import {mapState} from 'vuex';

    export default {
        name: "Child",
        computed:{
            // ...mapState({
            //     msg2:state=>state.childText 
            // })

            msg2 () {
                return this.$store.getters.getMsg2;
            }
        },
        methods: {
            clickHandler(){
                this.$store.dispatch('setMsg','修改父组件')
            },
            clickHandler2(){
                 this.$store.dispatch('setMsg2','修改自己')
            }
        },
        store
    }
     /* eslint-disable */
</script>

<style scoped>
    .child{
        background-color: palegreen;
        border:1px solid black;
        height:200px;
        margin:10px;
    }
</style>

