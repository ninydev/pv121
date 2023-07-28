import {defineStore} from "pinia";
import myFetch from "@/helpers/myFetch";
import {toast} from "vue3-toastify";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

export const useJobStore = defineStore('jobs', {
   state:() => ({
       jobId: null,
       sockets: null
   }),
   actions: {
       startJob() {
           myFetch('/api/job')
               .then(res=> {
                   this.jobId = res;
                   toast.success(this.jobId);
                   // Ждем сообщений от фоновой задачи
                   useSocketMainStore().on('job.say' ,
                       this.waitMessageFromJobs)
               })
               .catch(err => {
                   toast.error(err)
               })
       },
       waitMessageFromJobs(data) {
           toast.info("Job Say: " + data);
           // В данном случае - прекращаем ждать фоновые сообщения
           useSocketMainStore().off('job.say' ,
               this.waitMessageFromJobs)
       }
   }
});
