import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import {io} from "socket.io-client";
import myLog from "@/helpers/myLog";
import {useAuthStore} from "@/stores/auth.store";


export const useSocketMainStore = defineStore('socket.main', {
    state: () => ({
        isConnect: false, // Флаг, который говорит, есть ли соединение
        socket: null // Сам объект для соединения
    }),
    actions: {
        /**
         * Процесс установки соединения
         */
        connect() {
            // Мне необходимо проверить - а есть ли авторизация
            const authStore = useAuthStore()
            const token = authStore.token;
            if (token === null) {
                toast.error("У вас нет прав для установления соединения")
                return;
            }

            if (this.isConnect) return
            this.socket = io('/', {
                auth: {
                    token: token
                }
            })
            this.isConnect = true

            // Реакция на сообщение с именем сервера
            this.socket.on('socket.myNameIs', (data) => {
                toast.success('Connect to: ' + data)
            })

            //Реакция на любое сообщение
            this.socket.on('message', (data) => {
                myLog('Catch message from server:', data);
                toast.success(data)
            });


            // Пинг с сервера
            this.socket.on('ping', (data) => {
                toast.info('Ping from server: \n' + new Date(data).toLocaleString(), {
                    theme: 'colored',
                    position: toast.POSITION.BOTTOM_RIGHT,
                    transition: "zoom",
                    autoClose: 500
                });
            });

            // Реакция на отключение связи
            this.socket.on('disconnect', (data) => {
                toast.error(data)
                this.isConnect = false
            })

        },
        on(eventName, callBack){
            this.socket.on(eventName, callBack);

        },
        off(eventName, callBack){
            this.socket.off(eventName, callBack)
        }
    }
})
