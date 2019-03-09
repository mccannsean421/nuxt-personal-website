<template>

  <section class="container container--home">
    <div class="billboard">
      <h1>Cormac McCann</h1>
      <p class="billboard__rundown">Developer - Blogger - Streamer</p>
    </div>
  </section>
  
</template>

<script>

import InContentNav from '../components/in-content-nav.vue';

export default {
  head: {
      title: 'Frontend Web Developer based in Dublin - Cormac McCann',
      meta: [
          { 
              hid: 'description', 
              name: 'description', 
              content: "My name Cormac and I'm a front-end web developer living and working in Dublin, Ireland" }
      ]
  },
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
    height: 100%;
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

  @media screen and (max-width: 767px) {
    
    .billboard {
      
      text-align: center;
    }

    .billboard > h1 {
      font-size: 28px;
    }

    .billboard > p {
      font-size: 18px;
    }
  }


  .billboard__rundown {
    color: #989898;
    font-weight: bold;
    font-size: 24px;
  }

</style>
