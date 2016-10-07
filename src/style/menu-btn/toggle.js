import span from './span';

function inner(ctx) {
  let onFocus = {
    outline: 'none',
    'background-color': `darken(${ctx.menuThemeColor}, 20%)`
  }

  return {
    span: span,
    ':hover': onFocus,
    ':focus': onFocus,
    '.is-active': onFocus
  }
}

export default function(ctx) {
  return Object.assign({
    display: 'block',
    position: 'absolute',
    'z-index': 100,
    margin: 0,
    padding: 0,
    width: ctx.menuItemDiameter,
    height: ctx.menuItemDiameter,
    'background-color': ctx.menuThemeColor,
    font: 'inherit',
    'font-size': 0,
    'text-indent': '-9999px',
    'border-radius': ctx.menuItemRadius,
    transition: 'background 0.3s',

    /* reset some browser defaults */
    cursor: 'pointer',
    border: 'none',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
    appearance: 'none',
    'box-shadow': 'none'
  },
  mq({
      width: ctx.menuItemDiameter * 2,
      height: ctx.menuItemDiameter * 2,
      'border-radius': $menu-item-radius * 2
  }),
  inner(ctx)
  );
}

