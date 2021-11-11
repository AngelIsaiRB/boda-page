<template>
  <div class="z-50 fixed top-0 right-0  mt-5 mx-1 ">
    <ToggleViewVue/>
</div>
  <router-view/>
</template>
<script>
import ToggleViewVue from './components/utils/ToggleView.vue'
export default {
  components: {
    ToggleViewVue,
  },
}
</script>
<style>

</style>
