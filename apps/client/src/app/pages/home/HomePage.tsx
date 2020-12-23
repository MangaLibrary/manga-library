/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { Button, useTheme } from '@manga-library/ui';
import React, { ReactElement } from 'react';

export function HomePage(): ReactElement {
  const theme = useTheme();

  return (
    <div>
      <header>
        <h1>Home page</h1>
      </header>
      <main>
        <Button>click me</Button>
      </main>
    </div>
  );
}

export default HomePage;
