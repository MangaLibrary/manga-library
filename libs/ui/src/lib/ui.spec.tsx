/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Ui } from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui />);
    expect(baseElement).toBeTruthy();
  });
});
