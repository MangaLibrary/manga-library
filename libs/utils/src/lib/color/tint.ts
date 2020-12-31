/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { TinyColor } from '@ctrl/tinycolor';

export const tint = (color: string, amount: number): string => {
  return new TinyColor(color).tint(amount).toString() || color;
};
