import Vue from 'nativescript-vue'
import App from './components/App'

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: 'http://192.168.1.156' })
}


import { install as installBottomSheet } from 'nativescript-material-bottomsheet'
installBottomSheet()

import { AlertDialog } from 'nativescript-material-dialogs'
Vue.prototype.$showDialog = function(component, options) {
    var navEntryInstance = new Vue({
        name: 'DialogEntry',
        parent: this.$root,
        render: function (h) {
            return h(component, {
                props: options.props,
                key: component.toString()
            })
        }
    })
    navEntryInstance.$mount()
    const Dialog = new AlertDialog({
        view: navEntryInstance.nativeView
    })
    Dialog.show()
    Vue.prototype.$hideDialog = function() {
        Dialog.hide()
    }
}

import BottomSheetPlugin from 'nativescript-material-bottomsheet/vue'
Vue.use(BottomSheetPlugin)

  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
