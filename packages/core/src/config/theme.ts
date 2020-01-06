const colorDefaults = {
  black: ['#212121', '#424242', '#606060'],
  gray: ['#C3C5C7', '#D9DBDC', '#EEF0F2', '#F4F5F6', '#FAFAFB']
};

const spaceDefaults = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const fontSizeDefaults = [12, 14, 16, 20, 24, 32, 48, 64, 72];

export const BaseTheme = {
  space: spaceDefaults,
  fontSizes: fontSizeDefaults,
  colors: colorDefaults,
  buttons: {
    primary: {
      backgroundColor: colorDefaults.black[1],
      color: '#fff',
      '&:hover': {
        backgroundColor: colorDefaults.black[2]
      }
    }
  },
  inputs: {
    outline: {
      border: '1px solid',
      backgroundColor: colorDefaults.gray[3],
      borderColor: colorDefaults.gray[1],
      color: colorDefaults.black[0],
      transition: 'border-color .25s ease',
      '&:hover': {
        borderColor: colorDefaults.gray[0]
      },
      '&:focus': {
        borderColor: colorDefaults.gray[0]
      }
    }
  }
};
