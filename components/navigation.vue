<template>
    <header class="global-navigation">
        

        <!-- Home Link -->
        <div class="home-logo">
            
            
            <!-- Menu -->
            <nav class="global-navigation__menu">
                <ul>
                    <li v-for="(item, index) in navItems" :key="index" >
                        <nuxt-link :to="item.path">
                            {{ item.text }}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            
            <nuxt-link to="/">
                CM
            </nuxt-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Navigation',
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

    .global-navigation {
        display: grid;
        justify-items: end;

    }

    .home-logo {
        display: grid;
        grid-template-columns: auto auto;
    }

    .home-logo > a {
        color: #50D67E;
        font-weight: bold;
        font-size: 32px;
    }

    .global-navigation__menu {
        width: auto;
        overflow: hidden;
    }

    .global-navigation__menu > ul > li {
        display: inline-block;
        margin: 15px;

    }

</style>
