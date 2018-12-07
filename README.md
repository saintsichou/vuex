# lsdemo

> vuex 的小示例


## 前言

这个小示例是借助另外一个作者的示例稍加改动而来，目的是为了更好的理解vuex的几个核心属性。

大佬请跳过。文末附有另一个作者的链接地址以及demo的下载地址。 


 
##  项目准备

    npm i vue-cli -g
    vue list
    vue init webpack 项目名
    cd 项目名
    npm i
    npm i vuex --save
    npm run start

## 项目结构
    ├── index.html
    ├── main.js
    ├── router
    │   └── index.js
    ├── components
    │   ├── parent.vue
    │   └── child.vue
    └── store
        ├── index.js          # 我们组装模块并导出 store 的地方
    
##  新建父组件 parent.vue

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
    
##  新建子组件 child.vue
    
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


##  新建store index.js

        
    import Vue from 'vue'
    import Vuex from 'vuex'
    
    Vue.use(Vuex)
    /* eslint-disable */
    const state = {
        testMsg: '原始文本',
        childText:"子组件原始文本"
    }
    const getters = {
        getMsg (state) {
            return state.testMsg
        },
        getMsg2 (state) {
            return state.childText
        }
    }
    const mutations = {
        changeTestMsg(state, str){
            state.testMsg = str;
        },
        changeChildText(state, str){
            state.childText = str;
        }
    }
    const actions = {
        setMsg({commit, state}, str){
            commit('changeTestMsg', str)
        },
        setMsg2({commit, state}, str){
            commit('changeChildText', str)
        }
    }
    const store = new Vuex.Store({
        state: state,
        getters:getters,
        actions:actions,
        mutations: mutations
    })
    /* eslint-disable */
    export default store;
    
## 效果展示
    
    
![](https://user-gold-cdn.xitu.io/2018/12/7/16787677200933d5?w=1027&h=851&f=gif&s=153545)
    
    
## 结尾

希望多一点入门分享示例，世界更美好。

原著地址：[传送门](https://segmentfault.com/a/1190000012881956)
    
