import { defineStore } from 'pinia'

export const usePricingStore = defineStore({
  id: 'pricing',

  state: () => ({
    plans: [
      {
        type: 'basic',
        content: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
        price: '$19.00'
      },
      {
        type: 'pro',
        content: 'More advanced features available. Recommended for photography veterans and professionals.',
        price: '$39.00'
      },
      {
        type: 'business',
        content: 'Additional features available such as more detailed metrics. Recommended for business owners.',
        price: '$99.00'
      }
    ],

    compare: {
      'unlimited story posting': {
        basic: true,
        pro: true,
        business: true
      },
      'unlimited photo upload': {
        basic: true,
        pro: true,
        business: true
      },
      'embedding custom content': {
        basic: false,
        pro: true,
        business: true
      },
      'customize metadata': {
        basic: false,
        pro: true,
        business: true
      },
      'advanced metrics': {
        basic: false,
        pro: false,
        business: true
      },
      'photo downloads': {
        basic: false,
        pro: false,
        business: true
      },
      'search engine indexing': {
        basic: false,
        pro: false,
        business: true
      },
      'custom analytics': {
        basic: false,
        pro: false,
        business: true
      }
    }
  })
})
