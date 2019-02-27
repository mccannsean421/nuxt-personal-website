<template>
  <div>
    
    <!-- Navigation -->
    <Navigation />

    <!-- Content -->
    <div class="inner">
    <nuxt />
    </div>

    <!-- Footer -->
    <PageFooter />

  </div>
</template>

<script>

  import PageFooter from '../components/footer.vue';
  import Navigation from '../components/navigation.vue';
  
  export default {
    components: {
      PageFooter,
      Navigation,
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

.container {
  height: calc(100vh - 160px);
}

h1 {
  margin-bottom: 40px;
  font-size: 32px;
}

h2 {
  margin: 0px 0px 5px 0px;
}

.underline {
  display: inline-block;
  width: 25px;
  height: 5px;
  background-color: mediumseagreen;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}

.inner {
  max-width: 1300px;
  margin: 0px auto;
  padding: 0px 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>
