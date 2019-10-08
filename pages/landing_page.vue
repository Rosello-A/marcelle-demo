<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->
<template>
  <div id="landing-page">
    <section class="categories">NAV</section>
    <section class="categories">JUMBOTRON</section>
    <section class="categories">VISUEL+FONCTIONS</section>
    <section class="categories" id="ecoFriendlyDevEco">
      <div id="picDevEco">
        <img src="~/assets/images/pinceauDevEco.jpg"  alt/>
      </div>
      <div id="descDevEco">
        <h4 id="h4DevEco">Respect de la nature</h4>
        <h5>Transport</h5>
        <p>Limiter les dépenses en carburant et réduire les émissions de gaz polluants en utilisant
          les transports électriques.
        </p>
        <h5>Les gestes écologiques sont toujours économiques</h5>
        <p>Moins gâcher, c'est moins dépenser. On a tout à y gagner.</p>
        <h5>Préserver l'environnement, c'est bon pour la santé</h5>
        <p>Le bien-être sous la forme d'une harmonie avec son environnement naturel.</p>
      </div>
    </section>
    <section class="categories">USER REVIEW</section>
    <section class="categories">GET STARTED</section>
    <section class="categories">FOOTER</section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</script>
<style scoped>
  /* style css section Eco Friendly */
  
  #ecoFriendlyDevEco {
    display: flex;
  }

  #ecoFriendlyDevEco h4{
    color: black;
  }

  #ecoFriendlyDevEco h5{
    color: black;
  }

  #ecoFriendlyDevEco p{
    color: black;
  }

  #picDevEco {
    margin-right: 20px;
    margin-left: 20px;
    justify-content: center;
    margin-top: 20px;
  }
  #h4DevEco {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 425px) {
    #ecoFriendlyDevEco {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 420px;
    }

    #picDevEco {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }

    #descDevEco {
      display: flex;
      flex-direction: column;
      font-size: 0.9em;
      width: 100%;
      margin-left: 100px;
      margin-right: 0;
    }

    #descDevEco p, #descDevEco h4, #descDevEco h5  {
      display: flex;
      justify-content: center;
    }

    h4 {
      font-size: 1.2em;
    }

    h5 {
      font-size: 0.8em;
    }
  }
</style>
