import circleMenu from './circle-menu';
import menuBtn from './menu-btn';

// <template>
//     <nav class="menu js-menu">
//     <button class="toggle js-menu-toggle">
//         <span>Toggle</span>
//     </button>
//     <ul class="items">
//         <li class="item" v-for="item in items">
//         <a href="#" class="link">
//             <img :src="item.path" alt="">
//         </a>
//         </li>
//         <!-- more items here -->
//     </ul>
//     <div class="mask js-menu-mask"></div>
//     </nav>
// </template>

export default {
  menu: circleMenu,
  item: circleMenu.item,
  items: circleMenu.items,
  link: circleMenu.link,
  toggle: circleMenu.toggle,
  mask: circleMenu.mask
}