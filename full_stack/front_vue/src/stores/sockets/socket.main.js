import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import {io} from "socket.io-client";
import MyLog from "@/services/myLog";


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
            if (this.isConnect) return
            this.socket = io('/')
            // Реакция на сообщение с сервера
            this.socket.on('my-name-is', (data) => {
                toast.success('Connect to: ' + data)
            })
            this.isConnect = true

            // Реакция на отключение связи
            this.socket.on('disconnect', (data) => {
                toast.error(data)
                this.isConnect = false
            })
        }
    }
})
