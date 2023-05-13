import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import myLog from "@/services/myLog";


export const usePrivatBankExchange = defineStore('privatBankExchange', {
    state: () => ({
        whenLoad: null,
        exchange: []
    }),
    actions: {
        getExchange() {
            fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
                .then(res => res.json())
                .then(newExchange => {
                    this.exchnge = newExchange
                    this.whenLoad = new Date().toLocaleString()
                })
                .catch(error => {
                    myLog(error)
                    toast.error(error.message)
                })
        }
    }
})
