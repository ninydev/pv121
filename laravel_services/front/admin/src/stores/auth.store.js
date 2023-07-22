import {defineStore} from "pinia";
import myLog from "@/helpers/myLog";
import myFetch from "@/helpers/myFetch";
import {toast} from "vue3-toastify";
import router from "@/router";
import myLocalStorage from "@/helpers/myLocalStorage";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

export const useAuthStore = defineStore('auth', {
    state:() => ({
        isLogin: myLocalStorage.getItem('auth.isLogin') || false,
        isAdmin: myLocalStorage.getItem('auth.isAdmin') || false, // Показатель того, что пользователь - админ
        isPreload: false,
        user: myLocalStorage.getItem('auth.user') || {},
        token: myLocalStorage.getItem('auth.token') || null
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
                    toast.error(" Вы не админ - вам сюда незя")
                    return
                }

                router.push('/'); // Перейти на глваную страницу

                myLocalStorage.setItem('auth.isLogin', this.isLogin)
                myLocalStorage.setItem('auth.isAdmin', this.isAdmin)
                myLocalStorage.setItem('auth.user', this.user)
                myLocalStorage.setItem('auth.token', this.token)

                useSocketMainStore().connect();



            }).catch(err => {
                myLog(err)
                toast.error('Err')
            })
        }
    }
})
