import { h } from 'vue'
import ecattleIcon from './ECattleIcon.vue'

const customSvgIcons = {
  ecattleIcon
}

const customSVGs = {
  component: props => h(customSvgIcons[props.icon], { class: 'v-icon__svg' })
}

export { customSVGs }
