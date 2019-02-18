<template>
  <div>
    
    <!-- Navigation -->
    <Navigation />
    
    <!-- Content -->
    <nuxt />

    <!-- Footer -->

  </div>
</template>

<script>
  
  import Navigation from '../components/navigation.vue';
  
  export default {
    components: {
      Navigation
    }
  }
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0px;
  background-color: #202225;
  color: #eff6ee;
}

.inner {
  max-width: 1300px;
  padding: 40px 15px;
  margin: 0px auto;
}

</style>
