function rightCos($r, $theta) {
  return Math.floor(- $r) * Math.cos($theta);
}

function bottomSin($r, $theta) {
  return Math.floor(-$r * Math.sin($theta);
}

function leftCos($r, $theta) {
  return Math.floor($r * cos($theta);
}

function topSin($r, $theta) {
  return Math.floor($r * Math.sin($theta));
}

// This is likely the best function to be used in the end
// we can use it to compute the x/y of the translate and then create
// CSS variables from these to be used for translation
function posTranslateMenuItem($r, $theta, $n) {
  if (ctx.menuPos == 'bottom-right') {
    switch ($n) {
      case 'first': return {x: -$r, y: 0};
      case 'last': return {x: 0, y: -$r};
      default: return {x: rightCos($r, $theta), y: bottomSin($r, $theta)}
  }

  if (ctx.menuPos == 'bottom-left') {
    switch ($n) {
      case 'first': return {x: $r, y: 0};
      case 'last': return {x: 0, y: -$r};
      default: return {x: leftCos($r, $theta), y: bottomSin($r, $theta)}
  }

  if (ctx.menuPos == 'top-left') {
    switch ($n) {
      case 'first': return {x: $r, y: 0};
      case 'last': return {x: 0, y: $r};
      default: return {x: leftCos($r, $theta), y: topSin($r, $theta)}
  }

  if (ctx.menuPos == 'top-right') {
    switch ($n) {
      case 'first': return {x: -$r, y: 0};
      case 'last': return {x: 0, y: $r};
      default: return {x: rightCos($r, $theta), y: topSin($r, $theta)}
  }
}


function strTranslateMenuItem($r, $theta, $n) {
  if (ctx.menuPos == "bottom-right") {
    if ($n == "first") {
      return `transform: translate(${-$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${-$r});`
    } else {
      return `transform: translate(${Math.floor(-$r) * Math.cos($theta)}), ${Math.floor(-$r * Math.sin($theta))});`
    }
  }

  if (ctx.menuPos == "bottom-left") {
    if ($n == "first") {
      return `transform: translate(${$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${-$r});`
    } else {
      return `transform: translate(${Math.floor($r * cos($theta))}, ${Math.floor(-$r * sin($theta))});`
    }
  }

  if (ctx.menuPos == "top-left") {
    if ($n == "first") {
      return `transform: translate(${$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${$r});`
    } else {
      return `transform: translate(${Math.floor($r * Math.cos($theta))}, ${Math.floor($r * Math.sin($theta))})`;
    }
  }

  if (ctx.menuPos == "top-right") {
    if ($n == "first") {
      return `transform: translate(${-$r}, 0);`
    } else if ($n == "last") {
      return `transform: translate(0, ${$r});`
    } else {
      return `transform: translate(${Math.floor(-$r * Math.cos($theta))}, ${Math.floor($r * Math.sin($theta))});`
    }
  }
}

export default {
  str: strTranslateMenuItem,
  pos: posTranslateMenuItem
}
