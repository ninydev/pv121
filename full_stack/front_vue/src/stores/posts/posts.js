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

        /**
         * Процесс получения постов
         */
        getAllPost(){
            this.isPreload = true
            MyFetch('/api/posts', {
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'GET',
            }).then(res => {
                MyLog(res)
                this.posts = res
            })
        },

        /**
         * Процесс отправки поста
         * @param newPost
         */
        createNewPost(newPost){
            this.isPreload = true
            MyFetch('/api/posts', {
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: 'POST',
                body: JSON.stringify(newPost)
            })
                .then(res=> {
                    this.isPreload = false
                    this.posts.push(res)
                    MyLog(res)
                })
        }
    }
})
