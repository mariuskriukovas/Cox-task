import Vue from 'vue'
import VueRouter from 'vue-router'

export const HOME_ROUTE_NAME = 'Home'
export const VEHICLE_ROUTE_NAME = 'Vehicle'
export const ARBITRATION_INFORMATION_ROUTE_NAME = 'ArbitrationInformation'
export const TITLE_INFORMATION_ROUTE_NAME = 'TitleInformation'


const HomeRoute = Object.freeze({
    path: '/', name: HOME_ROUTE_NAME, meta: {}, component: () => import('../views/HomeView.vue'),
})

const VehicleRoute = Object.freeze({
    path: '/vehicle/:uid',
    name: VEHICLE_ROUTE_NAME,
    meta: {},
    component: () => import('../views/VehicleView.vue'),
    redirect: '/vehicle/:uid/title-information',
    children: [{
        name: TITLE_INFORMATION_ROUTE_NAME,
        path: 'title-information',
        component: () => import('../views/vehicleTabs/TitleInformation.vue')
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
