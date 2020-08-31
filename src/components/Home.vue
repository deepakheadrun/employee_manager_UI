<template>
  <div v-if="users.length!=0" class="min-h-screen bg-fixed bg-cover">
    <!-- style="background-image:url(https://images.pexels.com/photos/3815738/pexels-photo-3815738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)" -->
    <div class="flex flex-row justify-center mt-2" v-for="(item, i) in users" :key="i">
      <UserCard v-if="item.length >= 1" class="w-1/3 mx-4" v-bind:userinfo="item[0]" />
      <UserCard v-if="item.length >= 2" class="w-1/3 mx-4" v-bind:userinfo="item[1]" />
      <UserCard v-if="item.length >= 3" class="w-1/3 mx-4" v-bind:userinfo="item[2]" />
      <UserCard v-if="item.length >= 4" class="w-1/3 mx-4" v-bind:userinfo="item[3]" />
      <!-- <div   class="flex flex-row justify-center items-center m-1 font-medium py-1 px-2 bg-white  text-gray-700 bg-gray-100 border border-gray-300 ">
            <div class="text-xs font-normal leading-none flex-initial w-1/3">{{item[0]}}</div>
             <div class="text-xs font-normal leading-none flex-initial w-1/3">{{item[1]}}</div>
              <div class="text-xs font-normal leading-none flex-initial w-1/3">{{item[2]}}</div>
      </div>-->
    </div>
  </div>

  <!-- <img class="rounded-lg md:w-full h-auto" src="./background.jpg"> -->
</template>

 
<script>
import axios from "axios";
import UserCard from "./UserCard.vue";
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  components: {
    UserCard,
  },
  mounted() {
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    axios({
      method: "get",
      url: process.env.VUE_APP_API_URL + "user/",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + tokens.access,
      },
    })
      .then((response) => {
        let res = response.data.filter((el) => {
          // el.id != this.$store.state.logedInUser.pk
         return el.id !== this.$store.state.logedInUser.pk;
        });
       
        const n = 4; //tweak this to add more items per line

        const result = new Array(Math.ceil(res.length / n))
          .fill()
          .map(() => res.splice(0, n));

       
        this.users.push(...result);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  },
};
</script>

