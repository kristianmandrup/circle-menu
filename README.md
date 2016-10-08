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

## Architecture

The component can be found in `circle-menu.vue` and consists of:
- the view/template inside the `<template>` tag
- the view model inside the `<script>` tag
- the styling inside the `<style>` tag

All the styling is imported as the `style` variable.

```js
import style from './style';
```

The component uses *inline styling* which makes it much more powerful and useful.

Eliminating CSS in favor of inline styles that are computed on the fly is a powerful approach, providing a number of benefits over traditional CSS:
- Scoped styles without selectors
- Avoids specificity conflicts
- Source order independence
- Dead code elimination
- Highly expressive

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

### Custom styling

```html
<div id="container">
    <circle-menu
        :items="[{path: 'img/house.svg'}]">
        :themeColor="blue"
        :spreadRadius="126px"
        :menuItemRadius="16px"

        :buttonBarSpacing="4px"
        :buttonPadding="8px"
    </circle-menu>
</div>
```

`<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>`

Please note that `:style` is a short hand for `v-bind:style`.

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

Investigate using numbers (for calculation):

```js
    :spreadRadius="126"
    :menuItemRadius="16"
```

Investigate using objects for scoping bindings and reducing number of bindings needed:

Setting via `button` Object instead: `:button="{{button}}"`

```js
button: {
    padding: '8px'
    bar: {
        spacing: '4px',
        height: '4px'
    }
}
```

This should make it much more elegant! :)

## CSS Variables

[CSS variables](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care) allows CSS to be expressed via variables that can be linked to Javascript.

```css
:root {
  --main-color: #06c;
}

#foo h1 {
  color: var(--main-color);
}

.foo {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```

The CSS variables can be set (or get) from Javascript:

```js
var styles = getComputedStyle(document.documentElement);
var value = String(styles.getPropertyValue('--primary-color')).trim();
document.documentElement.style.setProperty('--primary-color', 'green');
```

## RXCSS

The library [RxCSS](https://github.com/davidkpiano/RxCSS) makes it possible to combine [RxJS]() with [CSS variables]() to create reactive CSS variables and thus reactive CSS and illustrated in [this talk](https://www.youtube.com/watch?v=lTCukb6Zn3g)

## TODO

Make styling dynamic via [computer properties](https://vuejs.org/guide/computed.html) and [class and style bindings](https://vuejs.org/guide/class-and-style.html)

The styling is scoped for the component, so there is almost no need for global CSS styling except the few styles that are static and apply for any circle menu.
