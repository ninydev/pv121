import {defineStore} from "pinia";
import {toast} from "vue3-toastify";

export  const useAuthStore = defineStore('auth', {

    state: () => ({
        isPreload: false, // сообщает фронту о том, что происходит загрузка данных
        isError: false, // переводит компонент в отображение ошибки
        error: {}, // хранит данные об ошибке
        // --------------------------------------
        isLogin: false, // Вошел ли пользователь в систему
    }),

    actions: {
        doRegister(newUser) {
            console.log(newUser)
            toast.info(newUser.name)
        }
    }
})
