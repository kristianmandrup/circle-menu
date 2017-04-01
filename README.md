# circle-menu

[![Greenkeeper badge](https://badges.greenkeeper.io/kristianmandrup/circle-menu.svg)](https://greenkeeper.io/)

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
            cssCircleMenu('.js-menu');
        }
    };

</script>

<style src="css-circle-menu/css/circle-menu.css"></style>
```

## Usage

Sample configuration with 5 items (like original demo):

```html
<div id="container">
    <circle-menu ></circle-menu>
</div>
```

Custom items:

```html
<div id="container">
    <circle-menu :items="[{path: 'img/house.svg'}]"></circle-menu>
</div>
```

## TODO

Use the SASS files from the [circle-menu](http://callmenick.com/_development/css-circle-menu/ library to dynamically create the stylesheet 
adjusted to the size and number of menu items!

