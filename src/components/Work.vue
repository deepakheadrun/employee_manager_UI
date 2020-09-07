<template>
  <div>
    <SkillModal v-on:updateSkills="updateSkills($event)" v-bind:skills="this.skill_list" />

    <ExperienceModal
      v-on:addorUpdate="addorUpdate($event)"
      v-bind:toUpdate="this.toUpdate"
      v-bind:isUpdate="this.isUpdate"
    />
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
            v-for="item in this.skill_list"
            :key="item.id"
            class="inline-block bg-blue-200 rounded-full mx-1 px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="bg-white mt-4 px-4 text-left rounded">
      <span class="text-2xl pt-2">Work Experience</span>
      <button v-if="isEditable" v-on:click="addNewExerience" class="h-6 w-6 pt-1 mx-4">
        <svg viewBox="0 0 20 20" fill="currentColor" class="document-add w-6 h-6">
          <path
            fill-rule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div v-for="item in this.experience_list" :key="item.id" class="px-8 pt-4">
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
import ExperienceService from "../services/api/ExperienceService";
import SkillModal from "./modals/SkillModal";
import ExperienceModal from "./modals/ExperienceModal";

export default {
  name: "Work",
  props: ["skills", "experience", "isEditable"],
  components: {
    SkillModal,
    ExperienceModal,
  },
  data() {
    return {
      new_skill: null,
      skill_list: this.skills,
      experience_list: this.experience,
      isUpdate: false,
      toUpdate: null,
    };
  },
  methods: {
    skillshow() {
      this.$modal.show("skill-modal");
    },
    skillhide() {
      this.$modal.hide("skill-modal");
    },
    skillUpdate(response) {
      this.skill_list = [...response];
    },
    exerienceshow() {
      this.$modal.show("experience-modal");
    },

    updateSkills(response) {
      this.skill_list = [...response];
    },
    addNewExerience() {
      this.isUpdate = false;
      this.toUpdate = null;
      this.exerienceshow();
    },
    deleteExerience(id) {
      ExperienceService.deleteExperience(id).then(() => {
        let index = this.experience_list.findIndex((x) => x.id == id);
        this.experience_list.splice(index, 1);
      });
    },
    udpateExerience(id) {
      this.toUpdate = this.experience_list.find((x) => x.id == id);
      this.isUpdate = true;
      this.exerienceshow();
    },
    addorUpdate(response) {
      if (!this.isUpdate) {
        this.experience_list.push(response);
      } else {
        let index = this.experience_list.findIndex((x) => x.id == response.id);
        this.experience_list.splice(index, 1, response);
      }
    },
  },
};
</script>