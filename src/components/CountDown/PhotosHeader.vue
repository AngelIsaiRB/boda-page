<template>
  <div id="canvaImg" class="absolute top-0 w-screen h-screen ">
      <div id="imge1" class="image"></div>
      <div id="imge2" class="image"></div>
      <div id="imge3" class="image"></div>
      <div id="imge4" class="image"></div>
      <div id="imge5" class="image"></div>
      <div id="imge6" class="image"></div>
      <div id="imge7" class="image"></div>
      <div id="imge8" class="image"></div>
      <div id="imge9" class="image"></div>
      <div id="imge10" class="image"></div>
      <div id="imge11" class="image"></div>
      <div id="imge12" class="image"></div>
      <div id="imge13" class="image"></div>
      <div id="imge14" class="image"></div>
      <div id="imge15" class="image"></div>
      <div id="imge16" class="image"></div>
      <div id="imge17" class="image"></div>
      <div id="imge18" class="image"></div>
      <div id="imge19" class="image"></div>
      <div id="imge20" class="image"></div>
  </div> 
</template>

<script>
import gsap from 'gsap'
export default {
    data() {
        return {
            screenW: 200,
            screenH:200,
            lastFade:0,
            completeo:false,
            completet:false
        }
    },
    methods: {
        runFadeOut() {
           let img =Math.floor(Math.random() * ( 1 - 20) + 20);
           let timeOne =Math.floor(Math.random() * ( 1 - 3) + 3);
           let timetw =Math.floor(Math.random() * ( 1 - 3) + 3);
           let img2 =Math.floor(Math.random() * ( 1 - 20) + 20);
           if(img===this.lastFade || img2 === img){
               return this.runFadeOut()
           }
           this.lastFade = img
            gsap.to(`#imge${img}`, {
                duration: timeOne,
                 opacity: 0,
                 onComplete:()=>{this.runFadeIn(img,1,timeOne)}
            });
            gsap.to(`#imge${img2}`, {
                duration: timetw,
                 opacity: 0,
                 onComplete:()=>{this.runFadeIn(img2,2,timetw)}
            });
        },
        runFadeIn(id,position,time){
            gsap.to(`#imge${id}`, {
                onStart:()=>{
                    let imagen = document.querySelector(`#imge${id}`)
                    this.changePosition(imagen)
                },
                duration: time,
                 opacity: 0.8,
                 onComplete:()=>{this.reLauch(position)}
            });
        },
        reLauch(position){
            if(position===1){
                this.completeo=true
            }else{
                this.completet=true
                }
            if(this.completeo && this.completet){
                this.completet=false
                this.completeo=false
                this.runFadeOut()
            }
        },
        changePosition(imagen){
           let  x =   Math.floor(Math.random() * ( this.screenW - 0) + 0);
           let  y =  Math.floor( Math.random() * ( this.screenH - 0) + 0);
           imagen.style.left = `${x}px`
          imagen.style.top = `${y}px`;
        }

    },
    mounted () {
       this.screenH =  document.querySelector('#canvaImg').clientHeight-200
       this.screenW =  document.querySelector('#canvaImg').clientWidth-150
       for (let index = 1; index <20; index++) {
           let imagen = document.querySelector(`#imge${index}`)
          this.changePosition(imagen)
          imagen.style.backgroundImage =`url("./img/pequenas/f${index}.jpg")`;                       
       }
       this.runFadeOut()
       
    },
}
</script>

<style>
.image {
  position:absolute;
  opacity:0.8;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
  width: 150px;
}
</style>