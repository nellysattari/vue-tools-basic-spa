import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// make sure to call Vue.use(Vuex) if using a module system

export default new Vuex.Store({
    state: {
        answers: [],

    },
    mutations: {
        addAnswers(state,usrAnswers) {
            state.answers.push(usrAnswers);
        }
    },
    getters:{
        answers(state){
            return state.answers;
        }
    }

});
