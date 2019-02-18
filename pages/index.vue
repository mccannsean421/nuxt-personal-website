<template>
  <div class="inner">
    <div class="billboard">
      <div class="billboard__bio">
        <h1>Cormac McCann</h1>
        <p>Hi, my name's Cormac and I'm an almost full stack developer from Dublin, Ireland</p>
      </div>

      <div class="billboard__profile-pic">
        <img src="/profile.jpg" alt="Profile" />
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>

  .billboard {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    padding: 40px 0px;
  }

  .billboard__profile-pic {
    justify-content: center;
    display: grid;
  }

  .billboard__profile-pic > img {
    height: 300px;
    max-width: 300px;
    border-radius: 50em;
  }

</style>
