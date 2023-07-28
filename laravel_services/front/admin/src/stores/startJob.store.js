import {defineStore} from "pinia";
import myFetch from "@/helpers/myFetch";
import {toast} from "vue3-toastify";

export const useJobStore = defineStore('jobs', {
   state:() => ({
       jobId: null
   }),
   actions: {
       startJob() {
           myFetch('/api/job')
               .then(res=> {
                   this.jobId = res;
                   toast.success(this.jobId);
               })
               .catch(err => {
                   toast.error(err)
               })
       }
   }
});
