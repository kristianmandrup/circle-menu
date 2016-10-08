let mask = {
  position: 'fixed',
  top: '0',
  left: '0',
  'z-index': '1',
  visibility: 'hidden',
  opacity: '0',
  width: '100%',
  height: '100%',
  'background-color': 'rgba(0, 0, 0, 0.8)',
  transition: 'opacity 0.3s, visibility 0.3s'
}

export default {
  mask: mask,
  '.is-active': {
    opacity: 1,
    visibility: 'visible'
  }
};
