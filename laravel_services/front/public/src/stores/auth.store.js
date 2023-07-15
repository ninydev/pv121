import {defineStore} from "pinia";
import myFetch from "@/helpers/myFetch";
import {useSocketMainStore} from "@/stores/sockets/socket.main";
import myLog from "@/helpers/myLog";
import {toast} from "vue3-toastify";
import MyLog from "@/helpers/myLog";


export const useAuthStore = defineStore('auth.store', {
    state: () => ({
        isPreload: false, user: null, token: null
    }), actions: {
        register(data) {
            this.isPreload = true;
            myFetch('/api/register', {
                method: 'POST', body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(res => {
                this.isPreload = false
                if (res.success) {
                    this.user = res.user;
                    // this.token = res.authorization.token
                } else {
                    toast.error("Error")
                    if (res.errors) {
                        MyLog(res.errors)
                    }
                }

            })
                .catch(err => {
                    this.isPreload = false
                    toast.error("Error")
                    MyLog(err)
                })

        }
    }
})
