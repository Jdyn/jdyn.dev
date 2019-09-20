import { RefObject } from 'react';
import { UseSpringProps, SpringHandle, UseTransitionProps } from 'react-spring';
import { Project } from '../../lib/projects';

export const containerConfig = (isOpen: boolean, ref: RefObject<SpringHandle>): UseSpringProps => ({
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
