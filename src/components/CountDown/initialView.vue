<template>
  <div class="w-screen h-screen"
        :class="getIsDay?'bg-white':'bg-black'">
       <div class="z-20">
           <PhotosHeaderVue/>
       </div>
      <div class="z-10" v-if="getIsDay">
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
          this.onChangeIsDay(false)
        }
    },
}
</script>

<style>
</style>