import {defineStore} from "pinia";
import {toast} from "vue3-toastify";

export const useSocketChatStore = defineStore('socket.chat', {
    state: () => ({
        messages: [],
        socket: null
    }),
    actions: {
        messageHandler (msg) {
            this.message.push(msg);
            toast.info(msg);
        },
        connect(){
            const socketMainStore = useSocketChatStore()
            this.socket = socketMainStore.socket

            this.socket.on('user-message',this.messageHandler)
        },
        sendMessage(msg) {
            this.socket.emit('user-message', msg)
        },
        disconnect(){
            this.socket.off('user-message', this.messageHandler)
            toast.info("Chat disconnect")
        }
    }
})
