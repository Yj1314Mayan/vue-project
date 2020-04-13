import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("@/views/Login/index.vue")
	},
	{
		path: "/home",
		name: "home",
		component: () => import("@/views/Home/index.vue")
	}
]

const router = new VueRouter({
	// mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
