import util from './util';

export default function(ctx) {
  let mq = util.mq(ctx); 

  let obj = {
    __item: Object.assign({
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      width: ctx.menuItemDiameter,
      height: ctx.menuItemDiameter,
      'border-radius': ctx.menuItemRadius,
      opacity: 0,
      transition: 'transform, opacity',
      'transition-duration': '0.3s, 0.3s',
      'transition-timing-function': 'cubic-bezier(.35, -.59, .47, .97)'
    }, mq({
        width: mqDiam,
        height: mqDiam,
        'border-radius': mqDiam
    }))
  }

  let itemFirst = {
    '__item:nth-child(1)': Object.assign({
      'transition-delay': ctx.finalDelay
    }, active)
  }

  let itemLast = {
    [`__item:nth-child(${ctx.numItems})`]: {
      'transition-delay': '0s'
    },
    'is-active': active
  };

  itemsMiddle = {};
  delay = ctx.xInitialDelay;
  for (let i =2; i <= (thi.numItems - 1); i++) {
    itemsMiddle[`__item:nth-child(${i})`] = {
      'transition-delay': delay
    };
    delay = delay - ctx.delayIncrement;
  }

  let items = Object.assign(itemFirst, itemsMiddle, itemLast);
  obj = Object.assign(obj, items);
  return obj; 
}
  