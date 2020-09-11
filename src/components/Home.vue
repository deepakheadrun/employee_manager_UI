<template>
<div>
  <Landing v-if="!this.$store.state.logedInUser"/>
  <div v-if="users.length!=0 && this.$store.state.logedInUser" class="min-h-screen bg-fixed bg-cover">
    <div class="flex flex-row justify-center mt-2" v-for="(item, i) in users" :key="i">
      <UserCard v-if="item.length >= 1" class="w-1/3 mx-4" v-bind:userinfo="item[0]" />
      <UserCard v-if="item.length >= 2" class="w-1/3 mx-4" v-bind:userinfo="item[1]" />
      <UserCard v-if="item.length >= 3" class="w-1/3 mx-4" v-bind:userinfo="item[2]" />
      <UserCard v-if="item.length >= 4" class="w-1/3 mx-4" v-bind:userinfo="item[3]" />
    </div>
  </div>
</div>
</template>

 
<script>
import UserCard from "./UserCard.vue";
import UserService from "./../services/api/UserService"
import Landing from "./Landing"
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  components: {
    UserCard,
    Landing
  },
  mounted() {
    UserService.getUsers().then((response)=> 
    {
      if(this.$store.state.logedInUser){
      let filteredUsers = response.filter((el) => {
        return el.id !== this.$store.state.logedInUser.pk;
        });
       
        const n = 4; //tweak this to add more items per line
        const result = new Array(Math.ceil(filteredUsers.length / n))
          .fill()
          .map(() => filteredUsers.splice(0, n));
        this.users.push(...result);
      }})
    }
};
</script>

