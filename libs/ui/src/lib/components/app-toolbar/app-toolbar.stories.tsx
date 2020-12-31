/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AppToolbar } from './app-toolbar';

export default {
  title: 'Layout/Toolbar',
  component: AppToolbar,
  argTypes: {
    content: { control: 'text' },
  },
};

export const example = ({ content, variant }) => {
  return (
    <>
      <AppToolbar variant={variant}>{content}</AppToolbar>
      <AppToolbar variant="secondary">{content}</AppToolbar>
    </>
  );
};
