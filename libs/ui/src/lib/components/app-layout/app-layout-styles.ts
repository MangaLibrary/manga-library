/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import type { SerializedStyles } from '@emotion/serialize';
import tw, { css } from 'twin.macro';

export const appLayoutStyles: SerializedStyles = css`
  &.app-layout {
    ${tw`
      grid
      w-screen min-h-screen
    `};
    grid: [stack] 1fr / min-content [stack] 1fr;
  }

  & > .app-layout__content,
  & > .app-layout__sidebar {
    ${tw`
      min-h-screen
    `};
  }

  & > .app-layout__content {
  }

  & > .app-layout__sidebar {
  }

  @media (max-width: 640px) {
    & > .app-layout__content,
    & > .app-layout__sidebar {
      grid-area: stack;
    }

    & > .app-layout__sidebar {
      ${tw`
      max-h-screen
      absolute inset-0
      overflow-x-hidden overflow-y-auto overscroll-contain
      invisible
    `}
    }

    & > .app-layout__sidebar.is-open {
      ${tw`visible`}
    }
  }
`;
