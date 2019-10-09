<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->

<template>
  <div id="landing-page">
    <link rel="stylesheet" href="../assets/css/landing-page.css" />
    <section id="jumbotronlp" class="categories">
      <div id="nav">
        <img src="~/assets/images/grandmother_logo2.png" alt="visuel de l'application en service" />
        <h1>MARCELLE - MOBI</h1>
      </div>
      <div id="imgjumbo">
        <img src="~/assets/images/iPhone-11InUse.png" alt="visuel de l'application en service" />
      </div>

      <div id="description">
        <h2>Faites les meilleurs choix pour vous déplacer</h2>
        <p></p>
      </div>
    </section>
    <section id="features" class="categories">
      <div id="features-slider">
        <img src="~/assets/images/features/ihoneMockUp.png" />
        <ul>
          <li id="features-slider-1">
            <img src="~/assets/images/features/feature1.png" />
          </li>
          <li>
            <img src="~/assets/images/features/feature2.png" />
          </li>
          <li>
            <img src="~/assets/images/features/feature3.png" />
          </li>
          <li>
            <img src="~/assets/images/features/feature4.png" />
          </li>
        </ul>
      </div>

      <div>
        <ul id="features-list">
          <li class="features">
            <div id="navbar-map-feature" class="click-zone" @click="showFeature"></div>
            <img src="~/assets/images/navbarMap.svg" />
          </li>
          <li class="features">
            <div id="elec-car-feature" class="click-zone" @click="showFeature"></div>
            <img src="~/assets/images/elec_car.svg" />
          </li>
          <li class="features">
            <div id="navbar-marius-feature" class="click-zone" @click="showFeature"></div>
            <img src="~/assets/images/navbarMarius.svg" />
          </li>
          <li class="features">
            <div id="navbar-blog-feature" class="click-zone" @click="showFeature"></div>
            <img src="~/assets/images/navbarBlog.svg" />
          </li>
        </ul>
        <ul id="features-descriptions-list">
          <li
            id="navbar-map-feature-description"
            class="features-descriptions"
          >Trouvez un véhicule disponible à proximité : Vélo, trotinnette éléctrique, voiture en libre service, transports en communs. Filtrez et choisissez votre mode de transport favori.</li>
          <li
            id="elec-car-feature-description"
            class="features-descriptions"
          >Vérifiez les bornes de rechargements libre autour de vous, remplissez les bateries de votre voiture électrique et roulez en toute tranquillité</li>
          <li
            id="navbar-marius-feature-description"
            class="features-descriptions"
          >Demandez conseil à Marcelle et Marius, vos assistants virtuel. Ils sauront vous aidez afin de rendre vos trajets toujours plus propres</li>
          <li
            id="navbar-blog-feature-description"
            class="features-descriptions"
          >Devenez toujours plus éco-responsable en participant aux évenement et activité sportive de votre région. Vous serez ensuite apte à prendre le vélo pour tous vos déplacement.</li>
        </ul>
      </div>
    </section>
    <section class="categories-user-review">
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
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire4Blue.png">
          <blockquote>"Je suis ULTRA FAN de l’appli !"</blockquote>
          <cite>
            <span class="client-name">Hissa</span>
          </cite>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire2Blue.png">
          <blockquote>"Je roule vert !"</blockquote>
          <cite>
            <span class="client-name">Jean</span>
          </cite>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaireBlue.png">
          <blockquote>"Elle est géniale, pratique, parfaite et fonctionnelle."</blockquote>
          <cite>
            <span class="client-name">Pauline</span>
          </cite>
        </b-carousel-slide>
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-src="~/assets/images/Photo-commentaire3Blue.png">
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

    <section class="categories" id="ecoFriendlyDevEco">
      <div id="picDevEco">
        <img src="~/assets/images/E-Mobility.png" width="600" height="270" alt />
      </div>
      <div id="descDevEco">
        <h4 id="h4DevEco">Respect de la nature</h4>
        <h5>Transport</h5>
        <p>
          Limiter les dépenses en carburant et réduire les émissions de gaz polluants en utilisant
          les transports électriques.
        </p>
        <h5>Les gestes écologiques sont toujours économiques</h5>
        <p>Moins gâcher, c'est moins dépenser. On a tout à y gagner.</p>
        <h5>Préserver l'environnement, c'est bon pour la santé</h5>
        <p>Le bien-être sous la forme d'une harmonie avec son environnement naturel.</p>
      </div>
    </section>

    <section id="getStart" class="categories">
      <h2>Lancez-vous !</h2>
      <a
        href="/map"
        class="btn btn-dark-blue btn-primary rounded-pill"
        target="_self"
      >Trouver un moyen de transport</a>
      <hr />
    </section>
    <footer id="footer" class="categories">
      <div id="logoFooter">
        <img src="~/assets/images/grandmother_logo2.png" alt="logo marcelle-mobi" />
      </div>
      <div>
        <h4>A propos</h4>
        <a href="#">Question?</a>
        <a href="#">Mentions légales</a>
      </div>

      <div>
        <h4>Nous contacter</h4>
        <a href="#">Presse</a>
        <a href="#">Signalement</a>
      </div>
    </footer>
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
    },
    showFeature(element) {
      const descriptions = document.getElementsByClassName(
        'features-descriptions'
      )

      descriptions[0].style.opacity = '0'
      descriptions[1].style.opacity = '0'
      descriptions[2].style.opacity = '0'
      descriptions[3].style.opacity = '0'
      const id = element.originalTarget.id + '-description'
      const theElement = document.getElementById(id)
      theElement.style.opacity = '1'

      const firstSlide = document.getElementById('features-slider-1')

      switch (element.originalTarget.id) {
        case 'navbar-map-feature':
          firstSlide.style.marginLeft = '0%'
          break
        case 'elec-car-feature':
          firstSlide.style.marginLeft = '-100%'
          break
        case 'navbar-marius-feature':
          firstSlide.style.marginLeft = '-200%'
          break
        case 'navbar-blog-feature':
          firstSlide.style.marginLeft = '-300%'
          break
      }
    }
  }
}
// Features
// features
</script>

<style scoped>
:root {
  --primary-dark: #0e5da4;
  --primary-light: #eff7ff;
  --white: #ffffff;
  --black: rgba(0, 0, 0, 0.8);
  --grey: grey;
  --border-radius: 10px;
  --black: rgba(0, 0, 0, 0.8);
  --grey: grey;
  --border-radius: 10px;
}

#toggleBtn {
  display: none;
}
#landing-page > .categories:nth-child(even) {
  background: var(--primary-dark);
}
#landing-page > .categories:nth-child(odd) {
  background: var(--white);
}

.categories {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}

.get-started-button {
  border-radius: var(--border-radius);
  background: var(--primary-dark);
}
.get-started-button:hover {
  background: var(--primary-light);
}
/* style css section Eco Friendly */

#ecoFriendlyDevEco {
  display: flex;
}

#ecoFriendlyDevEco h4 {
  color: var(--primary-dark);
}

#ecoFriendlyDevEco h5 {
  color: black;
}

#ecoFriendlyDevEco p {
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

  img {
    width: 100%;
    margin-left: 10px;
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
    width: 400px;
    margin-left: 10px;
    margin-right: 5px;
  }

  #descDevEco p,
  #descDevEco h4,
  #descDevEco h5 {
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

/**
* FEATURES
*/

#features {
  justify-content: space-between;
}

#features > div:first-child {
  width: 100%;
  left: 50%;
  position: relative;
  width: calc(1242px / 6);
  margin-bottom: 2rem;
  overflow: hidden;
  transform: translate(-50%);
}

#features > div:first-child > img {
  position: relative;
  z-index: 1;
  width: 100%;
}

#features > div:first-child > ul {
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  /* left: 1px; */
  width: auto;
  height: 100%;
  padding: 0;
  z-index: 0;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: 50px;
}

#features > div:first-child > ul > li {
  list-style-type: none;
  min-width: 100%;
  height: 100%;
}

#features > div:first-child > ul > #features-slider-1 {
  transition: margin-left 1s ease;
}

#features > div:first-child > ul > li > img {
  padding: 14px 17px;
  width: 100%;
  height: 100%;
}

#features > div:nth-child(2) {
  width: 100%;
}

#features-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
}

#features-list::after {
  content: '';
  display: block;
  height: 1px;
  width: 100%;
  background: linear-gradient(0.25turn, white, silver, white);
  border-radius: 100%;
  margin-top: 2rem;
}

#features-list > .features {
  background: var(--primary);
  padding: 0.8rem;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  list-style-type: none;
  text-align: center;
  position: relative;
  overflow: hidden;
}

#features-list > .features > .click-zone {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#features-list > .features > .click-zone:hover {
  cursor: grab;
}

#features-list > .features > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

#features-descriptions-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  height: 6rem;
  overflow: hidden;
}

#features-descriptions-list > .features-descriptions {
  position: absolute;
  top: 0;
  left: 0;
  list-style-type: none;
  width: 100%;
  transition: opacity ease 1s;
}

#features-descriptions-list > .features-descriptions:not(:first-child) {
  opacity: 0;
}

@media screen and (min-width: 400px) {
  #features {
    padding: 2rem;
    justify-content: space-around;
    align-items: center;
  }

  #features > div:first-child,
  #features > div:nth-child(2) {
    width: 45%;
  }

  #features > div:first-child {
    width: 100%;
    position: relative;
    width: calc(1242px / 6);
    margin-bottom: 2rem;
    overflow: hidden;
    border-radius: 35px;
    left: 0;
    transform: none;
  }

  #features-list > .features {
    margin-bottom: 1rem;
    width: 5rem;
    height: 5rem;
  }
}

/**
* /Features
*/

.header-section {
  color: var(--white);
}

.title.small {
  text-align: center;
  padding-top: 20px;
  font-size: 2rem;
  color: white;
}

.textwidget.custom-html-widget {
  text-align: center;
  padding-top: 20px;
  font-size: 1.5em;
  color: white;
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

.carousel-item {
  background: none;
}
/* JUMBOTRON_START*/
#jumbotronlp {
  overflow: hidden;
  width: 100vw;
  height: auto;
  padding: 0;
  height: 100vh;
}

#nav {
  width: 100%;
  position: absolute;
  z-index: 10;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#nav h1 {
  font-size: 1.5em;
}
#nav img {
  width: 6%;
}

#nav h1 {
  color: #0e5da4;
}

#imgjumbo {
  width: 100%;
}

#imgjumbo img {
  width: 100%;
  height: auto;
  object-fit: contain;
  z-index: 0;
}

#description {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
}

#description h2 {
  position: absolute;
  top: 15rem;
  right: 5rem;
  width: 30%;
}
/* JUMBOTRON_END */ /* Get Start_START */
#getStart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

#getStart a {
  width: 330px;
  height: 40px;
}

#getStart > * {
  margin: 20px 0 20px 0;
}

#getStart > h2 {
  color: white;
}

/* Get Start_END */ /* FOOTER_START */
footer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  padding: 20px;
}

footer > * {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

footer #logoFooter {
  display: flex;
  justify-content: center;
}

footer h4 {
  color: black;
  padding-top: 10px;
}

footer a {
  text-decoration: none;
  color: #0e5da4;
}
footer a:hover {
  text-decoration: underline;
  color: black;
}

#logoFooter {
  width: 25%;
}

#logoFooter img {
  width: 50%;
  margin: auto;
}
@media screen and (max-width: 425px) {
  footer {
    width: 425px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  #nav img {
    width: 12%;
  }

  #description h2 {
    background: rgba(255, 255, 255, 0.2);
  }

  #getStart,
  #description img {
    width: 425px;
  }

  #jumbotron {
    width: 100%;
  }
}
/* FOOTER_END
 */
</style>
