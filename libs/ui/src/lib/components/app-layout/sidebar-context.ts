/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { Context, createContext } from 'react';
import type { Sidebar } from '../../types';

/* eslint-disable @typescript-eslint/no-empty-function */
export const SidebarContext: Context<Sidebar> = createContext<Sidebar>({
  isOpen: false,
  open() {},
  close() {},
  toggle() {},
});
/* eslint-enable @typescript-eslint/no-empty-function */
