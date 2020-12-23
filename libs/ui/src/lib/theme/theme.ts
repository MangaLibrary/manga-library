/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { Context, createContext, useContext } from 'react';

export interface Color {
  $50: string;
  $100: string;
  $200: string;
  $300: string;
  $400: string;
  $500: string;
  $600: string;
  $700: string;
  $800: string;
  $900: string;
}

export interface Colors {
  primary: Color;
  accent: Color;
  info: Color;
  warn: Color;
  error: Color;
}

export interface Theme {
  colors?: Colors;
}

export const defaultTheme = Object.freeze<Theme>({});

export const ThemeContext: Context<Theme> = createContext<Theme>(defaultTheme);

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};
