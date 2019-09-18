import { RefObject } from 'react';
import { UseSpringProps, SpringHandle, UseTransitionProps } from 'react-spring';
import { Project } from '../../lib/projects';

export const containerConfig = (isOpen: boolean, ref: RefObject<SpringHandle>): UseSpringProps => ({
  ref,
  from: {
    width: '0%',
    backgroundColor: '#555aff',
    boxShadow: '0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)'
  },
  to: {
    width: isOpen ? '100%' : '15%',
    backgroundColor: isOpen ? '#353535' : '#555aff',
    cursor: isOpen ? 'default' : 'pointer',
    boxShadow: isOpen
      ? `0 0px 200px -20px rgba(0, 0, 0, 0.4), 0 30px 120px -30px rgba(0, 0, 0, 0.4)`
      : `0 0px 35px 0px rgba(0, 0, 0, 0.4), 0 30px 0px -30px rgba(0,0,0,.3)`
  }
});

export const projectConfig = (
  isOpen: boolean,
  ref: RefObject<SpringHandle>,
  trailLength: number
): UseTransitionProps<Project> | { ref: RefObject<SpringHandle> } => ({
  ref,
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
    height: isOpen ? '0' : '60px'
  },
  from: {
    opacity: 0,
    height: '0px'
  }
});
