function translateMenuItem($r, $theta, $n) {
  if ($menuPos == "bottom-right") {
    if ($n == "first") {
      return `transform: translate(${-$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${-$r});`
    } else {
      return `transform: translate(${Math.floor(-$r) * Math.cos($theta)}), ${Math.floor(-$r * Math.sin($theta))});`
    }
  }

  if ($menuPos == "bottom-left") {
    if ($n == "first") {
      return `transform: translate(${$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${-$r});`
    } else {
      return `transform: translate(${Math.floor($r * cos($theta))}, ${Math.floor(-$r * sin($theta))});`
    }
  }

  if ($menuPos == "top-left") {
    if ($n == "first") {
      return `transform: translate(${$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${$r});`
    } else {
      return `transform: translate(${Math.floor($r * Math.cos($theta))}, ${Math.floor($r * Math.sin($theta))})`;
    }
  }

  if ($menuPos == "top-right") {
    if ($n == "first") {
      return `transform: translate(${-$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${$r});`
    } else {
      return `transform: translate(${Math.floor(-$r * Math.cos($theta))}, ${Math.floor($r * Math.sin($theta))});`
    }
  }
}

export default function(ctx) {
  let mqDiam = parseInt(ctx.menuItemDiameter) * 2
  mqDiam = `${mqDiam}px`;

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