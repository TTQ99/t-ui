import VueRouter from 'vue-router'
import Test from '../views/test.vue'
console.log(Test);
const routes = [
    { path: '/', component: Test },
]
const router = new VueRouter({ routes, })
export default router