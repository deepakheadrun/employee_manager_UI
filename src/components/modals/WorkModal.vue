<template>
    <modal :height="480" name="work-modal">
        <div class="m-4">
          <h2 class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Update Work</h2>
          <div class>
            <div class="flex px-8 pt-4">
              <div class="w-1/2 pr-2">
                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="date"
                  >Date Of Joining</label>
                  <datepicker
                    name="date"
                    v-bind:class="'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'"
                    @selected="dateSelected"
                    :value="date_of_joining"
                    :format="'yyyy-MM-dd'"
                  ></datepicker>
                </div>
                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="employeeID"
                  >Employee ID</label>
                  <input
                    aria-label="Employee ID"
                    v-model="employee_id"
                    name="employeeID"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Employee ID"
                  />
                </div>

                <div class="-mt-px pt-2">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
                  <input
                    aria-label="Title"
                    v-model="job_title"
                    name="title"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Title"
                  />
                </div>

                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="department"
                  >Department</label>
                  <input
                    aria-label="Department"
                    v-model="department"
                    name="department"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Department"
                  />
                </div>
              </div>
              <div class="w-1/2">
                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="employee_type"
                  >Employee Type</label>
                  <input
                    aria-label="Employee Type"
                    v-model="employee_type"
                    name="employee_type"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Employee Type"
                  />
                </div>

                <div class="-mt-px pt-2">
                  <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">Mobile No</label>
                  <input
                    aria-label="Mobile No"
                    v-model="mobile"
                    name="mobile"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Mobile No"
                  />
                </div>
                <div class="-mt-px pt-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="reportingto"
                  >Reporting to</label>
                  <input
                    aria-label="Reporting to"
                    v-model="reporting_to"
                    name="reportingto"
                    type="text"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                    placeholder="Reporting to"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 pb-8">
            <button
              v-on:click="updateWork"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Update
            </button>
          </div>
        </div>
      </modal>

</template>
<script>
import Datepicker from "vuejs-datepicker";
import UserInfoService from "./../../services/api/UserInfoService"
export default {
    name:'WorkModal',
     data(){
        return({
                employee_id: this.userdata.employee_id,
                job_title: this.userdata.job_title,
                department: this.userdata.department,
                employee_type: this.userdata.employee_type,
                mobile: this.userdata.mobile,
                reporting_to: this.userdata.reporting_to,
                date_of_joining: this.userdata.date_of_joining,
        })
    },
    props:['userdata'],
    components:{
Datepicker
    },
    methods:{
        updateWork() {
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.userdata.user_id);
      bodyFormData.set("job_title", this.job_title);
      bodyFormData.set("employee_id", this.employee_id);
      bodyFormData.set("department", this.department);
      bodyFormData.set("employee_type", this.employee_type);
      bodyFormData.set("reporting_to", this.reporting_to);
      bodyFormData.set("mobile", this.mobile);
      bodyFormData.set("date_of_joining", this.date_of_joining);
      console.log(bodyFormData)
      UserInfoService.updateUserInfo(bodyFormData, this.userdata.id)
      .then((response) => {
        
        this.$emit("updateWork", response);
        this.workhide();
      });
    },
dateSelected(e) {
      this.date_of_joining = e.toISOString().slice(0, 10);
    },
     workhide() {
      this.$modal.hide("work-modal");
    },
    }
}
</script>