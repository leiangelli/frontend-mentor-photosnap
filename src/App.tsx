import '@/styles/app.scss'

import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup () {
    return () => {
      return (
        <div className="wrapper">
          <RouterView />
        </div>
      )
    }
  }
})
