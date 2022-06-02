require('./bootstrap');

window.Vue = require('vue').default;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.component('first-component', require('./components/FirstComponent.vue').default);


const app = new Vue({
    el: '#app',
});
