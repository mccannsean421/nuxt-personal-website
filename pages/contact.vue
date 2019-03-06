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
  components: {
    ContactForm,
  }
}
</script>

<style>


</style>
