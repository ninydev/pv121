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
            this.socket = io('/')
            this.isConnect = true

            // Реакция на сообщение с сервера
            this.socket.on('socket.myNameIs', (data) => {
                toast.success('Connect to: ' + data)
            })

            //Реакция на любое сообщение
            this.socket.on('message', (data) => {
                myLog('Catch message from server:', data);
                toast.success( data)
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

        /**
         * Добавить обработчик события
         * @param eventName
         * @param callBack
         */
        on(eventName, callBack){
            this.socket.on(eventName, callBack);

        },

        /**
         * Убрать обработчик события
         * @param eventName
         * @param callBack
         */
        off(eventName, callBack){
            this.socket.off(eventName, callBack)
        },

        /**
         * подключиться к комнате
         * @param roomName
         */
        join(roomName) {
            this.socket.emit('joinRoom', roomName)
        },

        /**
         * Покинуть комнату
         * @param roomName
         */
        leave(roomName) {
            this.socket.emit('leaveRoom', roomName)
        }
    }
})
