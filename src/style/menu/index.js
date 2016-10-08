import util from '../util';
import item from './item';
import items from './items';
import link from './link';
import active from './active';
import toggle from './toggle';

function menu(ctx, mqDiam) {
  return Object.assign(ctx.menuPosition, {
    position: 'fixed',
    'z-index': 1000,
    width: ctx.menuItemDiameter,
    height: ctx.menuItemDiameter,
    'border-radius': ctx.menuItemRadius
  }, mq({
      width: mqDiam,
      height: mqDiam,
      'border-radius': mqDiam
    })
  ); 
}

export default function(ctx) {
  let mqDiam = util.mqDiam(ctx);

  return {
    menu: menu(ctx, mqDiam),
    item: item(ctx),
    items: items(ctx),
    link: link(ctx),
    toggle: toggle(ctx),
    active: active(ctx)
  }  
}