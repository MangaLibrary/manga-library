/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, ReactNodeArray } from 'react';

export interface UiProps {
  children?: ReactNode | ReactNodeArray;
}

export function Ui({ children }: UiProps) {
  return (
    <div>
      <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
      <h1>Welcome to ui!</h1>
      {children}
    </div>
  );
}
