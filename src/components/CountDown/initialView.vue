<template>
  <div class="fixed w-screen h-screen"
        :class="getIsDay?'bg-white':'bg-black'">
      <div v-if="getIsDay">
        <ParticlesDayVue/>
      </div>
      <div v-else>
            <ParticlesStartsVue/>          
      </div>
     <CountDownComponentVue/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from'vuex'
import CountDownComponentVue from './CountDownComponent.vue'
import ParticlesDayVue from './ParticlesDay.vue'
import ParticlesStartsVue from './ParticlesStarts.vue'

export default {
    components: {
        CountDownComponentVue,
        ParticlesStartsVue,
        ParticlesDayVue,
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
        if(hour<6 || hour>21){
          this.onChangeIsDay(false)
        }
    },
}
</script>

<style>
</style>