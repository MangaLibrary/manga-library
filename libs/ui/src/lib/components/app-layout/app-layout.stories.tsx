/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { AppLayout } from './app-layout';

export default {
  title: 'Layout/Layout',
  component: AppLayout,
  argTypes: {
    children: { control: 'text' },
  },
};

export const example = ({ children }) => {
  return (
    <>
      <AppLayout>{children}</AppLayout>

      <style type="text/css">{`
        body, #root {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </>
  );
};
