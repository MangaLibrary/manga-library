/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import styled from '@emotion/styled';
import tw from 'twin.macro';

export interface AppLayoutSidebarProps {
  isOpen: boolean;
}

export const AppLayoutSidebar = styled.aside(({ isOpen }: AppLayoutSidebarProps) => [
  tw`
    min-h-screen max-h-screen
    absolute inset-0
    overflow-x-hidden overflow-y-auto overscroll-contain
    grid-area[stack]
    invisible

    md:(
      max-h-none
      static inset-auto
      overflow-visible
      grid-area[auto]
      visible
    )
  `,
  isOpen && tw`visible`,
]);
