/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';
import { ThemeContext } from '../theme';
import type { Theme } from '../types';

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};
