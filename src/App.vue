<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- <img class="h-16 w-64" src="https://www.headrun.com/static/img/headrun.png" /> -->
        <span class="font-semibold text-4xl tracking-tight">Employee Manager</span>
      </div>
      <button
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      >
        <router-link v-bind:to="'/'">
          <h3 class="mr-4 font-medium text-xl">Home</h3>
        </router-link>
      </button>
      <!-- <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
      </div>-->
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <div class="flex justify-end">
            <!-- <router-link
              :to="{
    name:'UserProfile',
    params: {
        item: {'id':this.user_id, 'first_name': this.first_name,'last_name':this.last_name, 'email': this.email }
    }
}"
            > -->
            <button v-on:click="userbtn">
              <h3 v-if="this.$store.state.logedInUser" class="mr-4 font-medium text-xl">{{this.$store.state.logedInUser.first_name + " " +this.$store.state.logedInUser.last_name }}</h3>
            </button>
            <!-- </router-link> -->
            <button
              v-on:click="logOutBtn"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >{{btnName}}</button>
          </div>
        </div>
        <!-- <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>-->
      </div>
    </nav>
    <h2 class="text-3xl text-center">{{message}}</h2>
    <router-view :key="$route.fullPath" v-if="isVisible"></router-view>
  </div>
</template>

<script>
import axios from "axios";
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
  components: {},
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
    
    userbtn(){
      this.$router.push({ path: '/'})
      setTimeout( ()=>{this.$router.push({ name: 'UserProfile', params: {item: {'id':this.$store.state.logedInUser.pk , 'first_name': this.$store.state.logedInUser.first_name ,'last_name':this.$store.state.logedInUser.last_name , 'email': this.$store.state.logedInUser.email  } } })},3 ) 
    },
    
  },
  mounted() {
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) {
      this.btnName = "LogIN";
      this.isVisible = true;
    } else {
      axios({
        method: "get",
        url: process.env.VUE_APP_API_URL + "rest-auth/user/",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + tokens.access,
        },
      })
        .then((response) => {
          //handle success

          axios({
            method: "get",
            url: process.env.VUE_APP_API_URL + "role/",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + tokens.access,
            },
          })
            .then((response) => {
              //handle success
              this.$store.dispatch("setUserRole", response.data.name);
              this.isVisible = true;
              this.user_id = this.$store.state.logedInUser.pk;
            })
            .catch(() => {
              //handle error
              this.message = "Please contact to admin for role";
              this.isVisible = false;
            });
         
          
          this.email = response.data.email;
          this.$store.dispatch("setLogedInUserRole", response.data);
          
        
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  },
};
</script>

