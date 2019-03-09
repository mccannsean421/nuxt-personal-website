<template>
  <section class="container">
      <div class="heading">
        <h1>Contact</h1>
        <div class="underline"></div>
      </div>

      <ContactForm />
  </section>
</template>

<script>

import ContactForm from './../components/contact-form.vue';

export default {
  head: {
      title: 'Contact - Cormac McCann',
      meta: [
          { 
              hid: 'description', 
              name: 'description', 
              content: 'If you want to get in touch, feel free to contact me.' }
      ]
  },
  components: {
    ContactForm,
  }
}
</script>

<style>


</style>
