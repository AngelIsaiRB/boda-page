<template>
  <div class="relative z-10 h-75vh pastel w-screen flex justify-center items-center bg-form">
      <div class="bg-white  bg-opacity-80 h-96 md:h-80 w-full md:w-3/4 lg:w-2/4 rounded-2xl" :class="isUsed?'flex justify-center items-center':''">
          <div class="w-full" >
          <p class="dodream py-1 md:py-5 text-2xl md:text-4xl text-center">
              {{isUsed?`Gracias por confirmar ${name}`:'Confirmar  asistencia'}}
          </p>
      </div>
      <form @submit.prevent="onLoadForm()" v-if="!isUsed">
          <div class="w-full block md:flex justify-around">
          <div class="mb-6 w-full md:w-80 flex justify-center">
            <div class="w-4/6 lg:w-full">
                <label for="text" class="text-base md:text-xl dodream font-medium text-black block mb-2">Tu Nombre</label>
            <input type="text" id="name" v-model="name"
             class="bg-gray-50 border dodream border-gray-300 text-gray-900 sm:text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
             placeholder="" required="">
            </div>
        </div>
          <div class="mb-6 w-full md:w-80  flex justify-center">
            <div class='w-4/6 lg:w-full'>
            <label for="text" class="text-base md:text-xl dodream font-medium text-black block mb-2">¿Un mensaje? (opcional)</label>
            <input type="text" id="name" v-model="message"
             class="bg-gray-50 border dodream border-gray-300 text-gray-900 sm:text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
             placeholder="Un mensaje tuyo nos hace ilusión" >
            </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
          <div class=" flex justify-center mb-6 w-4/6 lg:w-full">
            <label class="inline-flex items-center mt-3">
                <span class="ml-2 text-black px-4 text-base dodream md:text-xl">¿Pretendes ir acompañado?</span>
                <input v-model="alone" type="checkbox" class="form-checkbox h-5 w-5 text-pink-600" >
            </label>
        </div>
      </div>
      <div class="w-full flex justify-center"> 
        <button class="dodream p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300">Confirmar</button>
      </div>
      </form>     
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            name: '',
            message:'',
            alone:false,            
            isUsed:false
        }
    },
    methods: {
        ...mapActions(['onChangeNameUser','onSaveNewInvited']),
        onLoadForm() {            
            localStorage.setItem('name',this.name)
            this.onChangeNameUser(this.name)
            this.isUsed = true
            this.onSaveNewInvited({name:this.name,alone:this.alone,message:this.message})
        }
    },
    created () {
        if(localStorage.getItem('name')){
            this.name = localStorage.getItem('name')
            this.onChangeNameUser(this.name)
            this.isUsed= true;
        }
    },

}
</script>

<style>

.bg-form{
 background-image:url('../../assets/photos/optimiz/blur.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center ;
}

.slider {
  -webkit-appearance: none;
  height: 25px;
    border-radius: 50px; 
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
    border-radius: 50px; 
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
    border-radius: 50px; 
  background: #04AA6D;
  cursor: pointer;
}
</style>