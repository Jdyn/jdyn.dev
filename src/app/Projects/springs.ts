import { SpringRef, UseSpringProps } from '@react-spring/web';

export const containerConfig = (isOpen: boolean, ref: SpringRef) => ({
  ref,
  from: {
    width: '0%',
    backgroundColor: '#555aff'
  },
  to: {
    width: isOpen ? '100%' : '15%',
    backgroundColor: isOpen ? '#353535' : '#555aff',
    cursor: isOpen ? 'default' : 'pointer'
  }
});

export const projectConfig = (isOpen: boolean, trailLength: number) => ({
  trail: 400 / trailLength,
  unique: true,
  from: {
    height: '0px',
    transform: 'scale(0)',
    margin: '0px',
    opacity: 0
  },
  update: {
    height: isOpen ? '350px' : '0px',
    margin: isOpen ? '10px' : '0px',
    transform: isOpen ? 'scale(1)' : 'scale(0)',
    opacity: isOpen ? 1 : 0
  }
});

export const labelConfig = (isOpen: boolean): UseSpringProps => ({
  to: {
    opacity: isOpen ? 0 : 1,
    height: isOpen ? '0' : '50px'
  },
  from: {
    opacity: 0,
    height: '0px'
  }
});
