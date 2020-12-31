/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { Context, createContext } from 'react';
import { Sidebar } from '../../types';

export const AppLayoutSidebarContext: Context<Sidebar> = createContext<Sidebar>(
  new (class Sidebar {
    isOpen: boolean = false;
    public open(): void {
      this.isOpen = true;
    }

    public close(): void {
      this.isOpen = false;
    }

    public toggle(): void {
      this.isOpen ? this.close() : this.open();
    }
  })(),
);
