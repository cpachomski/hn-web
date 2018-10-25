export const transition = {
  curve: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  duration: '1s'
};

export const colors = {
  beige: '#f6f6ef',
  black: '#000000',
  gray: '#828282',
  orange: '#ff6600',
  white: '#ffffff'
};

export const themes = {
  light: {
    transition,
    name: 'light',
    bkg: colors.white,
    txt: {
      main: colors.black,
      loud: colors.orange,
      quiet: colors.gray
    }
  },
  dark: {
    transition,
    name: 'dark',
    bkg: colors.black,
    txt: {
      main: colors.white,
      loud: colors.orange,
      quiet: colors.gray
    }
  }
};
