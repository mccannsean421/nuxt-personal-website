<template>
  <div class="inner">
    
    <!-- Header -->
    <header>
        <div>
          <h1>Cormac McCann</h1>
        </div>
      
        <div class="slogan">
          Developer, Streamer, Blogger
        </div>
    </header>

    
    <div class="content-container">
      <InContentNav />
    </div>
  
  </div>
</template>

<script>

import InContentNav from '../components/in-content-nav.vue';

export default {
  components: {
    InContentNav,
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

  h1 {
    margin: 0;
    font-size: 28px;
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
