<template>
  <div>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-2 px-2 sm:px-4 lg:px-4"
    >
      <div class="max-w-md w-full">
        <div>
          <h2 class=" text-center text-3xl leading-9 font-extrabold text-gray-900 pb-2">Register</h2>
          <div class="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                v-model="username"
                name="email"
                type="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
              <span class="text-orange-700" v-if="msg.email">{{msg.email}}</span>
            </div>
            <div class="-mt-px pt-2">
              <input
                aria-label="First Name"
                v-model="fName"
                name="fName"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="First Name"
              />
            </div>
            <div class="-mt-px pt-2">
              <input
                aria-label="Last Name"
                v-model="lName"
                name="lName"
                type="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Last Name"
              />
            </div>
            <div class="-mt-px pt-2">
              <input
                aria-label="Password"
                v-model="password"
                name="password"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
              <span class="text-orange-700" v-if="msg.password">{{msg.password}}</span>
            </div>
            <div class="-mt-px pt-2">
              <input
                aria-label="Confirm Password"
                v-model="password2"
                name="password2"
                type="password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password confirm"
              />
              <span class="text-orange-700" v-if="msg.confirmPassword">{{msg.confirmPassword}}</span>
            </div>
          </div>
          <div class="mt-6">
            <button
              v-on:click="clickOnRegister"
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
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "./../services/api/UserService";
export default {
  name: "Register",
  data() {
    return {
      errors: [],
      username: "",
      password: "",
      password2: "",
      fName: "",
      lName: "",
      msg: [],
    };
  },
  watch: {
    username(value) {
      this.validateEmail(value);
    },
    password(value) {
      this.validatePassword(value);
    },
    password2() {
      this.validateConfirmPassword();
    },
  },
  methods: {
    validateEmail(value) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePassword(value) {
      if (
        value.match(/[a-z]/g) &&
        value.match(/[A-Z]/g) &&
        value.match(/[0-9]/g) &&
        value.match(/[^a-zA-Z\d]/g) &&
        value.length >= 8
      ) {
        this.msg["password"] = "";
      } else {
        this.msg["password"] =
          "At least 1 uppercase, 1 lowercase character, 1 digit, 1 special character. Minimum 8 characters.";
      }
    },
    validateConfirmPassword() {
      if (this.password == this.password2) {
        this.msg["confirmPassword"] = "";
      } else {
        this.msg["confirmPassword"] = "Password does not match.";
      }
    },
    clickOnRegister() {
      if (this.checkForm()) {
        var bodyFormData = new FormData();
        bodyFormData.set("username", this.username);
        bodyFormData.set("first_name", this.fName);
        bodyFormData.set("last_name", this.lName);
        bodyFormData.set("email", this.username);
        bodyFormData.set("password", this.password);
        bodyFormData.set("password_confirm", this.password2);
        UserService.addUser(bodyFormData)
          .then(() => {
            window.location.href = "/login";
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
      }
    },

    checkForm() {
      if (
        this.username &&
        this.password &&
        this.password2 &&
        this.fName &&
        this.lName &&
        !this.msg["email"] &&
        !this.msg["password"] &&
        !this.msg["confirmPassword"]
      ) {
        return true;
      }

      this.errors = [];

      if (!this.username || this.msg["email"]) {
        this.errors.push("Email required.");
      }
      if (!this.fName) {
        this.errors.push("First Name required.");
      }
      if (!this.lName) {
        this.errors.push("Last Name required.");
      }
      if (!this.password || this.msg["password"]) {
        this.errors.push("Password required.");
      }
      if (!this.password2 || this.msg["confirmPassword"]) {
        this.errors.push("Confirm  required.");
      }

      this.errors.forEach((element) => {
        this.$toasted.error(element, { duration: 5000 });
      });
    },
  },
};
</script>