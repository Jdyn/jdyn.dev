interface ContainerConfig {
  [name: string]: {
    width: string;
    backgroundColor: string;
    boxShadow: string;
    cursor?: string;
  };
}

export const containerConfig = (isOpen: boolean): any => ({
  from: {
    size: '20%',
    // backgroundColor: '#555aff',
    // boxShadow: '0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)'
  },
  to: {
    size: isOpen ? '100%' : "20%"
    // backgroundColor: isOpen ? '#353535' : '#555aff',
    // cursor: isOpen ? 'default' : 'pointer',
    // boxShadow: isOpen
    //   ? `0 0px 200px -20px rgba(0, 0, 0, 0.4), 0 30px 120px -30px rgba(0, 0, 0, 0.4)`
    //   : `0 0px 35px 0px rgba(0, 0, 0, 0.4), 0 30px 0px -30px rgba(0,0,0,.3)`
  }
});

interface ProjectConfig {
  [name: string]: {
    height: string;
    margin: string;
    transform: string;
    opacity: number;
  };
}

export const projectConfig = (isOpen: boolean): any => ({
  from: {
    // height: '0px',
    transform: 'scale(0)',
    // margin: '0px',
    opacity: 0
  },
  enter: {
    // height: isOpen ? '350px' : '0px',
    // margin: isOpen ? '10px' : '0px',
    transform: 'scale(1)', //isOpen ? 'scale(1)' : 'scale(0)',
    opacity: 1 //isOpen ? 1 : 0
  },
  leave: { opacity: 0, transform: 'scale(0)' }
});

interface LabelConfig {
  [name: string]: {
    opacity: number;
    height: string;
  };
}

export const labelConfig = (isOpen: boolean): LabelConfig => ({
  to: {
    opacity: isOpen ? 0 : 1,
    height: isOpen ? '0' : '60px'
  },
  from: {
    opacity: 0,
    height: '0px'
  }
});
