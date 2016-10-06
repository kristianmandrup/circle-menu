<template>
    <nav class="c-circle-menu js-menu">
    <button class="c-circle-menu__toggle js-menu-toggle">
        <span>Toggle</span>
    </button>
    <ul class="c-circle-menu__items">
        <li class="c-circle-menu__item" v-for="item in items">
        <a href="#" class="c-circle-menu__link">
            <img :src="item.path" alt="">
        </a>
        </li>
        <!-- more items here -->
    </ul>
    <div class="c-circle-menu__mask js-menu-mask"></div>
    </nav>
</template>

<script>
    import 'css-circle-menu/js/dist/circleMenu.min.js';

    // console.log('cssCircleMenu', cssCircleMenu);
    import items from './items';

    export default {
        props: {
            items: {
                type: Array,
                default: function () {
                    return items;
                }
            }            
        },
        mounted: () => {
            // console.log('READY');
            cssCircleMenu('.js-menu');
        }
    };
</script>

<style src="../node_modules/css-circle-menu/css/circle-menu.css"></style>
