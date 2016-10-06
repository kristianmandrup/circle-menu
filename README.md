# circle-menu

> [circle-menu](http://callmenick.com/_development/css-circle-menu/) for Vue 2

## How it works

The `circle-menu` Vue2 component:

```html
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

    export default {
        // data: () => {
        //     return {
        //         items: [
        //             {path: 'img/house.svg'},
        //             {path: 'img/photo.svg'},
        //             {path: 'img/pin.svg'},
        //             {path: 'img/search.svg'},
        //             {path: 'img/tools.svg'}
        //         ]
        //     };
        // },
        props: {
          items: {
            type: Object,
            default: function () {
              return { message: 'hello' }
            }
          },
        },

        mounted: () => {
            // console.log('circle-menu mounted');
            cssCircleMenu('.js-menu');
        }
    };
</script>

<style src="css-circle-menu/css/circle-menu.css"></style>
```