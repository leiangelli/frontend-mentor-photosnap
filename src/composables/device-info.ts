/*
 *
  @Description:

  import { deviceInfo } from '@/composables/device-info'

  @: shows div if [window width] is greater than 100
  <div v-if="device.width > 100"></div>

  ==> shows div if [window height] is greater than 100
  <div v-if="device.height > 100"></div>

  ==> shows div if operating system used is IOS
  <div v-if="device.os.name === 'macintosh'"></div>

  TODO: 
    add debounce for event listener resize
 *
 */

// imports
import { ref } from 'vue'
import { useEventListener } from './event-listener'

// variables
const html = document.querySelector('html')
const width = ref<number>(0)
const height = ref<number>(0)
const breakpoint = ref<string>('')

const osList = [
  { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
  { name: 'Windows', value: 'Win', version: 'NT' },
  { name: 'iPhone', value: 'iPhone', version: 'OS' },
  { name: 'iPad', value: 'iPad', version: 'OS' },
  { name: 'Kindle', value: 'Silk', version: 'Silk' },
  { name: 'Android', value: 'Android', version: 'Android' },
  { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
  { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
  { name: 'Macintosh', value: 'Mac', version: 'OS X' },
  { name: 'Linux', value: 'Linux', version: 'rv' },
  { name: 'Palm', value: 'Palm', version: 'PalmOS' }
]
const browserList = [
  { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
  { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
  { name: 'Safari', value: 'Safari', version: 'Version' },
  { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
  { name: 'Opera', value: 'Opera', version: 'Opera' },
  { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
  { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
]

function generateDimensions (event: any) {
  const target = event?.target || event

  width.value = target.innerWidth
  height.value = target.innerHeight
}

function generateDeviceInfo (header: any, list: any) {
  let version = ''

  for (const item of list) {
    const regex = new RegExp(item.value, 'i')
    const match = regex.test(header)

    if (match) {
      const regexv = new RegExp(item.version + '[- /:;]([\\d._]+)', 'i')
      let matches = header.match(regexv)

      if (matches && matches[1]) {
        matches = matches[1]
      }

      if (matches) {
        matches = matches.split(/[._]+/)

        for (const [index, value] of matches.entries()) {
          version += !index ? value + '.' : value
        }
      } 

      return {
        name: item.name.toLowerCase(),
        version: Number(version)
      }
    }
  }

  return {
    name: '',
    version: 0
  }
}

function deviceType () {
  const userAgent = navigator.userAgent

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tab'
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    return 'mb'
  }
  return 'pc'
}

function deviceBreakpoint () {
  if (!html) {
    breakpoint.value = ''
    return
  }

  breakpoint.value = window.getComputedStyle(html, ':before')
    .getPropertyValue('content')
    .replace(/['"]/g, '')
}

const header = [
  navigator?.userAgent,
  navigator?.vendor
].join(' ')

export function deviceInfo () {
  const os = generateDeviceInfo(header, osList)
  const browser = generateDeviceInfo(header, browserList)

  useEventListener(window, 'resize', (event: Event) => {
    generateDimensions(event)
    deviceBreakpoint()
  })

  generateDimensions(window)
  deviceBreakpoint()
    
  return {
    os,
    browser,  
    width,
    height,
    type: deviceType(),
    breakpoint
  }
}
