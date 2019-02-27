<template>
    <header class="global-navigation inner">
        <!-- Home Link -->
        <div class="home-logo">
            <nuxt-link to="/">
                CM
            </nuxt-link>
        </div>
            
        <!-- Hamburger -->
        <div class="hamburger">
            <button @click="toggleNav">menu</button>
        </div>

        <!-- Menu -->
        <nav 
            class="global-navigation__menu"
            :class="{'global-navigation__menu--toggled': navToggled}"
        >
            <ul>
                <li v-for="(item, index) in navItems" :key="index" >
                    <nuxt-link :to="item.path">
                        {{ item.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
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
                ],
                navToggled: false,
            }
        },
        methods: {
            toggleNav: function() {
                this.navToggled = !this.navToggled;
            }
        }
    }
</script>

<style scoped>

    .global-navigation {
        display: grid;
        grid-template-columns: 1fr 1fr;
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

    .hamburger {
        display: grid;
        justify-content: end;
    }

    @media screen and (min-width: 767px) {
        .hamburger {
            display: none;
        }
    }

    .global-navigation__menu {
        display: grid;
        justify-content: end;
    }

    .global-navigation__menu > ul > li {
        display: inline-block;
        margin: 15px;
    }





    .global-navigation__menu > ul > li > a {
        color: #fff;
    }

    .global-navigation__menu > ul > li > a.active-path {
        color: mediumseagreen;
    }


    @media screen and (max-width: 766px) {
        .global-navigation__menu {
            position: absolute;
            right: 100%;
            background-color: mediumseagreen;
            top: 80px;
        }

        .global-navigation__menu > ul > li {
            display: block;
        }

        .global-navigation__menu--toggled {
            right: 0%;
            margin: 0px 15px;
        }
    }

</style>
