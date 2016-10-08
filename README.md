# circle-menu

> [circle-menu](http://callmenick.com/_development/css-circle-menu/) for Vue 2

## Install

Install Node.js:

- [Windows installer](https://nodejs.org/en/download/package-manager/#windows)
- [More...](http://blog.teamtreehouse.com/install-node-js-npm-windows)

Install webpack globally:

`npm i webpack -g`

Install dependencies:

`npm install`

## Scrips

The scripts available are defined in `package.json`

```json
  "scripts": {
    "dev": "webpack-dashboard -p 3001 -- webpack-dev-server --watch --progress --config webpack.dev.config.js --port 8877",
    "build": "webpack --progress --config webpack.prod.config.js",
    "test": "karma start karma.config.js",
    "ci": "npm run test && npm run build"
  }
```

To use: `npm run [task-name]` such as `npm run ci`

## Run

`npm run dev`

Open `localhost:8877` in a browser (Chrome recommended)

Notice that the `dev` task includes a `--watch` option to watch files for changes to recompile and hot-load. This is the ideal mode for development.
Any change will be instantly reflected in the browser!

Alternative: `webpack --watch` to watch files and run webpack on any change.

### Test

`npm test` or `npm run test`

### Continuous Integration test

`npm run ci`

### Build bundle

`npm run build`

Will build the main bundle file as per configuration in `webpack.dev.config.js`

```js
{
  publicPath: 'build',
  filename: 'build.js'
}
```

Which means the destination file is: `build/build.js` (hint: see Resources pane in Chrome developer tools)

## How it works

The `circle-menu` Vue2 component:

```html
<template>
    <nav class="menu js-menu">
    <button class="toggle js-menu-toggle">
        <span>Toggle</span>
    </button>
    <ul class="items">
        <li class="item" v-for="item in items">
        <a href="#" class="link">
            <img :src="item.path" alt="">
        </a>
        </li>
        <!-- more items here -->
    </ul>
    <div class="mask js-menu-mask"></div>
    </nav>
</template>

<script>
    import 'css-circle-menu/js/dist/circleMenu.min.js';
    import items from './items';
    import style from './style';

    export default {
        props: {
            items: {
                type: Array,
                default: function () {
                    return items;
                }
            }
        },
        computed: {
            // ...
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

Make styling dynamic via [computer properties](https://vuejs.org/guide/computed.html) and [class and style bindings](https://vuejs.org/guide/class-and-style.html)

The styling is scoped for the component, so there is almost no need for global CSS styling except the few styles that are static and apply for any circle menu.
