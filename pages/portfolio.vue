<template>
  <section class="container">
    <div class="heading">
        <h1>Portfolio</h1>
        <div class="underline"></div>
    </div>

        <!-- Bookies -->
        <div class="content-block">
            <h2>
                <a href="https://www.bookies.com" rel="nofollow">
                    Bookies.com
                </a>
            </h2>
            
            <div class="para-container">
                <p>
                    Bookies.com is an online Gambling portal that compares several 
                    sportsbooks providers across The UK and United States. Bookies 
                    is a powerful &amp; robust site, built using Vue JS
                </p>
            </div>
        </div>

        <!-- MWP -->
        <div class="content-block">
            <h2>
                <a href="https://www.myweekendproject.com" rel="nofollow">
                    MyWeekendProject.com
                </a>
            </h2>
            
            <div class="para-container">
                <p>
                    My web development blog where I write tutorials, opinion pieces 
                    and news updates for the industry. Originally built with Node JS, 
                    Express, Pug and Stylus. With all content hosted on Contentful
                </p>
            </div>
        </div>

        <!-- MWP -->
        <div class="content-block">
            <h2>
                <a href="https://www.androidslots.co.uk" rel="nofollow">
                    Android Slots
                </a>        
            </h2>
            
            <div class="para-container">
                <p>
                   The little sister site of Gambling.com, CasinoSource is a tool to compare the 
                   best online casinos. Currently operating in 14 countries!
                </p>
            </div>
        </div>

        <!-- MWP -->
        <div class="content-block">
            <h2>
                <a href="https://www.gambling.com" rel="nofollow">
                    Gambling.com
                </a>
            </h2>
            
            <div class="para-container">
                <p>
                    Gambling.com is a comparison site for the best online Gambling sites 
                    and games around the world. Currently operating across 11 countires, 
                    in 6 languages
                </p>
            </div>
        </div>

        <!-- MWP -->
        <div class="content-block">
            <h2>
                <a href="https://www.casinosource.co.uk" rel="nofollow">
                    Casino Source
                </a>
            </h2>
            
            <div class="para-container">
                <p>
                   The little sister site of Gambling.com, CasinoSource is a tool to compare the 
                   best online casinos. Currently operating in 14 countries!
                </p>
            </div>
        </div>


  </section>
</template>

<script>
export default {
    head: {
        title: 'Portfolio - Cormac McCann',
        meta: [
            { 
                hid: 'description', 
                name: 'description', 
                content: 'Some of my personal and professional projects.' }
        ]
    },
}
</script>

<style scoped>
    h2 > a {
        color: var(--primary-color);
    }
</style>
