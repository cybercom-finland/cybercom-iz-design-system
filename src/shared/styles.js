import { css } from 'styled-components';
// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

// Cybercom Specific Colors
// Use these colors when you start to build our own component
export const colors = {
  primary: {
    CCPurple: "#713188",
    CCBlue:"#015599"
  },
  secondary: {
    CCDarkPurple:"#3f194d",
    CCLightPurple: "#eee6f1",
    CCDarkBlue:"#0a3355",
    CCLightBlue:"#e1ebf3"
  },
  neutral: {
    Gray1:"#333333",
    Gray2:"#4f4f4f",
    Gray3:"#828282",
    Gray4:"#bdbdbd",
    Gray5:"#e0e0e0",
    Gray6:"#f2f2f2",
    Gray7:"#f3f7f9",
    CCWhite:"#FFFFFF"
  },
  semantic: {
    CCRed: "#cc142f",
    CCRedLight: "#feebee"
  }

}

// These are colors which are used in example component,
// So, when you start creating component, use the colors above
// Will delete these colors in the future
export const color = {
  // Palette
  primary: '#FF4785', // coral
  secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: 'Source Sans Pro',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    semibold: '600',
    bold: '700',
    black: '900',
  },

  size: {
    s1: '12px',
    s2: '14px',
    s3: '16px',
    m1: '20px',
    m2: '24px',
    m3: '28px',
    l1: '36px',
    l2: '40px',
    l3: '48px',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

const size= {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
}
