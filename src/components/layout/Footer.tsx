import { defineComponent } from 'vue'

// composables
import { getImageUrl } from '@/composables/utils/helpers'

// components
import Button from '@/components/modules/Button/Index'
import Logo from '@/components/modules/icons/Logo'

// stores
import { useNavStore } from '@/stores/nav'

export default defineComponent({
  setup () {
    const navStore = useNavStore()
    const navList = navStore.list

    const socials = [
      'facebook',
      'youtube',
      'twitter',
      'pinterest',
      'instagram'
    ]

    return () => {
      return (
        <div class="footer">
          <div class="l-inner">
            <Logo
              class="logo"
              fill="#fff"
            />

            <ul class="socials">
              {
                socials.map(item => {
                  return (
                    <li>
                      <img
                        src={getImageUrl(`images/shared/desktop/${ item }.svg`)}
                        alt={ item }
                      />
                    </li>
                  )
                })
              }
            </ul>

            <ul class="sitemap">
              {
                navList.map(item => {
                  return (
                    <li>
                      { item }
                    </li>
                  )
                })
              }
            </ul>

            <Button
              layout="arrow"
              class="is-white"
            >
              GET AN INVITE
            </Button>
          </div>
        </div>
      )
    }
  }
})