export default function(ctx) {
  let link = Object.assign({
      display: 'block',
      width: '100%',
      height: '100%',
      'border-radius': ctx.menuItemRadius,
      'box-shadow': 'inset 0 0 0 2px #fff'
    },
    mq({
      'border-radius': ctx.menuItemRadius * 2
    })
  )

  let img = {
    display: 'block',
    'max-width': '100%',
    height: 'auto'
  };

  let hover = {
    'box-shadow': `inset 0 0 0 2px ${ctx.menuThemeColor}`
  }

  return Object.assign(link,
    {
      img: img,
      ':hover': hover
    }
  );
}
