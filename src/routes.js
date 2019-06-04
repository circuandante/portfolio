import contact from './components/contact.vue'
import hero from './components/hero.vue'
import me from './components/about.vue'

//aqui se definen las rutas
//path lo que va despues del dominio
const routes = [
    {path: '/contacto', component: contact, name: 'contacto'},
    {path:'/', component: hero, name: 'inicio' },
    {path:'/sobre-mi', component: me, name: 'about' }
]

export default routes