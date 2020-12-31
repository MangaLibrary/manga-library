/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { Ui, UiProps } from './ui';

export default {
  component: Ui,
  title: 'Ui',
};

export const primary = () => {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  const props: UiProps = {};

  return <Ui />;
};
