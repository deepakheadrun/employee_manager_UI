<template>
  <div>
    <modal :height="300" name="skill-modal">
      <div class="p-8">
        <h2 class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Update Skills</h2>
        <div class>
          <div class="flex px-8 pt-4">
            <div class="w-1/2">
              <div class="-mt-px pt-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="new_skill"
                >Add New Skill</label>
                <input
                  aria-label="Add Skill"
                  v-model="new_skill"
                  name="new_skill"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Add Skill"
                />
              </div>
              <div class="mt-6 pb-8">
              <button
                v-on:click="addNewSkill"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                
                Add
              </button>
              </div>
            </div>
            <div class="w-1/2">
            <div class="px-8 pt-4 pb-4">
                  <div class="pt-4 pb-2">
                  <span
                    v-for="item in this.skills"
                    :key="item.id"
                    class="inline-block bg-blue-200 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <button v-on:click="deleteskill(item.id)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-4 h-4 ml-2"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    {{item.name}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6"></div>
      </div>
    </modal>

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

    <div class="bg-white px-4 text-left rounded">
      <span class="text-2xl pt-2">Skills</span>
      <button v-if="isEditable" v-on:click="skillshow" class="h-6 w-6 pt-1 mx-4">
        <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="px-8 pt-4 pb-4">
        <div class="pt-4 pb-2">
          <span
            v-for="item in this.skills"
            :key="item.id"
            class="inline-block bg-blue-200 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="bg-white mt-4 px-4 text-left rounded">
      <span class="text-2xl pt-2">Work Experience</span>
      <button v-if="isEditable" v-on:click="addNewExerience" class="h-6 w-6 pt-1 mx-4">
       <svg viewBox="0 0 20 20" fill="currentColor" class="document-add w-6 h-6"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd"></path></svg>
      </button>
      <div v-for="item in this.experience" :key="item.id" class="px-8 pt-4">
        <div class="flex">
          <div class="flex-auto w-1/2">
            <div class="mt-2 mb-1">
              <span>Previous Company</span>
              <span class="ml-1">:</span>
              <span class="ml-2">{{item.company_name}}</span>
            </div>
            <div class="mt-2 mb-1">
              <span>From</span>
              <span class="ml-1">:</span>
              <span class="ml-2">{{item._from}}</span>
            </div>
          </div>
          <div class="flex-auto w-1/2">
            <div class="mt-2 mb-1">
              <span>Title</span>
              <span class="ml-1">:</span>
              <span class="ml-2">{{item.job_title}}</span>
            </div>
            <div class="mt-2 mb-1">
              <span>To</span>
              <span class="ml-1">:</span>
              <span class="ml-2">{{item._to}}</span>
            </div>
          </div>
          <div>
            <button
              v-if="isEditable"
              v-on:click="udpateExerience(item.id)"
              class="h-6 w-6 pt-1 mx-4"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
                <path
                  d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
             <button v-on:click="deleteExerience(item.id) " class="h-6 w-6 pt-1 mx-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x cursor-pointer hover:text-yellow-400 rounded-full w-6 h-6 bg-red-500"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
          </div>
        </div>
        <div class="mt-2 mb-4 pb-4 w-full">
          <span>Description</span>
          <span class="ml-1">:</span>
          <span class="ml-2">{{item.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Datepicker from "vuejs-datepicker";
import ExperienceService from '../services/api/ExperienceService';
import SikllService from '../services/api/SikllService';
export default {
  name: "Work",
  props: ["skills", "experience", "isEditable"],
  components: {
    Datepicker,
  },
  data() {
    return {
      new_skill: null,
      isUpdate: false,
      toUpdate: null,
      company_name: null,
      from: null,
      to: null,
      description: null,
      job_title: null,
      id: null,
    };
  },
  methods: {
    addNewSkill() {
      var bodyFormData = new FormData();
      bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
      bodyFormData.set("name", this.new_skill);
      
      SikllService.postSkill(bodyFormData)
        .then((response) => {
          this.skills.push(response);
        });
      this.new_skill = null;
    },
    deleteskill(id) {
      SikllService.deleteSkill(id)
        .then(() => {
          this.skills = [...this.skills.filter((x) => x.id != id)];
        });
      this.new_skill = null;
    },
    skillshow() {
      this.$modal.show("skill-modal");
    },
    skillhide() {
      this.$modal.hide("skill-modal");
    },
    exerienceshow() {
      this.$modal.show("experience-modal");
    },
    exeriencehide() {
      this.$modal.hide("experience-modal");
    },
    addNewExerience() {
      this.isUpdate = false;
      this.exerienceshow();
    },
    deleteExerience(id){
      console.log(id)
      ExperienceService.deleteExperience(id).then(()=>{
         let index = this.experience.findIndex((x) => x.id == id);
            this.experience.splice(index, 1);
      })
    },
    udpateExerience(id) {
      this.toUpdate = this.experience.find((x) => x.id == id);
      console.log(this.toUpdate);
      this.isUpdate = true;
      (this.id = id),
        (this.company_name = this.toUpdate.company_name),
        (this.from = this.toUpdate._from),
        (this.to = this.toUpdate._to),
        (this.description = this.toUpdate.description),
        (this.job_title = this.toUpdate.job_title),
        this.exerienceshow();
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
            this.experience.push(response);
          });
        (this.company_name = null),
          (this.from = null),
          (this.to = null),
          (this.description = null),
          (this.job_title = null),
          (this.id = null);

        this.exeriencehide();
      } else {
   
        let id = this.id;
        bodyFormData.set("id", id);
        bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
        bodyFormData.set("company_name", this.company_name);
        bodyFormData.set("job_title", this.job_title);
        bodyFormData.set("_from", this.from);
        bodyFormData.set("_to", this.to);
        bodyFormData.set("description", this.description);
        ExperienceService.updateExperience(bodyFormData,id)
          .then((response) => {
            let index = this.experience.findIndex((x) => x.id == id);
            this.experience.splice(index, 1, response);
           
          });
        (this.company_name = null),
          (this.from = null),
          (this.to = null),
          (this.description = null),
          (this.job_title = null),
          (this.id = null);
        this.exeriencehide();
      }
    },
    fromDateSelected(e) {
      this.from = e.toISOString().slice(0, 10);
    },
    toDateSelected(e) {
      this.to = e.toISOString().slice(0, 10);
    },
  },
};
</script>