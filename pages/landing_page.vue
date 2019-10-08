<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->
<template>
  <div id="landing-page">
    <link rel="stylesheet" href="../assets/css/landing-page.css" />
    <section class="categories prout">NAV</section>
    <section class="categories">JUMBOTRON</section>
    <section class="categories">VISUEL+FONCTIONS</section>
    <section class="categories">ECO FRIENDLY</section>
    <section class="categories">USER REVIEW</section>
    <section class="categories">GET STARTED</section>
    <section class="categories">FOOTER</section>
    
  </div>

  

</template>
<script>
export default {
  data() {
    return {
      message: 'Hello le Frioul!'
    }
  }
}
</script>
<style scoped>
:root {
  --primary-dark: #0e5da4;
  --primary-light: aliceblue;
  --white: #ffffff;
  --black: rgba(0, 0, 0, .8);
  --grey: grey;
  --border-radius: 10px;
}

#toggleBtn {
  display: none;
}

#landing-page > .categories:nth-child(odd) {
  background: var(--primary-dark);
}

#landing-page > .categories:nth-child(even) {
  background: var(--white);
}

.categories {
  display: flex;
  flex-wrap: wrap;
}

.get-started-button {
  border-radius: var(--border-radius);
  background: var(--primary-dark);
}

.get-started-button:hover {
  background: var(--primary-light);
}

</style>
