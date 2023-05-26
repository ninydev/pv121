import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import MyFetch from "@/services/myFetch";
import MyLog from "@/services/myLog";
import myLocalStorage from "@/services/myLocalStorage";
import {useRouter} from "vue-router";
const router = useRouter();


export  const useAuthStore = defineStore('auth', {

    state: () => ({
        isPreload: false, // сообщает фронту о том, что происходит загрузка данных
        isError: false, // переводит компонент в отображение ошибки
        error: {}, // хранит данные об ошибке
        // --------------------------------------
        isLogin: myLocalStorage.getItem('isLogin') || null, // Вошел ли пользователь в систему
        user: myLocalStorage.getItem('user') || null,
        token: myLocalStorage.getItem('token') || null
    }),

    actions: {
        doRegister(newUser) {
            this.isPreload = true
            MyFetch('/api/auth/register/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(newUser)
            })
                .then(res=> {
                    this.isPreload = false
                    this.user = res.user
                    this.token = res.token
                    this.isLogin = true
                    myLocalStorage.setItem('user', res.user)
                    myLocalStorage.setItem('token', res.token)
                    myLocalStorage.setItem('isLogin', true)
                    router.push('/')
                    // MyLog(res)
                })
                .catch(err => {
                    MyLog(err)
                    this.isPreload = false
                    this.isError = true
                    this.error = err
                    toast.error(err.message)
                })
        }
    }
})
