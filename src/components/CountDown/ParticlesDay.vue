<template>
  <div class="">
      <Particles
                id="tsparticles"
                :options='data'
        /></div>  
</template>

<script>
export default {
data() {
    return {
        data: {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 868.0624057955
      }
    },
    "color": {
      "value": "#efb810"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.45770563214671817,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 55.24033491425909,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 315.65905665290904,
      "color": "#ffffff",
      "opacity": 0.14993805191013182,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1341.5509907748635,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "enable": true,
          "force": 100,
          "smooth": 20
        }
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
    }
},
}
</script>

<style>

</style>