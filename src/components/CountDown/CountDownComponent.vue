<template>
  <div class="h-full w-full flex justify-center items-center  ">
    <div class="absolute z-40 bg-opacity-80" :class="getIsDay?'bg-white':'bg-black'">
        <div class="flex">
        <div class="mx-2 md:mx-8 h-20 w-20 sm:h-99p sm:w-99p md:w-32 md:h-32  xl:h-163p xl:w-163p bg-fichas rounded-full">
            <div class="w-full h-full flex justify-center items-center">
                <p class="dodream text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold neontext "
                   :class="getIsDay?'text-black':'text-white'" >{{onFormatedNumber(days)}}</p>
            </div>
            </div>
        <div class="mx-2 md:mx-8 h-20 w-20 sm:h-99p sm:w-99p md:w-32 md:h-32  xl:h-163p xl:w-163p bg-fichas rounded-full">
            <div class="w-full h-full flex justify-center items-center">
                <p class=" dodream text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold neontext "
                :class="getIsDay?'text-black':'text-white'">{{onFormatedNumber(hours)}}</p>
            </div>
            </div>
        <div class="mx-2 md:mx-8 h-20 w-20 sm:h-99p sm:w-99p md:w-32 md:h-32  xl:h-163p xl:w-163p bg-fichas rounded-full">
            <div class="w-full h-full flex justify-center items-center">
                <p class=" dodream text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold neontext "
                :class="getIsDay?'text-black':'text-white'">{{onFormatedNumber(minutes)}}</p>
            </div>
        </div>
        <div class="hidden md:block mx-2 md:mx-8 h-20 w-20 sm:h-99p sm:w-99p md:w-32 md:h-32  xl:h-163p xl:w-163p bg-fichas rounded-full">
            <div class="w-full h-full flex justify-center items-center">
                <p class=" dodream text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold neontext "
                :class="getIsDay?'text-black':'text-white'">{{onFormatedNumber(seconds)}}</p>
            </div>
        </div>
    </div>
    <div class="flex ">
        <div class="dodream mx-2 md:mx-8  w-20  sm:w-99p md:w-32  xl:w-163p text-cente text-xl md:text-3xl font-semibold  uppercase"
        :class="getIsDay?'text-black':'text-white'">Días</div>
        <div class="dodream mx-2 md:mx-8  w-20  sm:w-99p md:w-32  xl:w-163p text-cente text-xl md:text-3xl font-semibold  uppercase"
        :class="getIsDay?'text-black':'text-white'">Horas</div>
        <div class="dodream mx-2 md:mx-8  w-20  sm:w-99p md:w-32  xl:w-163p text-cente text-xl md:text-3xl font-semibold  uppercase"
        :class="getIsDay?'text-black':'text-white'">Minutos</div>
        <div class="hidden md:block dodream mx-2 md:mx-8  w-20  sm:w-99p md:w-32  xl:w-163p text-cente text-xl md:text-3xl font-semibold  uppercase"
        :class="getIsDay?'text-black':'text-white'">Segundos </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            activeinth:true,
            days: 0,
            hours:0,            
            minutes:0,
            seconds:0,
            x:setInterval
        }
    },
    methods: {
        onFormatedNumber(number) {
            if(number.toString().length <2){
                return "0" + number
            }
            return number
        },
        counterDown() {
            // Mar 13, 2021 11:00:00
            let countDownDate = new Date("jan 15, 2022 00:00:00").getTime(); 
            // let countDownDate = new Date("Oct 13, 2021 9:10:02").getTime(); 
            this.x = setInterval(() =>{  
            var now = new Date().getTime();
            var distance = countDownDate - now;
            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);  
            // console.log(this.days + "d " + this.hours + "h "+ this.minutes + "m " + this.seconds + "s ")
    }, 1000);
        }
    },
    computed: {
        ...mapGetters(['getIsDay'])
    },
    created(){
        this.counterDown()
    }
}
</script>

<style scoped>
</style>