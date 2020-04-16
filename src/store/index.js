import Vue from 'vue';
import Vuex from 'vuex';
import {SUB} from '@/store/mutations-type.js';

//1.安装插件
Vue.use(Vuex); 

//2.创建对象
const store = new Vuex.Store({

    state:{
        counter:100,
        person:[
            {name:"马云",money:100},
            {name:"马化腾",money:90},
            {name:"刘强东",money:80},
            {name:"王兴",money:50}
        ]
    },
    //修改state的值
    mutations:{
        //避免使用字符串方法名
        [SUB](){
            this.state.counter--;
        }
    },
    actions:{

    },
    //根据不同需求来获取state里面的值
    getters:{
       filterByMoney(state){
            // return function (money) {
            //     return  state.person.filter(p => p.money > money);
            // }
            return money => { return state.person.filter(p => p.money > money) }
       },
    },
    modules:{}

    // state:{
        
    // },
    // getters:{

    // },
    // actions:{

    // },
    // mutations:{

    // },
    // modules:{

    // },
    // plugins:{

    // },
    // strict:{

    // }


});

export default store;





