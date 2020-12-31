/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { shade, tint } from '@manga-library/utils';

import { Theme, ThemeColor } from '../types';

const genThemeColor = (color: string): ThemeColor => {
  return {
    50: tint(color, 90),
    100: tint(color, 80),
    200: tint(color, 60),
    300: tint(color, 40),
    400: tint(color, 20),
    500: color,
    600: shade(color, 20),
    700: shade(color, 40),
    800: shade(color, 60),
    900: shade(color, 80),
  };
};

class ThemeDefaults {
  get SCREENS(): Theme['screens'] {
    return Object.freeze({
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    });
  }

  get SPACING(): Theme['spacing'] {
    return Object.freeze({
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    });
  }

  get FONT_FAMILY(): Theme['fontFamily'] {
    return Object.freeze({
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    });
  }

  get FONT_SIZE(): Theme['fontSize'] {
    return Object.freeze({
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    });
  }

  get FONT_WEIGHT(): Theme['fontWeight'] {
    return Object.freeze({
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    });
  }

  get LINE_HEIGHT(): Theme['lineHeight'] {
    return Object.freeze({
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    });
  }

  get COLORS(): Theme['colors'] {
    return Object.freeze({
      primary: Object.freeze(genThemeColor('#208cd0')),
      secondary: Object.freeze(genThemeColor('#f04025')),
      success: Object.freeze(genThemeColor('#3fa576')),
      danger: Object.freeze(genThemeColor('#f44336')),
      warning: Object.freeze(genThemeColor('#f2af20')),
      info: Object.freeze(genThemeColor('#126093')),
    });
  }

  get Z_INDEX(): Theme['zIndex'] {
    return Object.freeze({
      button: '0',
      buttonLabel: '0',
      rippleEffect: '-1',
    });
  }
}

export const THEME_DEFAULTS = Object.freeze(new ThemeDefaults());
