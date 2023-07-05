import {createPinia, PiniaVuePlugin} from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import Vue from 'vue'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia