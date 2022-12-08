import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

// composables
import { deviceInfo } from '@/composables/device-info'

// components
import Button from '@/components/modules/Button/Index'
import Logo from '@/components/modules/icons/Logo'

// stores
import { useNavStore } from '@/stores/nav'

export default defineComponent({
  setup () {
    const navStore = useNavStore()
    const navList = navStore.list.filter(e => !e.includes('home'))
    
    const device = deviceInfo()

    return () => {
      return (
        <header>
          <div class="l-inner">
            <Logo class="logo" />
            
            {
              device.breakpoint.value === 'mobile' && (
                <div class="hamburger">
                  <span></span>
                  <span></span>
                </div>
              )
            }

            <nav>
              <ul class="nav-list">
                {
                  navList.map(item => {
                    return (
                      <li>
                        <RouterLink to={ `/${item}` }>
                          { item }
                        </RouterLink>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
            
            {
              device.breakpoint.value != 'mobile' && (
                <Button class="bg-black">
                  GET AN INVITE
                </Button>
              )
            }
          </div>
        </header>
      )
    }
  }
})
