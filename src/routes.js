import { createRouter, createWebHistory } from 'vue-router'
import EventsList from './pages/EventsList.vue'
import NewEvent from './pages/NewEvent.vue'
import NewSpence from './pages/NewSpence.vue'
import ListSpences from './pages/ListSpences.vue'
import InviteContact from './pages/InviteContact.vue'
import Home from './pages/Home.vue'
import Registrer from './pages/Register.vue'
import Login from './pages/Login.vue'

import EventDetails from './pages/EventDetails.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/register',
            component: Registrer,
            name: 'register'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/',
            component: Home,
            name: 'home'
        }, {
            path: '/events/list',
            component: EventsList,
            name: 'eventsList'
        },
        {
            path: '/events/:id',
            component: EventDetails,
            name: 'eventDetails'
        },
        {
            path: '/events/new',
            component: NewEvent,
            name: 'newEvent'
        },
        {
            path: '/spences/new',
            component: NewSpence,
            name: 'newSpence'
        },
        {
            path: '/spences/:eventId',
            component: ListSpences,
            name: 'listSpences'
        },
        {
            path: '/invite/',
            component: InviteContact,
            name: 'inviteContact'
        }
    ]
})

export default router;