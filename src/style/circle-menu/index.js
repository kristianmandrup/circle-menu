
export default function() {
    // .c-circle-menu
    let main = Object.assign(this.menuPosition, {
      position: 'fixed',
      'z-index': 1000,
      width: this.menuItemDiameter,
      height: this.menuItemDiameter,
      'border-radius': this.menuItemRadius
    }, this.mq({
        width: mqDiam,
        height: mqDiam,
        'border-radius': mqDiam
      })
    )

  return obj; 
}