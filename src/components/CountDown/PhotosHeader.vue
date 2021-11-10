<template>
  <div id="canvaImg" class="absolute top-0 w-screen h-screen ">
      <div id="imgee" class="image"></div>
  </div> 
</template>

<script>
export default {
    mounted () {
       console.log(document.querySelector('#canvaImg').clientHeight)
       console.log(document.querySelector('#canvaImg').clientWidth)
       document.querySelector("#imgee").style.left = "200px"
    },
}
</script>

<style>
.image {
  position:absolute;
  height: 200px;
  width: 200px;
  background:aqua;
}
</style>