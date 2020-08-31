<template>
  <div>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-2 text-center text-3xl leading-9 font-extrabold text-gray-900">Register</h2>
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
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      fName: "",
      lName: "",
    };
  },
  methods: {
    clickOnRegister() {
      var bodyFormData = new FormData();
      bodyFormData.set("username", this.username);
      bodyFormData.set("first_name", this.fName);
      bodyFormData.set("last_name", this.lName);
      bodyFormData.set("email", this.username);
      bodyFormData.set("password", this.password);
      bodyFormData.set("password_confirm", this.password2);
      this.axios({
        method: "post",
        url: process.env.VUE_APP_API_URL + "accounts/register/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(response=> {
          //handle success
          console.log(response.data);
         
          // this.setNewUserInfo(response.data.id)
          window.location.href = "/login";
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
   
  },
};
</script>