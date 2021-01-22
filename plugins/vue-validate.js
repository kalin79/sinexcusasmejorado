import Vue from 'vue'
import { ValidationObserver, ValidationProvider, localize, extend } from 'vee-validate/dist/vee-validate.full'
import es from 'vee-validate/dist/locale/es.json'

localize('es',es)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)