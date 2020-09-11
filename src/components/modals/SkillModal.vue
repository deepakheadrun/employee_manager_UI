<template>
  <modal :height="300 +40*(this.skill_list.length/4)" name="skill-modal">
    <div class="p-8">
      <h2 class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Update Skills</h2>
      <div class>
        <div class="flex px-8 pt-4">
          <div class="w-1/2">
            <div class="-mt-px pt-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-1"
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
          </div>
          <div class="w-1/2">
            <div class="px-8 pt-4 pb-4">
              <div class="pt-4 pb-2">
               
                <button
                  v-on:click="addNewSkill"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 pb-8">
          <span
            v-for="item in this.skill_list"
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
      <div class="mt-6"></div>
    </div>
  </modal>
</template>
<script>
import SikllService from "../../services/api/SikllService";
export default {
  name: "SkillModal",
  data() {
    return {
      new_skill: null,
      skill_list: this.skills,
    };
  },

  props: ["skills"],
  methods: {
    addNewSkill() { if(this.checkForm()){
      var bodyFormData = new FormData();
      bodyFormData.set("user_id", this.$store.state.logedInUser.pk);
      bodyFormData.set("name", this.new_skill);

      SikllService.postSkill(bodyFormData).then((response) => {
        this.skill_list.push(response);
        this.$emit("updateSkills", this.skill_list);
      });
      this.new_skill = null;
    }},
     checkForm() {  
     
      if (this.validateNewSkill() 
        ) {
        return true;
      }
      
     },
     validateNewSkill(){
      if(this.new_skill.length>30){
        this.$toasted.error("Skill should contain only 30 letters", { duration: 5000 });
        return false
      }
      else{
        return true
      }
    },
    deleteskill(id) {
      SikllService.deleteSkill(id).then(() => {
        this.skill_list = [...this.skill_list.filter((x) => x.id != id)];
        this.$emit("updateSkills", this.skill_list);
      });
      this.new_skill = null;
    },
  },
};
</script>