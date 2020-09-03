<template>
  <div>
    <modal :height="300" name="rating-modal">
      <div class="p-8">
        <h2
          v-if="isUpdate"
          class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >Update Rating</h2>
        <h2
          v-if="!isUpdate"
          class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >Add Rating</h2>
        <div class>
          <div class="flex px-8 pt-4">
            <div class="w-1/2 pr-2">
              <div class="-mt-px pt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">Rating</label>
                <input
                  aria-label="Rating"
                  v-model="rating"
                  name="rating"
                  type="text"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Rating"
                />
              </div>
            </div>
            <div class="w-1/2">
              <div class="-mt-px pt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Months">Months</label>
                <select name="Months" @change="onChange($event)" class="form-control" v-model="key">
                  <option disabled value>Please select one</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-12 px-8">
            <button
              v-on:click="addOrUpdateRating"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Add
            </button>
          </div>
        </div>
        <div class="mt-6"></div>
      </div>
    </modal>

    <modal :height="300" name="comment-modal">
      <div class="p-8">
        <h2
          v-if="isUpdate"
          class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >Update Comment</h2>
        <h2
          v-if="!isUpdate"
          class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >Add Comment</h2>
        <div>
          <div>
            <div class="-mt-px pt-2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="comment">Comment</label>
              <textarea
                aria-label="Comment"
                v-model="comment"
                name="comment"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Comment"
              />
            </div>

            <button
              v-on:click="addOrUpdateComment"
              class="group mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Add
            </button>
          </div>
        </div>
        <div class="mt-6"></div>
      </div>
    </modal>

    <div>
      
      <div class="px-8 pt-4">
        <button
        v-if="isEditable"
        class="text-center block border border-white border-gray-400 rounded hover:bg-teal-700 text-black-500 hover:bg-gray-700 py-2 px-4"
        @click="addRating"
      >Add Rating</button>
  <div class="flex">
        <div class="flex-auto w-1/2">
          <h1 class="text-2xl pt-2">Ratings</h1>
          <div class="bg-white px-4 mt-4 pt-2 pb-4 text-left rounded">
            <div v-for="item in this.performance" :key="item.id" class="px-4 mt-2 pt-1">
              {{item.month}} - {{item.rating}}
              <button
                v-if="isEditable"
                v-on:click="udpateRating(item.id)"
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
            </div>
          </div>
        </div>
        <div class="flex-auto w-1/2">
          <PerformanceChart v-bind:chart_data="this.performance" />
          <!-- <button @click="fillData()">Randomize</button> -->
        </div>
      </div>
      </div>
    </div>
    <div class="px-8 pt-4">
      <button
        v-if="isEditable"
        class="text-center block border border-white border-gray-400 rounded hover:bg-teal-700 text-black-500 hover:bg-gray-700 py-2 px-4"
        @click="addComment"
      >Add Comment</button>
      <div class="flex">
        <div class="flex-auto w-1/2">
          <h1 class="text-2xl pt-2">Comments</h1>
          <div
            v-for="item in this.comments"
            :key="item.id"
            class="bg-white px-4 mt-4 pt-2 text-left rounded"
          >
            Date - {{item.date}}
            <p class="font-bold pb-4">{{item.description}}</p>
            -by {{item.by}}
            <button
              v-if="isEditable"
              v-on:click="updateComment(item.id)"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerformanceChart from "./PerformanceChart.vue";
import axios from "axios";
import PerformanceService from "../services/api/PerformanceService";
import CommentService from "../services/api/CommentService";
export default {
  name: "Performance",

  components: {
    PerformanceChart,
  },
  props: ["performance", "comments", "userdata"],
  data() {
    return {
      chartData: [],
      chartOptions: [],
      isEditable: false,
      isUpdate: false,
      toUpdate: null,
      rating: null,
      id: null,
      month: "",
      key: "",
      comment: null,
    };
  },
  mounted() {
    if (
      this.$store.state.role == "Manager" &&
      this.$store.state.logedInUser.pk != this.userdata.user_id
    ) {
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
  },
  methods: {
    ratingshow() {
      this.$modal.show("rating-modal");
    },
    ratinghide() {
      this.$modal.hide("rating-modal");
    },
    commentshow() {
      this.$modal.show("comment-modal");
    },
    commenthide() {
      this.$modal.hide("comment-modal");
    },
    addRating() {
      this.isUpdate = false;
      this.ratingshow();
    },
    addComment() {
      this.commentshow();
    },
    updateComment(id) {
      this.toUpdate = this.comments.find((x) => x.id == id);
      this.isUpdate = true;
      this.id = id;
      this.comment = this.toUpdate.description;
      this.commentshow();
    },
    udpateRating(id) {
      this.toUpdate = this.performance.find((x) => x.id == id);
      this.isUpdate = true;
      this.id = id;
      this.month = this.toUpdate.month;
      this.key = this.toUpdate.month;
      this.rating = this.toUpdate.rating;
      this.ratingshow();
    },
    onChange(event) {
      this.month = event.target.value;
    },
    addOrUpdateComment() {
      var bodyFormData = new FormData();
      if (!this.isUpdate) {
        bodyFormData.set("user_id", this.userdata.user_id);
        bodyFormData.set("description", this.comment);
        bodyFormData.set("by", this.$store.state.logedInUser.first_name + " " + this.$store.state.logedInUser.last_name );
        bodyFormData.set("date", new Date().toISOString().slice(0, 10));

        CommentService.postComment(bodyFormData).then((response) => {
          this.comments.push(response);
        });
        (this.comment = null), (this.id = null);
      } else {
        let id = this.id;
        bodyFormData.set("id", id);
        bodyFormData.set("user_id", this.userdata.user_id);
        bodyFormData.set("description", this.comment);
        bodyFormData.set("by",this.$store.state.logedInUser.first_name + " " + this.$store.state.logedInUser.last_name );
        bodyFormData.set("date", new Date().toISOString().slice(0, 10));
        CommentService.updateComment(bodyFormData, id).then((response) => {
          let index = this.comments.findIndex((x) => x.id == id);
          this.comments.splice(index, 1, response);
        });
        this.comment = null;
        this.id = null;
      }
      this.commenthide();
    },

    addOrUpdateRating() {
      var bodyFormData = new FormData();
      if (!this.isUpdate) {
        bodyFormData.set("user_id", this.userdata.user_id);
        bodyFormData.set("month", this.month);
        bodyFormData.set("rating", this.rating);
        PerformanceService.postPerformance(bodyFormData)
        .then((response) => {
          this.performance.unshift(response);
        });
        (this.month = null),
          (this.rating = null),
          (this.to = null),
          (this.id = null);
      } else {
        let id = this.id;
        bodyFormData.set("id", id);
        bodyFormData.set("user_id", this.userdata.user_id);
        bodyFormData.set("month", this.month);
        bodyFormData.set("rating", this.rating);

        axios;
        PerformanceService.updatePerformance(bodyFormData, id).then(
          (response) => {
            let index = this.performance.findIndex((x) => x.id == id);
            this.performance.splice(index, 1, response);
          }
        );
        (this.month = null),
          (this.rating = null),
          (this.to = null),
          (this.id = null);
      }
      this.ratinghide();
    },
  },
};
</script>