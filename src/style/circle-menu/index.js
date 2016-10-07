import util from '../util';

export default function(ctx) {
  let mqDiam = util.mqDiam(ctx);

  // .c-circle-menu
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