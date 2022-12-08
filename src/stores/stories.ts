import { defineStore } from 'pinia'

export const useStoriesStore = defineStore({
  id: 'stories',

  state: () => ({
    stories: [
      {
        date: 'April 16th 2020',
        title: 'The Mountains',
        author: 'John Appleseed'
      },
      {
        date: 'April 14th 2020',
        title: 'Sunset Cityscapes',
        author: 'Benjamin Cruz'
      },
      {
        date: 'April 11th 2020',
        title: '18 Days Voyage',
        author: 'Alexei Borodin'
      },
      {
        date: 'April 9th 2020',
        title: 'Architecturals',
        author: 'Samantha Brooke'
      },
      {
        date: 'April 7th 2020',
        title: 'World Tour 2019',
        author: 'Timothy Wagner'
      },
      {
        date: 'April 3rd 2020',
        title: 'Unforeseen Corners',
        author: 'William Malcolm'
      },
      {
        date: 'March 29th 2020',
        title: 'King on Africa: Part II',
        author: 'Tim Hillenburg'
      },
      {
        date: 'March 21st 2020',
        title: 'The Trip to Nowhere',
        author: 'Felicia Rourke'
      },
      {
        date: 'March 19th 2020',
        title: 'Rage of The Sea',
        author: 'Mohammed Abdul'
      },
      {
        date: 'March 16th 2020',
        title: 'Running Free',
        author: 'Michelle'
      },
      {
        date: 'March 11th 2020',
        title: 'Behind the Waves',
        author: 'Lamarr Wilson'
      },
      {
        date: 'March 9th 2020',
        title: 'Calm Waters',
        author: 'Samantha Brooke'
      },
      {
        date: 'March 5th 2020',
        title: 'The Milky Way',
        author: 'Benjamin Cruz'
      },
      {
        date: 'March 5th 2020',
        title: 'Night at The Dark Forest',
        author: 'Mohammed Abdul'
      },
      {
        date: 'March 1st 2020',
        title: 'Somwarpet’s Beauty',
        author: 'Michelle'
      },
      {
        date: 'February 25th 2020',
        title: 'Land of Dreams',
        author: 'William Malcolm'
      }
    ]
  }),

  getters: {
    list: state => {
      const stories = state.stories.map(item => {
        return {
          img: item.title
            .replace(/ /g, '-')
            .replace(/ /g, '')
            .toLowerCase(),
          ...item
        }
      })

      return stories
    },

    featuredList () {
      return JSON.parse(JSON.stringify(this.list)).splice(0, 4)
    }
  }
})
