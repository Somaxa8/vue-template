import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SessionModule from "@/store/SessionModule";
import {getModule} from "vuex-module-decorators";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'home', component: () => import("@/views/HomeView.vue") },
  { path: '/login', name: 'login', component: () => import("@/views/LoginView.vue") },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() { return { x: 0, y: 0 } }
})

export default router

router.beforeEach(async(to, from, next) => {
  const { authorize } = to.meta
  let sessionModule: SessionModule = getModule(SessionModule)
  if (sessionModule.session && sessionModule.session.token) {
    sessionModule.saveSession()
  }
  sessionModule.loadSession()
  let authorities = sessionModule.session.authorities

  if (!sessionModule.session.token) {
    if (to.path != "/login") {
      return next({path: "/login", query: {redirect: to.path}})
    }
  } else if (to.path == "/login") {
    return next({path: "/"})
  } else if (to.path != "/" && authorize) {
    for (let authority of authorities) {
      if (authorize.includes(authority.name)) {
        return next()
      }
    }
    return next({path: "/"})
  }
  next()
})

