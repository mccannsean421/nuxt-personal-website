<template>
    <!-- In body nav -->
    <nav class="in-body-nav">
        <ul>
            <li v-for="(item, index) in navItems" :key="index" >
                <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
            </li>
        </ul> 
    </nav>
</template>

<script>
    export default {
        name: 'InContentNav',
        data: function() {
            return {
                navItems: [
                    {path:'/about', text: 'About'},
                    {path:'/resume', text: 'Resume'},
                    {path:'/portfolio', text: 'Portfolio'},
                    {path:'/contact', text: 'Contact'},
                ]
            }
        },
    }
</script>

<style scoped>
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  @media screen and (max-width: 767px) {
      ul {
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
      }
  }

  a {
    font-size: 22px;
    font-weight: bold;  
  }

</style>
