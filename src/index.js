import SiderContainer from './lib/sider-container.vue'

const install = function(vue) {
  if (install.installed) return

  vue.component(SiderContainer.name, SiderContainer)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default SiderContainer
