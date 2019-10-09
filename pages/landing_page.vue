<!-- pages/le_nom_de_ma_page.vue => localhost:3000/le_nom_de_ma_page o-->
<template>
  <div id="landing-page">
    <link rel="stylesheet" href="../assets/css/landing-page.css" />
    <section class="categories prout">NAV</section>
    <section class="categories">JUMBOTRON</section>
    <section id="features" class="categories">
      <div id="features-slider">
        <img src="/_nuxt/assets/images/features/ihoneMockUp.png" />
        <ul>
          <li id="features-slider-1">
            <img src="/_nuxt/assets/images/features/feature1.png" />
          </li>
          <li>
            <img src="/_nuxt/assets/images/features/feature2.png" />
          </li>
          <li>
            <img src="/_nuxt/assets/images/features/feature3.png" />
          </li>
          <li>
            <img src="/_nuxt/assets/images/features/feature4.png" />
          </li>
        </ul>
      </div>

      <div>
        <ul id="features-list">
          <li class="features">
            <div id="navbar-map-feature" class="click-zone" @click="showFeature"></div>
            <img src="/_nuxt/assets/images/navbarMap.svg" />
          </li>
          <li class="features">
            <div id="elec-car-feature" class="click-zone" @click="showFeature"></div>
            <img src="/_nuxt/assets/images/elec_car.svg" />
          </li>
          <li class="features">
            <div id="navbar-marius-feature" class="click-zone" @click="showFeature"></div>
            <img src="/_nuxt/assets/images/navbarMarius.svg" />
          </li>
          <li class="features">
            <div id="navbar-blog-feature" class="click-zone" @click="showFeature"></div>
            <img src="/_nuxt/assets/images/navbarBlog.svg" />
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
    <section class="categories">ECO FRIENDLY</section>
    <section class="categories">USER REVIEW</section>
    <section class="categories">GET STARTED</section>
    <section class="categories">FOOTER</section>
  </div>
</template>
<script>
export default {
  methods: {
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

      // if (element.originalTarget.id === 'navbar-map-feature') {
      //   firstSlide.style.marginLeft = '0%'
      // }
      // if (element.originalTarget.id === 'elec-car-feature') {
      //   firstSlide.style.marginLeft = '-100%'
      // }
      // if (element.originalTarget.id === 'navbar-map-feature') {
      //   firstSlide.style.marginLeft = '-200%'
      // }
      // if (element.originalTarget.id === 'navbar-map-feature') {
      //   firstSlide.style.marginLeft = '-300%'
      // }
    }
  }
}
// Features
// features
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

#landing-page > .categories:nth-child(even) {
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
</style>
