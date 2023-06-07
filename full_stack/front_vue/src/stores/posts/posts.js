import {defineStore} from "pinia";
import MyFetch from "@/services/myFetch";
import MyLog from "@/services/myLog";


export const useBlogStore = defineStore('blogStore', {
    state:() => ({
        isPreload: false, // сообщает фронту о том, что происходит загрузка данных
        isError: false, // переводит компонент в отображение ошибки
        error: {}, // хранит данные об ошибке
        posts: []
    }),
    actions: {
        createNewPost(newPost){
            this.isPreload = true
            MyFetch('/api/post', {
                'Content-Type': 'application/json',
                method: 'POST',
                body: JSON.stringify(newPost)
            })
                .then(res=> {
                    this.isPreload = false
                    posts.push(newPost)
                    MyLog(res)
                })
        }
    }
})
