import Vue from 'vue';
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
