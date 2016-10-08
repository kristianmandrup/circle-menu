export default function(ctx) {
  // by binding to this, we make ctx accessible from within 
  // the pos variant of translateMenuItem function as if it was defined right here!
  let translateMenuItem = require('./translateMenuItem').str.bind(this);

  let mqDiam = parseInt(ctx.menuItemDiameter) * 2
  mqDiam = `${mqDiam}px`;

  // NOTICE: this is not really possible!!!
  // Instead use special media query plugin:
  // https://www.npmjs.com/package/v-media-query

  function mq(content) {
    return `@media (min-width: ${ctx.minWidth}) and (min-height: ${ctx.minHeight}) { 
      ${content};
    }`;
  }

  return {
    _90deg: 1.5708,
    mq: mq(ctx),
    mqDiam: mqDiam,
    translateMenuItem: translateMenuItem
  }
};