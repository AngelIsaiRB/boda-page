<template>
  <div>
    <initialViewVue/>  
     <WhereComponentVue/>
    <FormComponentVue/>
     <GalleryPComponentVue/>
     <endComponentVue/>
  </div>
</template>

<script>
import endComponentVue from '../components/bay/endComponent.vue'
import initialViewVue from '../components/CountDown/initialView.vue'
import FormComponentVue from '../components/Form/FormComponent.vue'
import GalleryPComponentVue from '../components/galery/GalleryPComponent.vue'
import WhereComponentVue from '../components/info/WhereComponent.vue'
export default {
  name: 'Home',
  components: {
    initialViewVue,
    WhereComponentVue,
    GalleryPComponentVue,
    FormComponentVue,
    endComponentVue
  }
}
</script>
<style >
</style>
