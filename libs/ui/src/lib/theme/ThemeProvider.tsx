/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import 'focus-visible';
import 'normalize.css';
import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import { Theme, ThemeContext } from './theme';

export interface ThemeProviderProps {
  theme: Theme;
  children: ReactNode | ReactNodeArray;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps): ReactElement {
  return (
    <ThemeContext.Provider value={theme}>
      {children}

      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :focus {
          outline: hotpink auto 1px;
        }

        :focus:not(:focus-visible) {
          outline: none;
        }

        :focus:not(:-moz-focusring) {
          outline: none;
        }

        .js-focus-visible *:focus:not(.focus-visible) {
          outline: none;
        }

        :root {
          font-size: 62.5%;
        }

        body {
          font-size: 1.6rem;
        }

        :root,
        body {
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}
