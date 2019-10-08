<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->

<template>
  <div id="landing-page">
    <link rel="stylesheet" href="../assets/css/landing-page.css" />
    <section class="categories prout">NAV</section>
    <section class="categories">JUMBOTRON</section>
    <section class="categories">VISUEL+FONCTIONS</section>
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
    <section class="categories">GET STARTED</section>
    <section class="categories">FOOTER</section>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>
:root {
  --primary-dark: #0e5da4;
  --primary-light: aliceblue;
  --white: #ffffff;
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
.get-started-button {
  border-radius: var(--border-radius);
  background: var(--primary-dark);
}
.get-started-button:hover {
  background: var(--primary-light);
}

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
</style>









