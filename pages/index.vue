<template>

  <section class="container container--home">
    <div>
      <h1>Cormac McCann</h1>
      <p>The story of my life.</p>
    </div>
  </section>
  
</template>

<script>

import InContentNav from '../components/in-content-nav.vue';

export default {
  components: {
    
  }
}
</script>

<style scoped>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 80px;
  }

  .container--home {
    display: grid;
    align-items: center;
  }

  h1 {
    margin: 0;
    font-size: 5vw;
  }

  .slogan {
    display: grid;
    justify-content: end;
  }

  a {
    color: #fff;
    text-transform: uppercase;
  }

</style>
