<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->

<template>
  <div id="landing-page">
    <link rel="stylesheet" href="../assets/css/landing-page.css" />
    <section class="categories prout">NAV</section>
    <section class="categories">JUMBOTRON</section>
    <section class="categories">VISUEL+FONCTIONS</section>
<<<<<<< HEAD
    <section class="categories">ECO FRIENDLY</section>
    <section class="categories">
      <!-- USER REVIEW -->

      <div id="header-section">
        <h3 class="title small">Avis des utilisateurs</h3>
      </div>
      <div class="textwidget custom-html-widget">
        4.7 étoiles
        <span class="dot">•</span>
        200 000 avis
      </div>

      <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire4.png">
          <blockquote>"Je suis ULTRA FAN de l’appli !"</blockquote>
          <cite>
            <span class="client-name">Hissa</span>
          </cite>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire2.png">
          <blockquote>"Je roule vert !"</blockquote>
          <cite>
            <span class="client-name">Jean</span>
          </cite>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire.png">
          <blockquote>"Elle est géniale, pratique, parfaite et fonctionnelle."</blockquote>
          <cite>
            <span class="client-name">Pauline</span>
          </cite>
        </b-carousel-slide>
        <!--
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=55">
            <blockquote>Je roule vert !</blockquote>
            <cite>
              <span class="client-name">Jean</span>
            </cite>
          </b-carousel-slide>
        -->
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire3.png">
          <blockquote>"Je trouve cette application stupéfiante !"</blockquote>
          <cite>
            <span class="client-name">Michel</span>
          </cite>
        </b-carousel-slide>
      </b-carousel>

      <!--    <p class="mt-4">
        Slide #: {{ slide }}
        <br />
        Sliding: {{ sliding }}
      </p>
      -->
    </section>
=======
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
>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
    <section class="categories">GET STARTED</section>
    <section class="categories">FOOTER</section>
    
  </div>


</template>

<script>
<<<<<<< HEAD
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
=======
<<<<<<< HEAD
  export default {
    data() {
      return {
        message: ''
      }
=======
export default {
  data() {
    return {
      message: 'Hello le Frioul!'
>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
    }
  }
</script>

<style scoped>
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
:root {
  --primary-dark: #0e5da4;
  --primary-light: aliceblue;
  --white: #ffffff;
<<<<<<< HEAD
  --black: rgba(0, 0, 0, 0.8);
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
  /*display: flex;
  flex-wrap: wrap;*/
}
=======
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

>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
.get-started-button {
  border-radius: var(--border-radius);
  background: var(--primary-dark);
}
<<<<<<< HEAD
=======

>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
.get-started-button:hover {
  background: var(--primary-light);
}

<<<<<<< HEAD
.header-section {
  color: var(--white);
}

.title.small {
  text-align: center;
  padding-top: 20px;
  font-size: 1em;
}

.textwidget.custom-html-widget {
  text-align: center;
  padding-top: 20px;
  font-size: 1.5em;
}

.stars {
  text-align: center;
  padding-top: 20px;
  color: #ffeb3b;
  font-size: 2em;
}

i:last-child {
  color: #b1acac;
}
=======
>>>>>>> 6034b66699d0e4717b604e89c05dbd1d30d584c6
</style>









