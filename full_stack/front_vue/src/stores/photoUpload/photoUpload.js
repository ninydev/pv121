import {defineStore} from "pinia";
import MyLog from "@/services/myLog";
import MyFetch from "@/services/myFetch";

export const usePhotoUploadStore = defineStore('photoUpload', {
    state:() => ({
        isPreload: false, // сообщает фронту о том, что происходит загрузка данных
        isError: false, // переводит компонент в отображение ошибки
        error: {}, // хранит данные об ошибке
        file: null
    }),
    actions: {
        changeFile(event) {
            this.file = event.target.files[0];
            MyLog(this.file)
        },
        doSendFile() {
            let frmData = new FormData()
            MyLog(frmData)
            frmData.append('fileBody', this.file)
            MyFetch('/api/uploadFile', {
                method: 'POST',
                body: frmData
            })
        }
    }
})
