/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

const prefix = (name) => `--mlui-${name}`;

const colors = {
  light: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#ffffff',
    500: '#f8fafb',
    600: '#eef0f1',
    700: '#e4e6e7',
    800: '#dadcdd',
    900: '#d0d2d3',
  },
  primary: {
    50: `var(${prefix('colors-primary-50')})`,
    100: `var(${prefix('colors-primary-100')})`,
    200: `var(${prefix('colors-primary-200')})`,
    300: `var(${prefix('colors-primary-300')})`,
    400: `var(${prefix('colors-primary-400')})`,
    500: `var(${prefix('colors-primary-500')})`,
    600: `var(${prefix('colors-primary-600')})`,
    700: `var(${prefix('colors-primary-700')})`,
    800: `var(${prefix('colors-primary-800')})`,
    900: `var(${prefix('colors-primary-900')})`,
  },
  secondary: {
    50: `var(${prefix('colors-secondary-50')})`,
    100: `var(${prefix('colors-secondary-100')})`,
    200: `var(${prefix('colors-secondary-200')})`,
    300: `var(${prefix('colors-secondary-300')})`,
    400: `var(${prefix('colors-secondary-400')})`,
    500: `var(${prefix('colors-secondary-500')})`,
    600: `var(${prefix('colors-secondary-600')})`,
    700: `var(${prefix('colors-secondary-700')})`,
    800: `var(${prefix('colors-secondary-800')})`,
    900: `var(${prefix('colors-secondary-900')})`,
  },
  success: {
    50: `var(${prefix('colors-success-50')})`,
    100: `var(${prefix('colors-success-100')})`,
    200: `var(${prefix('colors-success-200')})`,
    300: `var(${prefix('colors-success-300')})`,
    400: `var(${prefix('colors-success-400')})`,
    500: `var(${prefix('colors-success-500')})`,
    600: `var(${prefix('colors-success-600')})`,
    700: `var(${prefix('colors-success-700')})`,
    800: `var(${prefix('colors-success-800')})`,
    900: `var(${prefix('colors-success-900')})`,
  },
  danger: {
    50: `var(${prefix('colors-danger-50')})`,
    100: `var(${prefix('colors-danger-100')})`,
    200: `var(${prefix('colors-danger-200')})`,
    300: `var(${prefix('colors-danger-300')})`,
    400: `var(${prefix('colors-danger-400')})`,
    500: `var(${prefix('colors-danger-500')})`,
    600: `var(${prefix('colors-danger-600')})`,
    700: `var(${prefix('colors-danger-700')})`,
    800: `var(${prefix('colors-danger-800')})`,
    900: `var(${prefix('colors-danger-900')})`,
  },
  warning: {
    50: `var(${prefix('colors-warning-50')})`,
    100: `var(${prefix('colors-warning-100')})`,
    200: `var(${prefix('colors-warning-200')})`,
    300: `var(${prefix('colors-warning-300')})`,
    400: `var(${prefix('colors-warning-400')})`,
    500: `var(${prefix('colors-warning-500')})`,
    600: `var(${prefix('colors-warning-600')})`,
    700: `var(${prefix('colors-warning-700')})`,
    800: `var(${prefix('colors-warning-800')})`,
    900: `var(${prefix('colors-warning-900')})`,
  },
  info: {
    50: `var(${prefix('colors-info-50')})`,
    100: `var(${prefix('colors-info-100')})`,
    200: `var(${prefix('colors-info-200')})`,
    300: `var(${prefix('colors-info-300')})`,
    400: `var(${prefix('colors-info-400')})`,
    500: `var(${prefix('colors-info-500')})`,
    600: `var(${prefix('colors-info-600')})`,
    700: `var(${prefix('colors-info-700')})`,
    800: `var(${prefix('colors-info-800')})`,
    900: `var(${prefix('colors-info-900')})`,
  },
};

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      zIndex: {
        button: `var(${prefix('z-index-button')})`,
        'button-label': `var(${prefix('z-index-button-label')})`,
        'ripple-effect': `var(${prefix('z-index-ripple-effect')})`,
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
      },
    },
  },
  plugins: [],
};
