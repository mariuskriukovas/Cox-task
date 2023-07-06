import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import pinia from "@/plugins/pinia";
import router from "@/plugins/router";

Vue.config.productionTip = false

new Vue({
    vuetify, pinia, router, render: h => h(App)
}).$mount('#app')
