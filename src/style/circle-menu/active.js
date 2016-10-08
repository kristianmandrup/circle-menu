import util, { _90deg, translateMenuItem } from '../util';

export default function(ctx) {
  let mq = util.mq(ctx); 

  let isActive = {};

  isActive[0] = Object.assign(
    translateMenuItem(ctx.spreadRadius, 0, 'first'),
    mq(
      translateMenuItem(ctx.spreadRadius * 2, 0, 'first')
    ), {
    'transition-delay': '0s',
  });

  let delay = ctx.initialDelay;
  let angle = ctx.angle;
  for (let i=2; i <= (ctx.numItems - 1); i++) {

    isActive[i] = Object.assign({
      'transition-delay': delay
      }, 
      translateMenuItem(ctx.spreadRadius, ctx.angle, ''),
      mq(translateMenuItem(ctx.spreadRadius * 2, angle, '')
    ))

    delay = delay + delayIncrement;
    angle = angle + increment;
  }
    
  isActive[ctx.numItems] = Object.assign({
      'transition-delay': ctx.finalDelay
    },
    translateMenuItem(ctx.spreadRadius, _90deg, 'last'),
    mq(translateMenuItem(ctx.spreadRadius * 2, _90deg, 'last'))
  )                    

  return isActive;
}

