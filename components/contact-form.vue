<template>
    <div>
        <form name="contact" method="POST" data-netlify="true">
            <div class="form-group">
                <input type="text" name="email" placeholder="Email" />
            </div>

            <div class="form-group">
                <select name="subject">
                    <option>Just Saying Hi</option>
                    <option>Consultation</option>
                    <option>Problem with the site</option>
                    <option>Criticism</option>
                </select>
            </div>

            <div class="form-group">
                <textarea placeholder="Your message">

                </textarea>
            </div>

            <div class="form-group">
                <input class="btn btn--select" type="submit" name="submit" />
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: 'ContactForm'
    }
</script>

<style scoped>
  input, 
  select, 
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--primary-color);
    padding: 1em;
    font-size: 22px;
    color: #fff;
    outline: none;
    width: 60%;
  }

  select > option {
      color: #202225;
  }

  .form-group {
      margin: 40px 0px;
  }

  .btn {
      border-radius: 4px;
      background-color: var(--primary-color);
      width: 120px;
      padding: .5em 1em;
      cursor: pointer; 
      border: none;
  }

  .btn:hover {
      background-color: #ca670b;
  }

  /* Desktop rules */
  @media screen and ( max-width: 767px ) {
        input, 
        select, 
        textarea {
            width: 90%;
        }
  }

</style>

