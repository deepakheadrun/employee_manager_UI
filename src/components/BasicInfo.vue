<template>
  <div>
    <div class="bg-white px-4 text-left rounded">
      <span class="text-2xl pt-2">Basic Info</span>
      <modal :height="350" name="basicinfo-modal">
        <div class="p-8">
          <h2
            class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >Basic Info Update</h2>
          <div class="rounded-md shadow-sm">
            <div class="p-2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Username / Email</label>
              <input
                aria-label="Email address"
                v-model="email"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div class="flex">
              <div class="-mt-px p-2 w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="fName">First Name</label>
                <input
                  aria-label="First Name"
                  v-model="f_name"
                  name="fName"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="First Name"
                />
              </div>
              <div class="-mt-px p-2 w-1/2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lName">Last Name</label>
                <input
                  aria-label="Last Name"
                  v-model="l_name"
                  name="lName"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 pb-8">
            <button
              v-on:click="updateBasicInfo"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Update
            </button>
          </div>
        </div>
      </modal>

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

      <modal :height="300" name="goal-modal">
        <div class="p-8">
          <h2
            class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >Update Career Goal</h2>
          <div class>
            <div class="px-8 pt-4">
              <div class="-mt-px pt-2">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="careerGoal"
                >Career Goal</label>
                <textarea
                  aria-label="Career Goal"
                  v-model="career_goal"
                  name="careerGoal"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Career Goal"
                />
              </div>
            </div>
          </div>
          <div class="mt-6 pb-8">
            <button
              v-on:click="updateCareerGoal"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Update
            </button>
          </div>
        </div>
      </modal>

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
            <span class="ml-2">{{this.userdata.employee_id}}</span>
          </div>
          <div class="mt-2 mb-1">
            <span>Department</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.department}}</span>
          </div>
          <div class="mt-2 mb-1">
            <span>Reporting to</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.reporting_to}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Date of hiring</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.date_of_joining}}</span>
          </div>
        </div>
        <div class="flex-auto w-1/2">
          <div class="mt-2 mb-1">
            <span>Title</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.job_title}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Employee Type</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.employee_type}}</span>
          </div>
          <div class="mt-2 mb-4">
            <span>Mobile No</span>
            <span class="ml-1">:</span>
            <span class="ml-2">{{this.userdata.mobile}}</span>
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
        <span>{{this.userdata.career_goal}}</span>
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
import axios from "axios";
import Datepicker from "vuejs-datepicker";
export default {
  name: "BasicInfo",
  components: {
    Datepicker,
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
      fName:this.f_name,
      lName:this.l_name,
      email_:this.email,
      new_interested_area: null,
    };
  },
  methods: {
    addNewInterestedArea() {
      console.log(this.new_interested_area);
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.userdata.user_id);
      bodyFormData.set("name", this.new_interested_area);
      axios
        .post(process.env.VUE_APP_API_URL + "interested_area/", bodyFormData, {
          headers: {
            Authorization: "Bearer " + tokens.access,
          },
        })
        .then((response) => {
          this.interested_area.push(response.data);
        });
      this.new_interested_area = null;
    },
    deleteInterestedArea(id) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));

      axios
        .delete(process.env.VUE_APP_API_URL + "interested_area/" + id + "/", {
          headers: {
            Authorization: "Bearer " + tokens.access,
          },
        })
        .then(() => {
          this.interested_area = [
            ...this.interested_area.filter((x) => x.id != id),
          ];
        });
      this.new_interested_area = null;
    },
    dateSelected(e) {
      this.date_of_joining = e.toISOString().slice(0, 10);

      console.log(this.date_of_joining);
    },
    basicinfoshow() {
      this.$modal.show("basicinfo-modal");
    },
    basicinfohide() {
      this.$modal.hide("basicinfo-modal");
    },
    workshow() {
      this.$modal.show("work-modal");
    },
    workhide() {
      this.$modal.hide("work-modal");
    },
    goalshow() {
      this.$modal.show("goal-modal");
    },
    goalhide() {
      this.$modal.hide("goal-modal");
    },
    interestedAreashow() {
      this.$modal.show("interestedArea-modal");
    },
    interestedAreahide() {
      this.$modal.hide("interestedArea-modal");
    },
    updateBasicInfo() {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      var bodyFormData = new FormData();

      bodyFormData.set("username", this.email);
      bodyFormData.set("first_name", this.f_name);
      bodyFormData.set("last_name", this.l_name);
      axios
        .put(process.env.VUE_APP_API_URL + "rest-auth/user/", bodyFormData, {
          headers: {
            Authorization: "Bearer " + tokens.access,
          },
        })
        .then((response) => {
          this.$store.dispatch("setLogedInUserRole", response.data);
          this.email_ = response.data.email;
          this.fName = response.data.first_name;
          this.lName = response.data.last_name;
          this.$emit("updateBasicInfo", response.data);
          
          this.basicinfohide();
        });
    },
    updateWork() {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.userdata.user_id);
      bodyFormData.set("job_title", this.job_title);
      bodyFormData.set("employee_id", this.employee_id);
      bodyFormData.set("department", this.department);
      bodyFormData.set("employee_type", this.employee_type);
      bodyFormData.set("reporting_to", this.reporting_to);
      bodyFormData.set("mobile", this.mobile);
      bodyFormData.set("date_of_joining", this.date_of_joining);
      axios
        .put(
          process.env.VUE_APP_API_URL + "info/" + this.userdata.id + "/",
          bodyFormData,
          {
            headers: {
              Authorization: "Bearer " + tokens.access,
            },
          }
        )
        .then((response) => {
          this.userdata = response.data;
          this.workhide();
        });
    },
    updateCareerGoal() {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.userdata.user_id);
      bodyFormData.set("career_goal", this.career_goal);

      axios
        .put(
          process.env.VUE_APP_API_URL + "info/" + this.userdata.id + "/",
          bodyFormData,
          {
            headers: {
              Authorization: "Bearer " + tokens.access,
            },
          }
        )
        .then((response) => {
          this.userdata = response.data;
          this.goalhide();
        });
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
  mounted() {
  
  },
};
</script>