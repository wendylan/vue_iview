import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/hello'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
    	path:'/hello',
    	name: 'hello',
    	component: Hello
    }
]

const router = new VueRouter({
    routes: routes
})

export default router;

