<template>
  <div class="global-container inner" :style="{ '--primary-color': primaryPageColor }">
    
    <!-- Navigation -->
    <Navigation />

    <!-- Content -->
    <div>
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
    head: {
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    },  
    
    components: {
      PageFooter,
      Navigation,
    },
    mounted: function() {
      console.log(this.$route.path)
    },
    computed: {
      primaryPageColor: function() {
        switch(this.$route.path) {
          case '/about':
            return '#ab305e';
            break;
          case '/resume':
            return '#456AEF';
            break;
          case '/portfolio':
            return '#AB50D6';
            break;
          case '/contact':
            return '#FB8C24';
            break;
          default:
            return 'mediumseagreen';
        }
      }
    },
    watch: {
      $route () {
        console.log(this.$route.path)
      }
    },
  }
</script>

<style>

:root {
  --primary-color: mediumseagreen;
  --shark: #202225;
}

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
  background-color: var(--shark);
  color: #eff6ee;
  overflow-x: hidden;
}

.highlight {
  color: var(--primary-color);
}

.global-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.container {
  padding-top: 40px;
}

h1 {
  font-size: 32px;
  text-transform: uppercase;
  margin: 0px;
}

h2 {
  margin: 0px 0px 40px 0px;
  color: var(--primary-color);
}

.heading {
  margin-bottom: 40px;
}

.underline {
  display: inline-block;
  width: 25px;
  height: 5px;
  background-color: var(--primary-color);
}

.date {
  margin-bottom: 5px;
}

  input, 
  select, 
  textarea, 
  button {

    outline: none;
  }

time {
  color: #717171;
  font-weight: bold;
}

a {
  text-decoration: none;
}

.inner {
  max-width: 1120px;
  margin: 0px auto;
  padding: 0px 15px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.content-block {
  margin: 40px 0px;
}

.para-container > p {
  margin: 0px 0px 20px 0px;
  font-size: 22px;
  line-height: 1.6;
}

</style>
