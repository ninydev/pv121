// Подключение стилей шаблона
import './assets/vendor/bootstrap/css/bootstrap.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/aos/aos.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

// Подключение с учетом цветов
import './assets/css/variables.css'

// Главная стилистика
import './assets/css/main.css'


// Подключить Google Fonts
// Если это не JS вариант шрифтов
// import 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap'

// Подключение стилей для библиотечных элементов
import 'vue3-toastify/dist/index.css'

// TODO: Уточнить как 5 и 3 версия подключаются
// import './assets/vendor/bootstrap/js/bootstrap.min'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min'
// // import './assets/vendor/aos/aos.js'
// import './assets/vendor/glightbox/js/glightbox.min'
// import './assets/vendor/isotope-layout/isotope.pkgd.min'
// import './assets/vendor/swiper/swiper-bundle.min'
// import './assets/vendor/php-email-form/validate'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
