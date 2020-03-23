export interface ITheme {
  colors: {
    [key: string]: any;
  };
  space: Array<number>;
  fonts: {
    [key: string]: any;
  };
  fontSizes: Array<number>;
  shadows: Array<string>;
  breakpoints: Array<string>;
  radii: Array<number | string>;
  zIndices: Array<number>;
  buttons: {
    [key: string]: any;
  };
  inputs: {
    [key: string]: any;
  };
  tabs: {
    [key: string]: any;
  };
}

export const colors = {
  text: {
    primary: '#212121',
    secondary: '#424242',
    light: '#757575'
  },
  background: {
    primary: '#fff',
    secondary: '#F4F5F6'
  },
  black: ['#212121', '#424242', '#606060'],
  gray: ['#757575', '#D9DBDC', '#EEF0F2', '#F4F5F6', '#FAFAFB']
};

export const spaceDefaults = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const shadowDefaults = [
  'none',
  '0px 1px 5px rgba(0,0,0,0.12)',
  '0px 3px 15px rgba(0,0,0,0.12)'
];

export const radii = [0, 6, 28, '50%'];

export const zIndices = [
  0,
  1, // Overlays
  2, // Drawer
  3, // Navbar
  1000 // Modal
];

export const breakpoints = [
  '420px', // mobile phones
  '780px', // small tablets, large phones
  '840px', // tablets
  '1200px', // small laptops and tablet landsacpes
  '1500px', // mid-size laptops
  '1920px' // large laptops
];

export const fonts = {
  body:
    "-apple-system,BlinkMacSystemFont,'Segoe UI','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif"
};

export const fontSizeDefaults = [12, 14, 16, 20, 24, 32, 48, 64, 72];

export const baseTheme: ITheme = {
  space: spaceDefaults,
  fonts: fonts,
  fontSizes: fontSizeDefaults,
  shadows: shadowDefaults,
  colors: colors,
  breakpoints: breakpoints,
  radii: radii,
  zIndices: zIndices,
  buttons: {
    void: {
      background: 'none'
    },
    basic: {
      background: 'none',
      '&:hover': {
        backgroundColor: colors.background.secondary
      }
    },
    primary: {
      backgroundColor: colors.black[1],
      color: '#fff',
      '&:hover': {
        backgroundColor: colors.black[2]
      }
    },
    outline: {
      primary: {
        color: colors.black[1],
        border: `1px solid ${colors.black[1]}`,
        '&:hover': {
          backgroundColor: colors.black[1],
          color: '#fff'
        }
      }
    }
  },
  inputs: {
    outline: {
      border: '1px solid',
      borderColor: colors.gray[1],
      color: colors.black,
      transition: 'border-color .25s ease',
      '&:hover': {
        borderColor: colors.black[2]
      },
      '&:focus': {
        borderColor: colors.black[1],
        boxShadow: '0 0 0 2px rgba(66,66,66,.3)'
      }
    }
  },
  tabs: {
    basic: {
      color: colors.text.light,
      '&:hover': {
        color: colors.black[0]
      },
      activeStyles: {
        color: colors.black[0]
      }
    },
    outline: {
      color: colors.text.light,
      '&:hover': {
        color: colors.black[0]
      },
      activeStyles: {
        color: colors.black[0],
        '&::after': {
          bottom: 0,
          right: 0,
          left: 0,
          position: 'absolute',
          content: '""',
          height: '2px',
          width: '100%',
          backgroundColor: colors.black[0]
        }
      }
    },
    solid: {
      color: colors.text.light,
      padding: `8px 16px`,
      borderRadius: radii[1],
      '&:hover': {
        color: colors.black[0]
      },
      activeStyles: {
        color: colors.black[0],
        backgroundColor: colors.gray[3]
      }
    }
  }
};
