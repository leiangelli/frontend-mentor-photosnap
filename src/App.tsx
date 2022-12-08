import '@/styles/app.scss'

import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import Header from '@/components/layout/Header'
import Footer from './components/layout/Footer'

export default defineComponent({
  setup () {
    return () => {
      return (
        <div className="wrapper">
          <Header />

          <RouterView />

          <Footer />
        </div>
      )
    }
  }
})
