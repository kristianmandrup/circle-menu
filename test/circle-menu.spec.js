/* global describe, it, expect */
import Vue from 'vue';
import circleMenu from '../src/circle-menu.vue';

describe('circle-menu.vue', () => {
    it('should have correct text', () => {
        expect(circleMenu.data().text).toBe('Hello circleMenu');
    });

    it('should render correct text', () => {
        const vm = new Vue({
            template: '<div><circle-menu></circle-menu></div>',
            components: {
                'circle-menu': circleMenu
            }
        }).$mount();
        expect(vm.$el.querySelector('h2').textContent)
            .toBe('Hello circleMenu');
    });
});
