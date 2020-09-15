<template>
     <div class="bg-white px-4 text-left rounded">
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
                  v-model="first_name"
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
                  v-model="last_name"
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
    </div>
</template>

<script>

import UserService from "./../../services/api/UserService"
export default {
    name:"BasicInfoModal",
    props:['info'],
    components: {
   
  },
    data(){
        return({
            first_name : this.info.first_name,
            last_name : this.info.last_name,
            email : this.info.username,
        })
    },
    methods:{
         updateBasicInfo() {
           if(this.checkForm()){
             
      var bodyFormData = new FormData();

      bodyFormData.set("username", this.email);
      
      bodyFormData.set("first_name", this.first_name);
      bodyFormData.set("last_name", this.last_name);
      this.debugger
      console.log(bodyFormData)
      UserService.updateUser(bodyFormData).then((response) => {
        this.$store.dispatch("setLogedInUserRole", response);
        this.$emit("updateBasicInfo", response);
        this.$toasted.success("Information Updated",{duration:5000})
        this.basicinfohide();
      });
    }
    },
     basicinfohide() {
      this.$modal.hide("basicinfo-modal");
    },
       validateEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(this.email)) {
  
        return true
      } else {
        
        this.$toasted.error("Invalid Email Address", { duration: 5000 });
        return false
      }
    },
    validateFirstName(){
      if(!this.first_name){
        this.$toasted.error("First Name required", { duration: 5000 });
        return false
      }
      else{
    
        return true
      }
    },
    
     checkForm() {  
      
      if (this.validateEmail() &&
       this.validateFirstName() ) {
        return true;
      }
      
     }
    }
}
</script>