import { defineComponent } from 'vue'

// scss
import './style.scss'

// composables
import { getImageUrl } from '@/composables/utils/helpers'

export default defineComponent({
  props: {
    layout: {
      type: String,
      default: 'default',
      validator: (value:string) => ['default', 'arrow'].includes(value)
    },

    isFull: {
      type: Boolean,
      default: false
    }
  },

  setup (props, { slots }) {
    return () => {
      return (
        <div class={ `btn btn-${props.layout} ${props.isFull ? 'is-full' : ''}` }>
          { slots.default?.() } 

          {
            props.layout === 'arrow' &&
            <img
              src={ getImageUrl('/images/shared/desktop/arrow.svg') }
              alt="arrow"
              width="42"
              height="12"
            />
          }
        </div>
      )
    }
  }
})