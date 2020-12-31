/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

const prefixedVar = (name) => `var(--mlui-${name})`;

const colorVar = (variant, hue) => prefixedVar(`colors-${variant}-${hue}`);

const getColor = (variant) =>
  [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (color, hue) => ({
      ...color,
      [hue]: colorVar(variant, hue),
    }),
    {},
  );

const zIndexVar = (name) => prefixedVar(`z-index-${name}`);

const themeExtensions = {
  colors: {
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
    primary: getColor('primary'),
    secondary: getColor('secondary'),
    success: getColor('success'),
    danger: getColor('danger'),
    warning: getColor('warning'),
    info: getColor('info'),
  },
  borderRadius: {
    inherit: 'inherit',
  },
  maxHeight: {
    none: 'none',
  },
  zIndex: {
    button: zIndexVar('button'),
    'button-label': zIndexVar('button-label'),
    'ripple-effect': zIndexVar('ripple-effect'),
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
};

module.exports = {
  theme: {
    extend: themeExtensions,
  },
  plugins: [],
};
