/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AppHeader } from './app-header';

export default {
  title: 'Layout/Header',
  component: AppHeader,
  argTypes: {
    children: { control: 'text' },
  },
};

export const example = ({ children }) => {
  return <AppHeader>{children}</AppHeader>;
};
