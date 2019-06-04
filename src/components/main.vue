<template>
  <div >
    <hero></hero>
    <!-- <formulario></formulario> -->
    
  </div>
</template>

<script>
import hero from './components/hero.vue'
// import formulario from './components/contact.vue'
export default {
  data () {
    return {
      
    }
  },
  components: {
    hero: hero,
    // formulario,
  }
}
</script>

<style>
body{
  background-color: grey;
}

</style>
