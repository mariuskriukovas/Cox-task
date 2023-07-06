import Vue from 'vue'
import VueRouter from 'vue-router'

export const HOME_ROUTE_NAME = 'Home'
export const VEHICLE_ROUTE_NAME = 'Vehicle'
export const PAYMENT_INFORMATION_TAB_ROUTE_NAME = 'PaymentInformation'
export const ARBITRATION_INFORMATION_ROUTE_NAME = 'ArbitrationInformation'


const HomeRoute = Object.freeze({
    path: '/', name: HOME_ROUTE_NAME, meta: {}, component: () => import('../views/HomeView.vue'),
})

const VehicleRoute = Object.freeze({
    path: '/vehicle/:uid',
    name: VEHICLE_ROUTE_NAME,
    meta: {},
    component: () => import('../views/VehicleView.vue'),
    redirect: '/vehicle/:uid/payment-information',
    children: [{
        name: PAYMENT_INFORMATION_TAB_ROUTE_NAME,
        path: 'payment-information',
        component: () => import('../views/vehicleTabs/PaymentInformation.vue')
    }, {
        name: ARBITRATION_INFORMATION_ROUTE_NAME,
        path: 'arbitration-information',
        component: () => import('../views/vehicleTabs/ArbitrationInformation.vue')
    }],
})

const routes = [HomeRoute, VehicleRoute]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', base: process.env.BASE_URL, routes: routes,
})

export default router
