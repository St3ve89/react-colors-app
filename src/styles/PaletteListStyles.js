import sizes from './sizes';

export default {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    desplay: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%'
    },
    [sizes.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    '& a': {
      color: 'white'
    }
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1rem'
    }
  }
};
