/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, ForwardedRef, forwardRef, ReactNode, RefAttributes, useImperativeHandle, useRef } from 'react';
import tw from 'twin.macro';
import { useSidebar } from '../../hooks';
import type { Sidebar } from '../../types';
import { AppLayoutContent } from './app-layout-content';
import { AppLayoutSidebar } from './app-layout-sidebar';

const BaseAppLayout = styled.div(() => [
  tw`
    grid
    w-screen min-h-screen
  `,
  `
    grid: [stack] 1fr / min-content [stack] 1fr;
  `,
]);

export interface AppLayoutProps {
  sidebar?: ReactNode;
  children?: ReactNode;
}

export const AppLayout: FC<AppLayoutProps & RefAttributes<Sidebar>> = forwardRef(function AppLayout(
  { sidebar: sidebarContent, children }: AppLayoutProps,
  ref: ForwardedRef<Sidebar>,
) {
  const sidebarElementRef = useRef<HTMLElement>(null);
  const sidebar = useSidebar(sidebarElementRef);

  useImperativeHandle(ref, () => sidebar, [sidebar]);

  return (
    <BaseAppLayout>
      <AppLayoutSidebar ref={sidebarElementRef} isOpen={sidebar.isOpen} tabIndex={-1}>
        {sidebarContent}
      </AppLayoutSidebar>
      <AppLayoutContent>{children}</AppLayoutContent>
    </BaseAppLayout>
  );
});
