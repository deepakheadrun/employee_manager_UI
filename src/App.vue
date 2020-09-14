<template>
  <div id="app">  
   <Loader  v-if="this.$store.state.isLoading"/>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-4xl tracking-tight">Employee Manager</span>
      </div>
      <button
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      >
        <router-link v-bind:to="'/'">
          <h3 class="mr-4 font-medium text-xl">Home</h3>
        </router-link>
      </button>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <div class="flex justify-end">
            <button v-on:click="userbtn">
              <h3
                v-if="this.$store.state.logedInUser"
                class="mr-4 font-medium text-xl"
              >{{this.$store.state.logedInUser.first_name + " " +this.$store.state.logedInUser.last_name }}</h3>
            </button>

            <button
              v-on:click="logOutBtn"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >{{btnName}}</button>
          </div>
        </div>
      </div>
    </nav>
    <h2 class="text-3xl text-center">{{message}}</h2>
    <router-view :key="$route.fullPath" v-if="isVisible"></router-view>
  </div>
</template>

<script>
import UserService from "./services/api/UserService";
import UserRoleService from "./services/api/UserRoleService";
import Loader from "./components/Loader"
export default {
  name: "App",
  data() {
    return {
      btnName: "LogOut",
      user_name: "",
      first_name: "",
      last_name: "",
      email: "",
      isVisible: false,
      message: "",
      user_id: null,
    };
  },
  components: {Loader},
  watch: {
    btnName() {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      if (!tokens) {
        this.btnName = "LogIN";
      }
    },
  },
  methods: {
    logOutBtn() {
      localStorage.clear();
      window.location.href = "/login";
      this.btnName = "LogIN";
    },

    userbtn() {
      this.$store.dispatch("setSelectedUser",
      {id: this.$store.state.logedInUser.pk,
              first_name: this.$store.state.logedInUser.first_name,
              last_name: this.$store.state.logedInUser.last_name,
              email: this.$store.state.logedInUser.username,
})
this.$router.push({ path: '/user/'+ this.$store.state.logedInUser.pk })
    
    },
  },
  mounted() {
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) {
      this.btnName = "LogIN";
      this.isVisible = true;
    } else {
      UserService.getLogedInUser()
        .then((response) => {
          UserRoleService.getUserRole()
            .then((response) => {
              this.$store.dispatch("setUserRole", response.name);
              this.isVisible = true;
              this.user_id = this.$store.state.logedInUser.pk;
            })
            .catch(() => {
              this.message = "Please contact to admin for role";
              this.isVisible = false;
            });

          this.email = response.email;
          this.$store.dispatch("setLogedInUserRole", response);
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  },
};
</script>

