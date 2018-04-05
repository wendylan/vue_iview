import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'
import GridTest from '@/components/GridTest'
import DatePickerTest from '@/components/DatePickerTest'
import LayoutTest from '@/components/LayoutTest'
import ButtonTest from '@/components/ButtonTest'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'GridTest',
		component: GridTest
    },
    {
    	path:'/DatePickerTest',
    	name: 'DatePickerTest',
    	component: DatePickerTest
    },
    {
        path:'/LayoutTest',
        name: 'LayoutTest',
        component: LayoutTest
    },
    {
        path: '/ButtonTest',
        name: 'ButtonTest',
        component: ButtonTest
    }
]

const router = new VueRouter({
    routes: routes
})

export default router;

