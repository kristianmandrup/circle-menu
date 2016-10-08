import circleMenu from './menu';

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

export default function(ctx) {
  let menu = circleMenu(ctx);  

  return {
    menu: menu,
    item: menu.item,
    items: menu.items,
    link: menu.link,
    toggle: toggle,
    mask: menu.mask
  }
}
