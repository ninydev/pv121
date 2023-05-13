import {defineStore} from "pinia";
import myLog from "@/services/myLog";
import {toast} from "vue3-toastify";


/**
 * Определим хранилище для информации, которую я собираюсь получать с backEnd
 * или любых restApi
 * В данном случае - хранилище будет для работы с информацией с новой почты
 * @type {StoreDefinition<"novaPohta", {}, {}, {}>}
 */
export  const useNovaPoshta = defineStore('novaPohta', {
    state: () => ({
        areas: [] // название для информации - тут будут области, полученные с новой почты
    }),
    actions: {
        /**
         * Получить список всех областей
         */
        getAreas(){
            fetch('https://api.novaposhta.ua/v2.0/json/Address/getAreas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
//            "apiKey": "[ВАШ КЛЮЧ]",
                    "modelName": "Address",
                    "calledMethod": "getAreas",
                    "methodProperties": {   }
                }),
            })
                .then(response => response.json())
                .then(response_body => {
                    // Обработка полученных данных
                    // Вот тут backEnd и frontEnd должен договориться
                    myLog(response_body.data);
                    this.areas = response_body.data;
                })
                .catch(error => {
                    myLog(error)
                    toast.error(error)
                });
        }
    }
})
