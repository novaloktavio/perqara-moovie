import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('counter', {
  state: () => ({
    movies: [
      {
        id: 1,
        title: 'Wonder Woman 1984',
        year: '2020',
        rating: '7.0',
      },
      {
        id: 2,
        title: 'Below Zero',
        year: '2021',
        rating: '6.4',
      },
      {
        id: 3,
        title: 'The Little Things',
        year: '2021',
        rating: '6.3',
      },
      {
        id: 4,
        title: 'Outside the Wire',
        year: '2021',
        rating: '6.5',
      },
      {
        id: 5,
        title: 'Black Water: Abyss',
        year: '2020',
        rating: '5.1',
      },
      {
        id: 6,
        title: 'Breach',
        year: '2021',
        rating: '4.6',
      },
    ],
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    getMovie(id: number) {
      const movie = this.movies.find((v: any) => v.id === id)
      return movie
    },
  },
})