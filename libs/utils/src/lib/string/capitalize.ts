/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

export const capitalize = (value: string): string => {
  return value
    .split(' ')
    .map((word: string): string => {
      return `${word[0].toLocaleUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
};
