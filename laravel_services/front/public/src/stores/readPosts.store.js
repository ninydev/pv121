import {defineStore} from "pinia";
import myFetch from "@/helpers/myFetch";
import myLog from "@/helpers/myLog";
import {toast} from "vue3-toastify";

export const useReadPostsStore = defineStore('readPost', {
    state: () => ({
        isPreload: false, posts: []
    }), actions: {
        loadPosts(page = 0, perPage = 10) {
            this.isPreload = true
            myFetch('/api/posts/read?page=' + page + '&perPage=' + perPage)
                .then(res => {
                    this.posts = res.data
                    this.isPreload = false
                    // console.log(res)
                })
                .catch(err=> {
                    myLog(err)
                    toast.error(err)
                })
        }
    }
})
