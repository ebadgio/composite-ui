export const colors = {
  white: '#fff',
  black: '#212121',
  black60: '#424242',
  black40: '#606060',
  gray: '#757575',
  gray80: '#D9DBDC',
  gray60: '#EEF0F2',
  gray40: '#F4F5F6',
  gray20: '#FAFAFB'
};

export const spaceDefaults = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const fontSizeDefaults = [12, 14, 16, 20, 24, 32, 48, 64, 72];
export const shadowDefaults = [
  'none',
  '0px 1px 5px rgba(0,0,0,0.12)',
  '0px 3px 10px rgba(0, 0, 0, 0.06)'
];

export const baseTheme = {
  space: spaceDefaults,
  fontSizes: fontSizeDefaults,
  shadows: shadowDefaults,
  colors: colors,
  buttons: {
    primary: {
      backgroundColor: colors.black60,
      color: colors.white,
      '&:hover': {
        backgroundColor: colors.black40
      }
    }
  },
  inputs: {
    outline: {
      border: '1px solid',
      backgroundColor: colors.gray20,
      borderColor: colors.gray80,
      color: colors.black,
      transition: 'border-color .25s ease',
      '&:hover': {
        borderColor: colors.gray
      },
      '&:focus': {
        borderColor: colors.gray
      }
    }
  },
  tabs: {
    basic: {
      '&:hover': {
        color: colors.black60
      },
      activeStyles: {
        color: colors.black60
      }
    },
    outline: {
      '&:hover': {
        color: colors.black
      },
      activeStyles: {
        color: colors.black,
        '&::after': {
          bottom: 0,
          right: 0,
          left: 0,
          position: 'absolute',
          content: '""',
          height: '2px',
          width: '100%',
          backgroundColor: colors.black
        }
      }
    },
    solid: {
      borderRadius: '4px',
      '&:hover': {
        color: colors.black
      },
      activeStyles: {
        color: colors.black,
        backgroundColor: colors.gray40
      }
    }
  }
};
