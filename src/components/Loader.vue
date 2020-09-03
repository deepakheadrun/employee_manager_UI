<template>
     <div class="loader" > 
      <div  class="bg-indigo-400 justify-center inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2 " ></div>
    <div  class="bg-indigo-400 justify-center inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2 " ></div>
    <div class=" bg-indigo-400 justify-center inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2 " ></div>
   </div>
</template>

<script>
export default {
    name:"Loader"
}
</script>
<style>
.loader {
            position: fixed;
            left: 45%;
            top: 50%;
            width: 10%;
            height: 10%;
            z-index: 9999;
            
           /* margin-left: auto;
           margin-right: auto; */
        }
        
</style>