export interface ITheme {
  colors: {
    [key: string]: any;
  };
  space: Array<number>;
  fontSizes: Array<number>;
  shadows: Array<string>;
  breakpoints: Array<number>;
  buttons: {
    [key: string]: any;
  };
  input: {
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
export const fontSizeDefaults = [12, 14, 16, 20, 24, 32, 48, 64, 72];
export const shadowDefaults = [
  'none',
  '0px 1px 5px rgba(0,0,0,0.12)',
  '0px 3px 10px rgba(0, 0, 0, 0.06)'
];

export const breakpoints = [
  420, // mobile phones
  780, // small tablets, large phones
  840, // tablets
  1200, // small laptops and tablet landsacpes
  1500, // mid-size laptops
  1920 // large laptops
];

export const baseTheme = {
  space: spaceDefaults,
  fontSizes: fontSizeDefaults,
  shadows: shadowDefaults,
  colors: colors,
  breakpoints: breakpoints,
  buttons: {
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
      '&:hover': {
        color: colors.black[0]
      },
      activeStyles: {
        color: colors.black[0]
      }
    },
    outline: {
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
      padding: `8px 16px`,
      borderRadius: '4px',
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
