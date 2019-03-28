<template>
    <header 
        class="global-navigation"
        :class="{ 'global-navigation--scrolled': scrolling }"    
    >
        <!-- Home Link -->
        <div class="home-logo">
            <nuxt-link to="/">
                CM
            </nuxt-link>
        </div>
            
        <!-- Hamburger -->
        <div class="hamburger">
            <button 
                @click="toggleNav"
                :class="{ 'menu-open': navToggled }"
            >
                <img class="icon icon--hamburger" src="/hamburger.svg" alt="hamburger" />
                <img class="icon icon--close" src="/close.svg" alt="hamburger" />
            </button>
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
                        <div class="nav-underline"></div>
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
                scrolling: false,
            }
        },
        created: function() {
            var self = this;

            if(process.client) {
                window.onscroll = function() {

                    if((window.pageYOffset || document.documentElement.scrollTop) > 60) {
                        console.log('!!!!!!!!');
                        self.scrolling = true;
                    } else {
                        self.scrolling = false;
                    }
                }
            }
        },
        methods: {
            toggleNav: function() {
                this.navToggled = !this.navToggled;
            }
        },
        watch: {
            $route: function() {
                this.navToggled = false;
            },
        }
    }
</script>

<style scoped>

    .global-navigation {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        padding: 15px 0px;
    }

    .home-logo {
        display: grid;
        grid-template-columns: auto auto;
    }

    .home-logo > a {
        color: var(--primary-color);
        font-weight: bold;
        font-size: 32px;
    }

    .hamburger {
        display: grid;
        justify-content: end;
    }

    .hamburger > button {
        background-color: transparent;
        border: none;
        padding: 0;
    }

    .hamburger > button > .icon {
        height: auto;
        width: 30px;
    }

    .icon--close {
        display: none;
    }

    .menu-open > .icon--hamburger {
        display: none;

    }

    .menu-open > .icon--close {
        display: block;
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
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }

    .nav-underline {
        width: 0px;
        height: 5px;
        background-color: var(--primary-color);
        position: absolute;
        margin: 0 auto;
        transition: width .2s cubic-bezier(0.51, -0.38, 0.68, 1.86);
        margin-top: 5px;
    }

    a.active-path > .nav-underline {
       width: 40px;
    }

    /* Mobile Styling */
    @media screen and (max-width: 766px) {
        .global-navigation {
            position: sticky;
            top: 0;
            background-color: var(--shark);
            margin: 0px -15px;
            padding: 15px 15px 0px 15px;
        }

        .nav-underline { 
            display: none;
        }

        .global-navigation--scrolled {
            box-shadow: 0px 0px 15px #000;
        }
        
        .global-navigation__menu {
            position: absolute;
            display: none;
            background-color: var(--primary-color);
            top: 60px;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: -5px 5px 10px #191919;
        }

        .global-navigation__menu > ul > li {
            display: block;
        }

        .global-navigation__menu--toggled {
            right: 0%;
            display: block;
            margin: 0px 15px;
            animation: POP-IN;
            animation-iteration-count: 1;
            animation-duration: .2s;
            animation-timing-function: ease-out;
        }

        @keyframes POP-IN {
            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(1.1);
            }
        }

        .global-navigation__menu > ul > li > a.active-path {
            color: var(--shark);
        }
    }

</style>
