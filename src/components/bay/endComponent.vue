<template>
  <div class=" relative w-screen h-screen bg-bay" >
      <div class=' w-full h-full flex justify-center items-center'>
         <p class="text-white bg-black bg-opacity-70 py-5 px-10 dodream text-4xl md:text-6xl text-center">
           ¡Nos vemos en Enero {{getNameUser.split(' ')[0]}}!</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getNameUser'])
  },
}
</script>

<style>
.bg-bay{
 background-image:url('../../assets/photos/optimiz/end.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>