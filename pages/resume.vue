<template>
    <section class="container">
        <div class="heading">
            <h1>Resume</h1>
            <div class="underline"></div>
        </div>

        <!-- MWP -->
        <div class="content-block">
            <h2> Owner &amp; Fullstack Developer, My Weekend Project </h2>
            <div class="date">
              <em><time >2018 - Present</time></em>
            </div>
            
            <div class="para-container">
                <p>
                    Design and development of website. Creating tutorials and blog posts for 
                    educational purposes. Managing social media. Creating media assets such 
                    as blog thumbnails and icons. SEO management and analysis.
                </p>
            </div>
        </div>

        <!-- Day Job -->
        <div class="content-block">
            <h2> Front-end Developer, KAX Media </h2>
            <div class="date">
              <em><time >2016 - Present</time></em>
            </div>
            
            <div class="para-container">
                <p>
                    Interfaced with the design team to rapidly convert designs 
                    into responsive templates. Oversaw deployment of 
                    multi-lingual/international sites. Developed native applications 
                    using GoNative and the existing web stack. 
                    Developed internal insights tools using the Laravel framework. 
                    Researched new technologies to evaluate their potential use in 
                    upcoming projects.
                </p>
            </div>
        </div>

        <!-- Freelance -->
        <div class="content-block">
            <h2>Developer / Designer, Freelance</h2>
            <div class="date">
              <em><time >2015 - 2016</time></em>
            </div>
            
            <div class="para-container">
                <p>
                    Liasing with clients tio determine needs and functionality. 
                    Creating responsive templates and prototypes 
                    for client review. Managing Domains, configuring hosting.
                </p>
            </div>
        </div>

        <!-- Internship -->
        <div class="content-block">
            <h2>Backend Developer Intern, Couchjumping</h2>
            <div class="date">
              <em><time >August 2015 - December 2015</time></em>
            </div>
            
            <div class="para-container">
                <p>
                    Liasing with clients tio determine needs and functionality. 
                    Creating responsive templates and prototypes 
                    for client review. Managing Domains, configuring hosting.
                </p>
            </div>
        </div>

    </section>
</template>

<script>


export default {
        head: {
            title: 'Resume - Coramc McCann',
            meta: [
                { 
                    hid: 'description', 
                    name: 'description', 
                    content: 'My Resume, a sumarry of my professional experience as a front end web developer.' }
            ]
        },
  transition: {
    name: 'bounce',
  },
}
</script>

<style>

</style>
