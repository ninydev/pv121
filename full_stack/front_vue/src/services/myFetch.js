import myLog from "@/services/myLog";
import {toast} from "vue3-toastify";
import MyLog from "@/services/myLog";

export default function (url, options = {}) {


    return new Promise( (resolve, reject) => {

        fetch(url, options)
            .then( res => {
                // Если я получил статус 200 (все ок)
                if(res.status === 200 || res.status === 201) {
                    try {
                        return res.json()
                    } catch (e) {
                        reject ({message: 'Error Json in Fetch'})
                    }
                }

                // И тут я могу реагировать на нее
                if(res.status === 404) {
                    toast.error("404")
                    reject({message: '404 - Not Found in BackEnd'})
                }
            })
            .then(data => {
                toast.success(" fetch Ok")
                MyLog(data)
                resolve(data)
            })
            .catch(error => {
                myLog(error)
                toast.error(error.message)
                reject(error)
            })

    })
}
