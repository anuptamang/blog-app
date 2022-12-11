
type StylesProps = {
  global: {},
  primary: {},
  secondary?: {},
  danger?: {},
  success?: {},
}

export const styles: StylesProps = {
  global: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
    border: 0,
    margin: 0,
    background: 'none',
    fontWeight: 700,
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '30px',
    paddingRight: '30px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s linear',
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    gap: '10px',

    '&:disabled': {
      pointerEvents: 'none',
      // opacity: 0.5,
    },


  },



  primary: {
    color: '#fff',
    bg: '#5458F7',
    '&:hover': {
      backgroundColor: '#4347d4',
    },
    '&.active': {
      backgroundColor: '#5458F8',
    },
  },
}
