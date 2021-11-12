import { createStore } from 'vuex'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import uniqid from 'uniqid';
import firebaseConfig from '../firebase/firebaseConfig';
import { getDatabase, ref, set } from "firebase/database";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// const e = ()=>{
//   set(ref(database, `users/${uniqid()}`), {
//     username: "name",
//     email: "emal",
//     profile_picture : "imaeUrl"
//   });
// }
// e()
export default createStore({
  state: {
    isDay:true,
    nameUser:''
  },
  mutations: {
    setIsDay(state,payload){
      state.isDay = payload
    },
    setNameUser(state,name){
      state.nameUser = name
    }
  },
  actions: {
    onChangeIsDay({commit},payload){
      commit('setIsDay',payload)
    },
    onSaveNewInvited({commit},{name,alone,message}){
      console.log(commit)
        set(ref(database, `users/${uniqid()}`), {
          username: name,
          acompanado: alone,
          message:message,
          date : new Date().getTime()
        });
  },
  onChangeNameUser({commit},name){
    commit('setNameUser',name)
  }
  },
  getters:{
    getIsDay: (state)=>state.isDay,
    getNameUser: (state)=>state.nameUser
  },
  modules: {
  }
})
