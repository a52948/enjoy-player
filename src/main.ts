import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'
import i18n from './i18n'
import './init/shortcuts'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/main.css'

const app = createApp(App)

app.use(stores)
app.use(router)
app.use(i18n)
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.mount('#app')
