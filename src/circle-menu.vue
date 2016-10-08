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
  import vMediaQuery from 'v-media-query';

  // TODO: alternatively try moving this to index.js in root folder
  import Vue from 'vue/dist/vue.js';
  Vue.use(vMediaQuery.default)

  import 'css-circle-menu/js/dist/circleMenu.min.js';
  import items from './items'
  import style from './style';
  // import color from 'rgb';

  let setProp = document.documentElement.style.setProperty;

  export default {
    props: {
      items: {
          type: Array,
          default: function () {
              return items;
          }
      },
      themeColor: {
          type: String,
          default: function() {
            return 'rgb(255, 40, 60)';
          }
      }
      spreadRadius: {
          type: String,
          default: function() {
            return '144px';
          }
      },
      menuItemRadius: {
          type: String,
          default: function() {
            return '24px';
          }
      },
      delayIncrement: {
          type: String,
          default: function() {
            return '0.1s';
          }
      },
      position: {
          type: String,
          default: function() {
            return 'bottom-right';
          }
      },
      minHeight: {
          type: String,
          default: function() {
            return '480px';
          }
      },
      minWidth: {
        type: String,
        default: function() {
          return '480px';
        }
      },
      buttonBarHeight: {
        type: String,
        default: function() {
          return '4px';
        }
      },
      buttonBarSpacing: {
        type: String,
        default: function() {
          return '4px';
        }
      },
      buttonPadding: {
        type: String,
        default: function() {
          return '10px';
        }
      }
    },
    computed: {
      numItems: () => {
        return this.items.length;
      },
      increment: () => {
        // 90 degrees in radians
        return _90deg / (this.numItems - 1);
      },
      angle: () => {
        return this.increment;
      },
      initialDelay: () => {
        return this.delayIncrement;
      },
      xInitialDelay: () => {
        return (this.numItems - 2) * this.delayIncrement;
      }
      finalDelay: () => {
        return (this.numItems - 1) * this.delayIncrement;
      },

      menuPosition: () => {
        return this.position.split('-').reduce((obj, value) => {
          obj[value] = '12px';
          return obj;
        }, {});
      },
      menuItemDiameter: () => {
        let diam = parseInt(this.menuItemRadius) * 2
        return `${diam}px`;
      },
      cCircleMenu: style(this)
    },
    mounted: () => {
      // set css variables here!
      // TODO: set an Object with all CSS props then iterate key/values and set for each
      let cssVarMap = {
        'num-items': this.numItems
        // ...
      }
      // or is it via Object.keys(cssVars) ??

      // for (let prop in cssVars) {
      //   setProp(`--${prop}`, cssVars[prop]);
      // }

      setProp('--num-items', this.numItems);
      setProp('--final-delay', this.finalDelay);



      cssCircleMenu('.js-menu');
    }
  };

</script>

<!-- TODO: Add CSS using CSS variables instead of the static SASS generated one below!! -->
<!-- <style src="./menu.css" ></style> -->

<style src="css-circle-menu/css/circle-menu.css"></style>
