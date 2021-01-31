/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

module.exports = {
  '.all-contributorsrc': 'yarn run contributors:generate',
  '*.{js,jsx,ts,tsx,json,html,css,scss,sass,less,md,mdx,markdown,yml,yaml}': (files) => {
    if (files.length <= 25) {
      return `prettier --write ${files.join(' ')}`;
    }
    return 'prettier --write .';
  },
};
