/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

export const noExtraProps = (value: Record<any, any>, props: ReadonlyArray<string>): boolean => {
  return Object.keys(value).every((key: string) => props.includes(key));
};
