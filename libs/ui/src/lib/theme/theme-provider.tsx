/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { ThemeProvider } from '@emotion/react';
import 'focus-visible';
import React, { ReactNode } from 'react';
import { useDarkMode } from '../hooks';
import type { Theme } from '../types';
import { GlobalStyles } from './global-styles';
import { ThemeContext } from './theme-context';

export interface ThemeProviderProps {
  theme: Theme;
  darkTheme?: Theme;
  children?: ReactNode;
}

export function MlUiThemeProvider(props: ThemeProviderProps) {
  const { theme: lightTheme, darkTheme = lightTheme, children = null }: ThemeProviderProps = props;

  const isDarkMode: boolean = useDarkMode();

  const theme: Theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
