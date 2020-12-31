/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { RefObject, useCallback, useContext, useEffect } from 'react';
import { AppLayoutSidebarContext } from '../components/app-layout';
import { Sidebar } from '../types';

export const useSidebar = (sidebarElementRef: RefObject<HTMLElement | null>): Sidebar => {
  const ctx: Sidebar = useContext<Sidebar>(AppLayoutSidebarContext);

  const open = useCallback((): void => {
    const sidebarElement: HTMLElement | null = sidebarElementRef.current;

    ctx.open();

    requestAnimationFrame(() => sidebarElement?.focus());
  }, [sidebarElementRef, ctx]);

  const close = useCallback((): void => {
    const sidebarElement: HTMLElement | null = sidebarElementRef.current;

    ctx.close();

    if (sidebarElement && sidebarElement === document.activeElement) {
      sidebarElement?.blur();
    }
  }, [sidebarElementRef, ctx]);

  const toggle = useCallback((): void => (ctx.isOpen ? ctx.close() : ctx.open()), [ctx]);

  useEffect(() => {
    const onKeyup = (event: KeyboardEvent): void => {
      if (ctx.isOpen && event.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keyup', onKeyup);

    return () => document.removeEventListener('keyup', onKeyup);
  }, [ctx, close]);

  return {
    isOpen: ctx.isOpen,
    open,
    close,
    toggle,
  };
};
