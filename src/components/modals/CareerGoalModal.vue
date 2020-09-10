<template>
  <modal :height="300" name="goal-modal">
    <div class="p-8">
      <h2
        class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
      >Update Career Goal</h2>
      <div class>
        <div class="px-8 pt-4">
          <div class="-mt-px pt-2">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="careerGoal">Career Goal</label>
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
</template>
<script>
import UserInfoService from "../../services/api/UserInfoService";
export default {
  name: "CareerGoalModal",
  data() {
    return {
      career_goal: this.userdata.career_goal,
    };
  },
  props: ["userdata"],
  methods: {
    updateCareerGoal() {
      if (this.checkForm()) {
        var bodyFormData = new FormData();
        bodyFormData.set("user_id", this.userdata.user_id);
        bodyFormData.set("career_goal", this.career_goal);

        UserInfoService.updateUserInfo(bodyFormData, this.userdata.id).then(
          (response) => {
            this.$emit("updateCareerGoal", response);

            this.goalhide();
          }
        );
      }
    },
    goalhide() {
      this.$modal.hide("goal-modal");
    },
    checkForm() {
      if (this.validateCareerGoal()) {
        return true;
      }
    },
    validateCareerGoal() {
      if (this.career_goal.length > 30) {
        this.$toasted.error("Career Goal should contain only 1000 letters", {
          duration: 5000,
        });
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>