<template>
    <section class="container">
        <div class="heading">
            <h1>About</h1>
            <div class="underline"></div>
        </div>

        <!-- TL DR -->
        <div class="content-block">
            <h2> TLDR </h2>
            <div class="para-container">
                <p>
                    Hey there! I’m Cormac McCann, a front-end web develepor who makes first 
                    class web experiences.
                </p>
            </div>
        </div>

        <!-- Day Job -->
        <div class="content-block">
            <h2> My Day Job </h2>
            
            <div class="para-container">
                <p>
                    For the past three years I’ve been a front-end web developer 
                    working as part on the in house team at KAX Media in Dublin, 
                    Ireland. In that time I’ve gone from working on 
                    simple responsive static sites, to native mobile apps and even 
                    in house propritary analytical tools. Lately I’ve been afforded 
                    to oppurtunity to focus on development on rich dynamic 
                    functionality using Vue JS,
                </p>
            
                <p>
                    I for the past few years I’ve been heavily involved with 
                    Design and SEO processed. To the point where I’ve gained 
                    a substanial understanding, and been able to apply 
                    both to my development process.
                </p>
            </div>
        </div>
        

        <!-- Weekend Project -->
        <div class="content-block">
            <h2> My Weekend Project </h2>
            
            <div class="para-container">
                <p>
                    In early 2018 I started a web development blog titled: 
                    My Weekend Project. The site started as a  filler 
                    slot for my portfolio  but quickly became a place for me 
                    to experiment  and grow my skillset. Since starting the 
                    site I have become more proficitient in writing, SEO, 
                    design and of course development. My Weekend Project 
                    has also led to me starting a Coding Live Stream on Twitch, 
                    and a Youtube channel for housing all the past streams
                </p>
            </div>
        </div>

        <!-- Spare Time -->
        <div class="content-block">
            <h2>My spare Time</h2>
            
            <div class="para-container">
                <p>When I’m not in work, writing, or streaming...</p>
                <p>
                    I enjoy playing music. I’ve played in several bands &amp;
                    duets over the years am constantly spending too much money on gear.  
                    I’ve also started collecting vinyl, which again isn’t exactly a hobby 
                    that’s easy on my wallet either, but hey
                </p>
                <p>
                    I’m a pretty frequent gamer, right now Apex Legneds is my jam. 
                    I’ve built a few gaming PC’s in my time and am constantly keeping 
                    an eye on new hardware and builds!
                </p>
            </div>
        </div>

    </section>
</template>

<script>

    export default {
        head: {
            title: 'About - Coramc McCann',
            meta: [
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Hey there! I’m Cormac McCann, a front-end web develepor who makes first class web experiences.' }
            ]
        }
    }
</script>

<style>

</style>
