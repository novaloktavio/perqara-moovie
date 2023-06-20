import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('counter', {
  state: () => ({
    movies: [
      {
        id: 1,
        title: 'Wonder Woman 1984',
        year: '2020',
        rating: '7.0',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
      },
      {
        id: 2,
        title: 'Below Zero',
        year: '2021',
        rating: '6.4',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
      },
      {
        id: 3,
        title: 'The Little Things',
        year: '2021',
        rating: '6.3',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
      },
      {
        id: 4,
        title: 'Outside the Wire',
        year: '2021',
        rating: '6.5',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
      },
      {
        id: 5,
        title: 'Black Water: Abyss',
        year: '2020',
        rating: '5.1',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
      },
      {
        id: 6,
        title: 'Breach',
        year: '2021',
        rating: '4.6',
        genre: ['Fantasy', 'Action', 'Adventure'],
        overview: 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.',
        reviews: [
          {
            id: 1,
            name: 'SWITCH.',
            date: 'December 18, 2020',
            rate: '7.0',
            review: `It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos`,
          },
          {
            id: 2,
            name: 'msbreviews',
            date: 'December 18, 2020',
            rate: '8.0',
            review: `If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only`,
          },
        ],
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