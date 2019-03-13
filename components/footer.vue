<template>
    <footer class="">
        <p>
            Copyright 2019 Coramc McCann. Built with
            <a href="https://nuxtjs.org/" rel="nofollow" target="_blank">NuxtJS</a> 
        </p>

        <div class="social-links">
            <ul>
                <li><a href="https://github.com/mccannsean421" target="_blank" rel="nofollow">Github</a></li>
                <li><a href="https://ie.linkedin.com/in/cormac-mccann-70052283" target="_blank" rel="nofollow">Linkedin</a></li>
                <li><a href="https://twitter.com/FluffykinsJS" target="_blank" rel="nofollow">Twitter</a></li>
            </ul>

        </div>
    </footer>
</template>

<script>
    export default {
        name: 'PageFooter',
    }
</script>

<style scoped>
    footer {
        color: #989898;
        align-items: center;
        text-align: center;
        font-size: 12px;
        padding-bottom: 15px;
    }

    a {
        color: var(--primary-color);
    }

    .social-links > ul > li {
        display: inline-block;
    }

    .social-links > ul > li:after {
        content: '-';
        padding: 0px 10px;
    }

    .social-links > ul > li:last-child:after {
        content: '';
    }

    /* Mobile Styles */
    @media screen and (min-width: 767px) {
        footer {
            grid-template: 'disclaimer social-links' auto / 1fr 1fr;
            display: grid;
            text-align: left;
            font-size: 14px;
            padding-bottom: 0px;
        }
        .social-links {
            display: grid;
            justify-items: end;
        }
    }
</style>
