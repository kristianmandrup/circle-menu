import Vue from 'vue/dist/vue.js';
import circleMenu from './src/circle-menu.vue';

new Vue({
    el: '#container',
    components: {
        'circle-menu': circleMenu
    },
    data() {
        return {};
    }
});
