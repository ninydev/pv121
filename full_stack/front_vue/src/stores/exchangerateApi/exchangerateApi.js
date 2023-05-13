import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import myLog from "@/services/myLog";


export  const useExchangeApiStore = defineStore('exchangeApi',{
    state: () => ({
        whenLoad: null,
        data: {}
    }),
    actions: {
        getExchange() {
            fetch('https://v6.exchangerate-api.com/v6/aeb293418c7c8bdbda9896fa/latest/USD')
                .then(res => res.json())
                .then(newExchange => {
                    this.data = newExchange
                    this.whenLoad = new Date().toLocaleString()
                })
                .catch(error => {
                    myLog(error)
                    toast.error(error.message)
                })
        }
    }
})
