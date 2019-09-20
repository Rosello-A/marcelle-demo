import Vue from 'vue'

export const state = () => ({
  cars: [],
  bikes: [],
  seeCars: true,
  filterHidden: true,
  seeBikes: true

})

export const getters = ({

})

export const mutations = {
  'SET'(state, payload) {
    for (const key in payload) Vue.set(state, key, payload[key])
  },
  'SET_CARS'(state, cars) {
    state.cars = cars
  },
  'SET_BIKES'(state, bikes) {
    state.bikes = bikes
  },
  'TOGGLE_CARS'(state) {
    state.seeCars = !state.seeCars
  },
  'TOGGLE_BIKES'(state) {
    state.seeBikes = !state.seeBikes
  },
  'TOGGLE_FILTER'(state) {
    state.filterHidden = !state.filterHidden
  }

}

export const actions = {
  async fetchCars({ commit }) {
    const cars = await this.$axios.$get('/vehicules/car')
    commit('SET_CARS', cars)
  },
  async fetchBikes({ commit }) {
    const bikes = await this.$axios.$get('/vehicules/bike')
    commit('SET_BIKES', bikes)
  }
}

