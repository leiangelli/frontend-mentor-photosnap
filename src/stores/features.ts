import { defineStore } from 'pinia'

export const useFeaturesStore = defineStore({
  id: 'features',

  state: () => ({
    list: [
      {
        icon: 'responsive',
        title: '100% Responsive',
        content: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
      },
      {
        icon: 'photo-limit',
        title: 'No Photo Upload Limit',
        content: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
      },
      {
        icon: 'available-embed',
        title: 'Available to Embed',
        content: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
      },
      {
        icon: 'custom-domain',
        title: 'Custom Domain',
        content: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
      },
      {
        icon: 'exposure',
        title: 'Boost Your Exposure',
        content: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
      },
      {
        icon: 'drag-drop',
        title: 'Drag & Drop Image',
        content: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.'
      }
    ]
  }),

  getters: {
    featuredList: state => JSON.parse(JSON.stringify(state.list)).splice(0, 3) 
  }
})
