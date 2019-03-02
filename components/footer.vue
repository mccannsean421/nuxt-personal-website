<template>
    <footer>
        <p>
            Copyright 2019 Coramc McCann. Built with
            <a href="https://nuxtjs.org/" rel="nofollow" target="_blank">NuxtJS</a> 
        </p>
    </footer>
</template>

<script>
    export default {
        name: 'PageFooter',
    }
</script>

<style scoped>
    footer {
        text-align: center;
        color: #e9e9e9;
        height: 80px;
        display: grid;
        align-items: center;
    }

    a {
        color: var(--primary-color);
    }
</style>
