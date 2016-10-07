import { mq } from '../util';

function span(ctx) {
  let obj = Object. assign({
      display: 'block',
      position: 'absolute',
      height: ctx.buttonBarHeight,
      background: '#fff',
      'border-radius': ctx.buttonBarHeight / 4
    },
    mq({
      height: ctx.buttonBarHeight * 2,
      'border-radius': (ctx.buttonBarHeight * 2) / 4
    })
  );

  return {
    span: obj,
    'span::before': obj,
    'span::after': obj
  }
}

function span2(ctx) {
  let obj = Object.assign({
      top: ctx.menuItemRadius - ctx.buttonBarHeight / 2,
      left: ctx.buttonLrPadding,
      right: ctx.buttonLrPadding,
      transition: 'background 0.3s'
    },
    mq({
      top: (ctx.menuItemRadius * 2) - (ctx.buttonBarHeight * 2) / 2,
      left: ctx.buttonLrPadding * 2,
      right: ctx.buttonLrPadding * 2
    })
  )

  let befAfter = {
    left: 0,
    width: '100%',
    content: '',
    'transition-duration': '0.3s, 0.3s',
    'transition-delay': '0.3s, 0s'
  }

  let before = bject.assign({
      top: - ctx.buttonBarHeight - ctx.buttonBarSpacing,
      'transition-property': 'top, transform',
    },
    mq({
      top: -(ctx.buttonBarHeight * 2) - (ctx.buttonBarSpacing * 2);
    })
  )

  let after = Object.assign({
      bottom: - ctx.buttonBarHeight - ctx.buttonBarSpacing,
      'transition-property': 'bottom, transform'
    },
    mq({
      bottom: -(ctx.buttonBarHeight * 2) - (ctx.buttonBarSpacing * 2);
    })
  );

  return {
    span: obj,
    'span::before': Object.assign(befAfter, before),
    'span::after': Object.assign(befAfter, after),
  }
}

/* button active state */
function isActive(ctx) {
  return {
    span: {
      background: 'none'
    },
    'span::before': {
      top: 0,
      transform: 'rotate(45deg)',
      'transition-delay': '0s, 0.3s'
    },
    'span::after': {
      bottom: 0,
      transform: 'rotate(-45deg)',
      'transition-delay': '0s, 0.3s'
    }
  };
} 