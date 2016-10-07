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
  // import color from 'rgb';

  export default {
    props: {
      items: {
          type: Array,
          default: function () {
              eturn items;
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
      cCircleMenu: cCircleMenu      
    },
    mounted: () => {
      cssCircleMenu('.js-menu');
    }
  };
</script>

<style src="../node_modules/css-circle-menu/css/circle-menu.css"></style>
