<template>
    <header class="global-navigation">
        

        <!-- Home Link -->
        <div class="/">
            <nuxt-link to="/">
                CM
            </nuxt-link>
        </div>

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


        <!-- Contact -->
        <div class="global-navigation__contact">
            <nuxt-link to="/contact">Contact</nuxt-link>
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
                ]
            }
        },
        created: function() {
            console.log(this.navItems)
        }
    }
</script>

<style scoped>
    .global-navigation {
        height: 80px;
        background-color: #202225;
        display: grid;
        grid-template: 'nav-home nav-menu nav-contact' 1fr / 80px 1fr 1fr;
        align-items: center;
    }

    .global-navigation__conact {
        display: grid;
        justify-items: end;
    }

     .global-navigation__contact > a {
         padding: 15px;
     }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    ul > li {
        display: inline-block;
        padding: 15px;
    }

    a {
        display: block;
        color: #e6aa68;
        text-decoration: none;
        font-size: 18px;
        text-transform: uppercase;
    }

</style>
