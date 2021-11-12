<template>
  <div class=" w-screen h-screen"
        :class="getIsDay?'bg-day':'bg-night'">
        <div class="absolute top-0 z-40 w-full flex justify-center pt-20 md:pt-40 dream">
            <p class="text-3xl sm:text-4xl md:text-5xl xl:text-8xl font-bold neontext text-center "
                   :class="getIsDay?'text-black bg-white':'text-white bg-black'" >Angel Isai  & Diana Felicitas</p>
        </div>
        <div class="absolute bottom-0 z-40 w-full flex justify-center pb-10 md:pb-20 ">
            <p class="text-base sm:text-2xl md:text-3xl xl:text-4xl  text-center dodream"
                   :class="getIsDay?'text-black bg-white':'text-white bg-black'">
                   Somos el principio de una historia que no pretende terminar.<br>
                   Acompañanos a formar una nueva familia, una nueva historia de amor.</p>
        </div>
       <div class="z-20">
           <PhotosHeaderVue/>
       </div>
      <div class="z-10"  v-if="getIsDay">
        <ParticlesDayVue/>
      </div>
      <div class="z-10" v-else>
            <ParticlesStartsVue/>          
      </div>
      <div class=" w-full h-full z-50">
     <CountDownComponentVue/>
      </div>      
  </div>
</template>

<script>
import {mapActions, mapGetters} from'vuex'
import CountDownComponentVue from './CountDownComponent.vue'
import ParticlesDayVue from './ParticlesDay.vue'
import ParticlesStartsVue from './ParticlesStarts.vue'
import PhotosHeaderVue from './PhotosHeader.vue'
export default {
    components: {
        CountDownComponentVue,
        ParticlesStartsVue,
        ParticlesDayVue,
        PhotosHeaderVue,
    },
    methods: {
        ...mapActions(['onChangeIsDay']),
    },
    computed: {
        ...mapGetters(['getIsDay'])
    },
    created () {
        const d = new Date();
        let hour = d.getHours();
        if(hour<6 || hour>19){
        //   this.onChangeIsDay(false)
        }
    },
}
</script>

<style>
.candy{
text-shadow: 4px 3px 0px #7A7A7A;
}
.bg-day{
 background-color: #ffffff;
}
.bg-night{
 background-color: #4D535E;
}
</style>