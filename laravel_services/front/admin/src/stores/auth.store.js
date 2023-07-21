import {defineStore} from "pinia";
import myLog from "@/helpers/myLog";


export const useAuthStore = defineStore('auth', {
    state:() => ({
        isLogin: false,
        isPreload: false,
        user: {},
        token: null
    }),
    actions: {
        login(data) {
            this.isPreload = true;
            myLog(data)
        }
    }
})
