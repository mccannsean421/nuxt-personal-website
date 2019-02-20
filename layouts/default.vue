<template>
  <div>
    
    <!-- Content -->
    <nuxt />

    <!-- Footer -->
    <PageFooter />

  </div>
</template>

<script>

  import PageFooter from '../components/footer.vue';
  
  export default {
    components: {
      PageFooter
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
  overflow-x: hidden;
}

  .content-container {
    height: calc(100vh - 160px);
    display: grid;
    align-items: center;
  }

a {
  text-decoration: none;
}

.inner {
  max-width: 1300px;
  margin: 0px auto;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>
