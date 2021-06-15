import { createRouter, createWebHistory } from 'vue-router'
import EventsList from './pages/EventsList.vue'
import NewEvent from './pages/NewEvent.vue'
import NewSpence from './pages/NewSpence.vue'
import ListSpences from './pages/ListSpences.vue'
import InviteContact from './pages/InviteContact.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/events/list',
        component: EventsList,
        name: 'eventsList'
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