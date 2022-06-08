import { defineComponent, ref } from 'vue'

// composables
import { getImageUrl } from '@/composables/utils/helpers'
import { deviceInfo } from '@/composables/device-info'

// stores
// import { useStoriesStore } from '@/stores/stories'
// const storiesStore = useStoriesStore()

// console.log(useStoriesStore())

// console.log(storiesStore)

export default defineComponent({
  setup () {
    const device = deviceInfo()
    const features = ref([
      {
        title: 'Create and share your photo Stories',
        description: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
        button: 'get an invite',
        img: getImageUrl(`images/home/${device.breakpoint.value}/create-and-share.jpg`)
      },
      {
        title: 'Beautiful stories every time',
        description: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
        button: 'view the stories',
        img: getImageUrl(`images/home/${device.breakpoint.value}/beautiful-stories.jpg`)
      },
      {
        title: 'Designed for everyone',
        description: 'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it. ',
        button: 'view the stories',
        img: getImageUrl(`images/home/${device.breakpoint.value}/designed-for-everyone.jpg`)
      }
    ])
    
    return () => {
      return (
        <main className="home">
          {
            features.value.map(({ title, description, button, img }, index) => {
              return (
                <div className={`feature ${index === 0 ? 'is-black' : 'is-white'}`}>
                  <div className="feature__desc">
                    <h2>{ title }</h2>

                    <p>{ description }</p>

                    <a>{ button }</a>
                  </div>

                  <div className="feature__img">
                    <img
                      src={ img }
                      alt={ title}
                    />
                  </div>
                </div>
              )
            })
          }

          <div className="stories">
            <div className="story story-mountains">
              div
            </div>
          </div>
        </main>
      )
    }
  }
})
