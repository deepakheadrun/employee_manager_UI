<template>
    <modal :height="500" :width="700" name="experience-modal">
      <div class="m-4">
        <h2 v-if="isUpdate" class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Update Experience</h2>
        <h2 v-if="!isUpdate" class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Add Experience</h2>
        <div class>
          <div class="flex px-8 pt-4">
            <div class="w-1/2">
              <div class="-mt-px pt-2">
                 <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="job_title"
                >Title</label>
                <input
                  aria-label="Title"
                  v-model="job_title"
                  name="job_title"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Title"
                />
              </div>
              <div class="-mt-px pt-2">
                 <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="from"
                >From</label>
                <datepicker
                name='from'
                placeholder="From"
                  v-bind:class="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'"
                  @selected="fromDateSelected"
                  :value="from"
                  :format="'yyyy-MM-dd'"
                ></datepicker>
              </div>
            
              

             
            </div>
            <div class="w-1/2">
            <div class="-mt-px pt-2">
                   <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="companyName"
                >Company Name</label>
                <input
                  aria-label="Company Name"
                  v-model="company_name"
                  name="companyName"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Company Name"
                />
              </div>
                <div class="-mt-px pt-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="to"
                >To</label>
                <datepicker
                name="to"
                placeholder="To"
                  v-bind:class="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'"
                  @selected="toDateSelected"
                  :value="to"
                  :format="'yyyy-MM-dd'"
                ></datepicker>
              </div>
              </div>
              
          </div>
          <div class="flex px-8 pt-8">
           <div class="-mt-px pt-2 w-full">
                 <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="description"
                >Description</label>
                <textarea
                  aria-label="Description"
                  v-model="description"
                  name="description"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Description"
                />
              </div>
          </div>
        </div>
        <div class="mt-6">
          <button
            v-on:click="addorUpdate"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          ><span v-if="isUpdate" >Update</span>
          <span v-if="!isUpdate" >Add</span></button>
        </div>
      </div>
    </modal>

</template>
<script>
import Datepicker from "vuejs-datepicker";
import ExperienceService from "../../services/api/ExperienceService"
export default {
    name:'ExperienceModal',
    props:['isUpdate','toUpdate'],
      components: {

    Datepicker,
  },
  data() {
    return {
      company_name:null,
      from: null,
      to: null,
      description: null,
      job_title: null,
      id: null,
    };
  },
  watch:{
      toUpdate(){
          if(this.toUpdate){
                this.company_name= this.toUpdate.company_name,
                this.from= this.toUpdate._from,
                this.to= this.toUpdate._to,
                this.description= this.toUpdate.description,
                this.job_title= this.toUpdate.job_title,
                this.id= this.toUpdate.id
          }
          else{
               this.company_name= null,
                this.from= null,
                this.to= null,
                this.description= null,
                this.job_title= null,
                this.id= null
          }
      }
  },
  methods: {
    fromDateSelected(e) {
      this.from = e.toISOString().slice(0, 10);
    },
    toDateSelected(e) {
      this.to = e.toISOString().slice(0, 10);
    },
    addorUpdate() {
      var bodyFormData = new FormData();
      if (!this.isUpdate) {
        bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
        bodyFormData.set("company_name", this.company_name);
        bodyFormData.set("job_title", this.job_title);
        bodyFormData.set("_from", this.from);
        bodyFormData.set("_to", this.to);
        bodyFormData.set("description", this.description);
        ExperienceService.postExperience(bodyFormData)
          .then((response) => {
         
             this.$emit("addorUpdate", response);
          });
       
      } else {
   
        bodyFormData.set("id", this.id);
        bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
        bodyFormData.set("company_name", this.company_name);
        bodyFormData.set("job_title", this.job_title);
        bodyFormData.set("_from", this.from);
        bodyFormData.set("_to", this.to);
        bodyFormData.set("description", this.description);
        ExperienceService.updateExperience(bodyFormData,this.id)
          .then((response) => {
                  this.$emit("addorUpdate", response);
           
          });
      
      }
       (this.company_name = null),
          (this.from = null),
          (this.to = null),
          (this.description = null),
          (this.job_title = null),
          (this.id = null);

        this.exeriencehide();
    },
    exeriencehide() {
      this.$modal.hide("experience-modal");
    },
    },

}
</script>