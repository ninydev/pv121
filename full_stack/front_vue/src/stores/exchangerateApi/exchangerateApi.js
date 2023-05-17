import {defineStore} from "pinia";
import {toast} from "vue3-toastify";
import myLog from "@/services/myLog";
import myLocalStorage from "@/services/myLocalStorage";
import myFetch from "@/services/myFetch";


export  const useExchangeApiStore = defineStore('exchangeApi',{
    state: () => ({
        isPreload: false, // сообщает фронту о том, что происходит загрузка данных
        isError: false, // переводит компонент в отображение ошибки
        error: {}, // хранит данные о ошибке
        whenLoad:  myLocalStorage.getItem('ExchangeApiStoreWhen') || null,
        data: myLocalStorage.getItem('ExchangeApiStoreData') || {}
    }),
    actions: {
        getExchange() {
            let d = this.whenLoad
            // Мы можем анализировать, когда мы получили эти данные
            // И обращаться - когда мы считаем их устаревшими
            if(d === null) {
                this.isPreload = true

                myFetch('/api/exchange')
                    .then(newExchange => {
                        this.data = newExchange
                        myLocalStorage.setItem('ExchangeApiStoreData', newExchange)
                        this.whenLoad = new Date().toLocaleString()
                        myLocalStorage.setItem('ExchangeApiStoreWhen', this.whenLoad)
                        this.isPreload = false
                    })
                    .catch(error=> {
                        this.isError = true
                        this.error = error
                        myLog(error)
                        toast.error(error.message)
                    })

                // fetch('/api/exchange')
                //     .then(res => res.json())
                //     .then(newExchange => {
                //         toast.success('get')
                //         this.data = newExchange
                //         myLocalStorage.setItem('ExchangeApiStoreData', newExchange)
                //         this.whenLoad = new Date().toLocaleString()
                //         myLocalStorage.setItem('ExchangeApiStoreWhen', this.whenLoad)
                //         this.isPreload = false
                //     })
                //     .catch(error => {
                //         this.isError = true
                //         this.error = error
                //         myLog(error)
                //         toast.error(error.message)
                //     })
            }
        }
    }
})
