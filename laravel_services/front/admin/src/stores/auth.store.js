import {defineStore} from "pinia";
import myLog from "@/helpers/myLog";
import myFetch from "@/helpers/myFetch";
import {toast} from "vue3-toastify";
import router from "@/router";

export const useAuthStore = defineStore('auth', {
    state:() => ({
        isLogin: false,
        isAdmin: false, // Показатель того, что пользователь - админ
        isPreload: false,
        user: {},
        token: null
    }),
    actions: {
        login(data) {
            this.isPreload = true;
            myLog(data)

            myFetch('/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data)
            }).then(res => {
                myLog(res)
                toast.success('Success')
                this.isPreload = false;
                this.user = res.user;
                this.token = res.authorization.token;
                this.isLogin = true;
                this.isAdmin = this.user.role_id === 2;
                if(!this.isAdmin) {
                    toast.error(" Ві не админ - вам сюда незя")
                } else {
                    router.push('/'); // Перейти на глваную страницу
                }
            }).catch(err => {
                myLog(err)
                toast.error('Err')
            })
        }
    }
})
