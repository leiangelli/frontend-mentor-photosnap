import { defineStore } from 'pinia'

export const useNavStore = defineStore({
  id: 'nav',

  state: () => ({
    list: [
      'home',
      'stories',
      'features',
      'pricing'
    ]
  })
})
