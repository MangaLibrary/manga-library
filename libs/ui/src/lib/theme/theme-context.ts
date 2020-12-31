/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { Context, createContext } from 'react';
import type { Theme } from '../types';
import { ThemeBuilder } from './theme-builder';

export const ThemeContext: Context<Theme> = createContext<Theme>(new ThemeBuilder().build());
