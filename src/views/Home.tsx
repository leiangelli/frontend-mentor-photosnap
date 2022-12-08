/* eslint-disable */

import { defineComponent, ref } from 'vue'

// composables
import { getImageUrl } from '@/composables/utils/helpers'
import { deviceInfo } from '@/composables/device-info'

// stores
import { useStoriesStore } from '@/stores/stories'
import { useFeaturesStore } from '@/stores/features'

// components
import Button from '@/components/modules/Button/Index'

export default defineComponent({
  setup () {
    const storiesStore = useStoriesStore()
    const stories = storiesStore.featuredList

    const featuresStore = useFeaturesStore()
    const features = featuresStore.featuredList

    const device = deviceInfo()
    const deviceImage = device.breakpoint.value === 'mobile'
      ? 'mobile'
      : 'desktop'
    const highlights = ref([
      {
        title: 'Create and share your photo Stories',
        description: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
        button: 'GET AN INVITE',
        img: getImageUrl(`images/home/${deviceImage}/create-and-share.jpg`)
      },
      {
        title: 'Beautiful stories every time',
        description: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
        button: 'VIEW THE STORIES',
        img: getImageUrl(`images/home/${deviceImage}/beautiful-stories.jpg`)
      },
      {
        title: 'Designed for everyone',
        description: 'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it. ',
        button: 'VIEW THE STORIES',
        img: getImageUrl(`images/home/${deviceImage}/designed-for-everyone.jpg`)
      }
    ])
    
    return () => {
      return (
        <main class="home">
          {
            highlights.value.map(({ title, description, button, img }, index) => {
              return (
                <div class={`highlights ${index === 0 ? 'is-black' : 'is-white'}`}>
                  <div class="highlights__desc">
                    <h2>{ title }</h2>

                    <p>{ description }</p>

                    <Button
                      layout="arrow"
                      class={ index === 0 ? 'is-white' : '' }
                    >
                      { button }
                    </Button>
                  </div>

                  <div class="highlights__img">
                    <img
                      src={ img }
                      alt={ title}
                    />
                  </div>
                </div>
              )
            })
          }
          
          <div class="story-list">
            {
              stories.map(({ title, author, img }) => {
                return (
                  <div class="story">
                    <div className="story__inner">
                      <h2>
                        { title }
                      </h2>

                      <p>
                      by {author}
                      </p>

                      <hr />

                      <Button
                        layout="arrow"
                        class="is-white"
                        is-full
                      >
                        READ STORY
                      </Button>
                    </div>

                    <div
                      class="story__bg"
                      style={`background-image: url(${getImageUrl(`images/stories/${deviceImage}/${img}.jpg`)})`}
                    >
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="features">
            <div className="feature-list tablet-1">
              {
                features.map(({ icon, title, content }) => {
                  return (
                    <section class="feature-list__item">
                      <div className="feature-list__icon">
                        <img
                          src={getImageUrl(`images/features/desktop/${icon}.svg`)}
                          alt=""
                        />
                      </div>

                      <h2>
                        { title }
                      </h2>

                      <p>
                        { content }
                      </p>
                    </section>
                  )
                })
              }
            </div>
          </div>
        </main>
      )
    }
  }
})
