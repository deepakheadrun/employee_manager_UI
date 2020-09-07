<template>
  <div>
     <BasicInfoModal v-on:updateBasicInfo="updateBasicInfo($event)"
     v-bind:info="{first_name:this.f_name,last_name:this.l_name,email:this.email}"/>
    
    <WorkModal v-on:updateWork="updateWork($event)" 
    v-bind:userdata="this.userdata"/>
    <div class="bg-white px-4 text-left rounded">
      <span class="text-2xl pt-2">Basic Info</span>
     
      
      <CareerGoalModal v-on:updateCareerGoal="updateCareerGoal($event)"
        v-bind:userdata="this.userdata" />
      <modal :height="300" name="interestedArea-modal">
        <div class="p-8">
          <h2
            class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >Update Interested Area</h2>
          <div class>
            <div class="flex px-8 pt-4">
              <div class="w-1/2">
                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="interested_area"
                  >Add New Interested Area</label>
                  <input
                    aria-label="Add Interested Area"
                    v-model="new_interested_area"
                    name="interested_area"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Add Interested Area"
                  />
                </div>
                <div class="mt-6 pb-8">
                  <button
                    v-on:click="addNewInterestedArea"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >Add</button>
                </div>
              </div>
              <div class="w-1/2">
                <div class="px-8 pt-4 pb-4">
                  <div class="pt-4 pb-2">
                    <span
                      v-for="item in this.interested_area"
                      :key="item.id"
                      class="inline-block bg-blue-200 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
                    >
                      <button v-on:click="deleteInterestedArea(item.id)">
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

      <button v-if="isEditable" v-on:click="basicinfoshow" class="h-6 w-6 pt-1 mx-4">
        <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="flex px-8 pt-4">
        <div class="flex-auto w-1/2">
          <div class="mt-2 mb-1">
            <span>First Name</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.fName}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Email</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.email_}}</span>
          </div>
        </div>
        <div class="flex-auto w-1/2">
          <div class="mt-2 mb-1">
            <span>Last Name</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.lName }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white mt-4 px-4 text-left rounded">
      <span class="text-2xl pt-2">Work</span>
      <button v-if="isEditable" v-on:click="workshow" class="h-6 w-6 pt-1 mx-4">
        <svg viewBox="0 0 20 20" fill="currentColor" class="pencil-alt w-6 h-6">
          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div class="flex px-8 pt-4">
        <div class="flex-auto w-1/2">
          <div class="mt-2 mb-1">
            <span>Employee ID</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.employee_id}}</span>
          </div>
          <div class="mt-2 mb-1">
            <span>Department</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.department}}</span>
          </div>
          <div class="mt-2 mb-1">
            <span>Reporting to</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.reporting_to}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Date of hiring</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.date_of_joining}}</span>
          </div>
        </div>
        <div class="flex-auto w-1/2">
          <div class="mt-2 mb-1">
            <span>Title</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.job_title}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Employee Type</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.employee_type}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Mobile No</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.mobile}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white px-4 text-left mt-4 rounded">
      <span class="text-2xl pt-2">Career Goal</span>
      <button v-if="isEditable" v-on:click="goalshow" class="h-6 w-6 pt-1 mx-4">
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
        <span>{{this.career_goal}}</span>
      </div>
    </div>
    <div class="bg-white px-4 text-left mt-4 rounded">
      <span class="text-2xl pt-2">Interested Area</span>
      <button v-if="isEditable" v-on:click="interestedAreashow" class="h-6 w-6 pt-1 mx-4">
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
            v-for="item in this.interested_area"
            :key="item.id"
            class="inline-block bg-blue-200 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import InterestedAreaService from "../services/api/InterestedAreaService";
import BasicInfoModal from "./modals/BasicinfoModal"
import WorkModal from "./modals/WorkModal"
import CareerGoalModal from "./modals/CareerGoalModal"
export default {
  name: "BasicInfo",
  components: {
   WorkModal,
    BasicInfoModal,
    CareerGoalModal
  },
  data() {
    return {
      employee_id: this.userdata.employee_id,
      job_title: this.userdata.job_title,
      department: this.userdata.department,
      employee_type: this.userdata.employee_type,
      mobile: this.userdata.mobile,
      reporting_to: this.userdata.reporting_to,
      date_of_joining: this.userdata.date_of_joining,
      career_goal: this.userdata.career_goal,
      fName: this.f_name,
      lName: this.l_name,
      email_: this.email,
      new_interested_area: null,
    };
  },
  methods: {
    
    
    basicinfoshow() {
      this.$modal.show("basicinfo-modal");
    },
   
    workshow() {
      this.$modal.show("work-modal");
    },
   
    goalshow() {
      this.$modal.show("goal-modal");
    },
   
    interestedAreashow() {
      this.$modal.show("interestedArea-modal");
    },
    interestedAreahide() {
      this.$modal.hide("interestedArea-modal");
    },
    addNewInterestedArea() {
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.userdata.user_id);
      bodyFormData.set("name", this.new_interested_area);
      InterestedAreaService.postInterestedArea(bodyFormData)
      .then((response) => {
        this.interested_area.push(response);
      });
      this.new_interested_area = null;
    },
    deleteInterestedArea(id) {
      InterestedAreaService.deleteInterestedArea(id)
        .then(() => {
          this.interested_area = [
            ...this.interested_area.filter((x) => x.id != id),
          ];
        });
      this.new_interested_area = null;
    },
    updateBasicInfo(response) {
      
        this.$store.dispatch("setLogedInUserRole", response);
        this.email_ = response.email;
        this.fName = response.first_name;
        this.lName = response.last_name;
        this.$emit("updateBasicInfo", response);
  
    },
    updateWork(response) { 
      this.employee_id=response.employee_id,
      this.job_title=response.job_title,
      this.department=response.department,
      this.employee_type=response.employee_type,
      this.mobile=response.mobile,
      this.reporting_to=response.reporting_to,
      this.date_of_joining=response.date_of_joining, response;   
    },
    updateCareerGoal(response) {
    this.career_goal = response.career_goal
    },
  },
  props: [
    "userdata",
    "f_name",
    "l_name",
    "email",
    "interested_area",
    "isEditable",
  ],
  mounted() {},
};
</script>