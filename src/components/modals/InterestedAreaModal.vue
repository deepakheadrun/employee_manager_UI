<template>
  <modal :height="300 +40*(this.interested_area_list.length/4)" name="interestedArea-modal">
    <div class="p-8">
      <h2
        class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
      >Update Interested Area</h2>
      <div class>
        <div class="flex px-8 pt-4">
          <div class="w-1/2">
            <div class="-mt-px pt-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-1"
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
             
          </div>
          <div class="w-1/2">
            <div class="px-8 pt-4 pb-4">
              <div class="pt-4 pb-2">
               
              <button
                v-on:click="addNewInterestedArea"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >Add</button>
            </div>
               
            
            </div>
          </div>
        </div>
        <div class="mt-6 pb-8">
             <span
                  v-for="item in this.interested_area_list"
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
      <div class="mt-6"></div>
    </div>
  </modal>
</template>
<script>
import InterestedAreaService from "../../services/api/InterestedAreaService";
export default {
  name: "InterestedAreaModal",
  data() {
    return {
      new_interested_area: null,
      interested_area_list: this.interested_area,
    };
  },
  props: ["interested_area"],
  methods: {
    interestedAreahide() {
      this.$modal.hide("interestedArea-modal");
    },
    addNewInterestedArea() {
      if(this.checkForm()){
      var bodyFormData = new FormData();

      bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
      bodyFormData.set("name", this.new_interested_area);
      InterestedAreaService.postInterestedArea(bodyFormData).then(
        (response) => {
          this.interested_area_list.push(response);
          this.new_interested_area = null;
          this.$emit("updateInterestedArea", this.interested_area_list);
        }
      );
    }
    },
    deleteInterestedArea(id) {
      InterestedAreaService.deleteInterestedArea(id).then(() => {
        this.interested_area_list = [
          ...this.interested_area_list.filter((x) => x.id != id),
        ];

        this.new_interested_area = null;
        this.$emit("updateInterestedArea", this.interested_area_list);
      });
    },

     checkForm() {  
     
      if (this.validateNewInterestedArea() 
        ) {
        return true;
      }
      
     },
     validateNewInterestedArea(){
      if(this.new_interested_area.length>30){
        this.$toasted.error("Interested Area should contain only 30 letters", { duration: 5000 });
        return false
      }
      else{
        return true
      }
    },
  },
};
</script>