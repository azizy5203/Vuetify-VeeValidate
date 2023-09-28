import { defineStore } from "pinia";

export const useFavStore = defineStore('favStore',{
    state: () => ({ fav:"favs,",router:null }),
    getters:{
        getFavs:(state)=>state.fav
    },
    actions:{
        addFav(){
            this.fav+='FAVS,'
        },
    }
})