<template>
  <Heading></Heading>
  <router-view></router-view>
  <Footing></Footing>
</template>

<script>
import Heading from '@/components/Heading.vue';
import Footing from '@/components/Footing.vue';


export default {
  name: 'App',
  components: {
    Heading, Footing
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss"></style>
