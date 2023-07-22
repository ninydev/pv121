import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import {io} from "socket.io-client";
import myLog from "@/helpers/myLog";


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
            this.socket = io('/', {
                auth: {
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0L2FwaS9sb2dpbiIsImlhdCI6MTY5MDAxOTM1MiwiZXhwIjoxNjkwMDIyOTUyLCJuYmYiOjE2OTAwMTkzNTIsImp0aSI6InpRTnhiRDVRREdyRElBMkgiLCJzdWIiOiJhZDJiYmQwMC02OGNjLTRjMWYtOGZhYy05MjE5Mjg4Mjg4NGQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.X1Fu1C7Yz0Exah1zKLXss3ObaU249bO_Hu9lJnegykQ'
                }
            })
            this.isConnect = true

            // Реакция на сообщение с сервера
            this.socket.on('socket.myNameIs', (data) => {
                toast.success('Connect to: ' + data)
            })

            this.socket.on('fromServer', (data) => {
                myLog(data)
                toast.success(data)
            })

            //Реакция на любое сообщение
            this.socket.on('message', (data) => {
                myLog('Catch message from server:', data);
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
