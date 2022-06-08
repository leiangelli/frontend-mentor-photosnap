import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

// composables
import { deviceInfo } from '@/composables/device-info'

export default defineComponent({
  setup () {
    const device = deviceInfo()

    return () => {
      return (
        <header>
          <div className="l-inner">
            <h1 className="logo">
              photosnap
            </h1>
            
            {
              device.breakpoint.value === 'mobile' && (
                <div className="hamburger">
                  <span></span>
                  <span></span>
                </div>
              )
            }

            <nav>
              <ul className="nav-list">
                <li>
                  <RouterLink to="/stories">
                    Stories
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/features">
                    Features
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/pricing">
                    Pricing
                  </RouterLink>
                </li>
              </ul>
            </nav>
            
            {
              device.breakpoint.value != 'mobile' && (
                <button className="btn-default">
                  get an invite
                </button>
              )
            }
          </div>
        </header>
      )
    }
  }
})
