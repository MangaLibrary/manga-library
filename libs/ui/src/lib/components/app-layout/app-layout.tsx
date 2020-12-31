/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import classnames from 'classnames';
import {
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { Sidebar } from '../../types';
import { appLayoutStyles } from './app-layout-styles';
import { SidebarContext } from './sidebar-context';

export interface AppLayoutProps {
  children?: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = forwardRef(function AppLayout(
  { children }: AppLayoutProps,
  ref: ForwardedRef<Sidebar>,
) {
  const sidebarRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback(() => {
    setIsOpen(true);

    requestAnimationFrame(() => {
      sidebarRef.current.focus();
    });
  }, [setIsOpen]);

  const close = useCallback(() => {
    setIsOpen(false);

    if (document.activeElement === sidebarRef.current) {
      sidebarRef.current.blur();
    }
  }, [setIsOpen]);

  const toggle = useCallback(() => {
    isOpen ? close() : open();
  }, [isOpen, open, close]);

  const sidebar: Sidebar = useMemo(() => {
    return { isOpen, open, close, toggle };
  }, [isOpen, open, close, toggle]);

  useImperativeHandle(ref, () => sidebar);

  const sidebarClassName = classnames('app-layout__sidebar', {
    'is-open': isOpen,
  });

  useEffect(() => {
    const onKeyup = (event: KeyboardEvent): void => {
      if (!isOpen || event.key !== 'Escape') {
        return;
      }

      close();
    };

    document.addEventListener('keyup', onKeyup);

    return () => document.removeEventListener('keyup', onKeyup);
  }, [isOpen, close]);

  return (
    <SidebarContext.Provider value={sidebar}>
      <div className="app-layout" css={appLayoutStyles}>
        <aside ref={sidebarRef} tabIndex={-1} className={sidebarClassName}>
          a
        </aside>
        <main className="app-layout__content">
          <header>
            <button onClick={toggle}>{isOpen ? 'c' : 'o'}</button>
          </header>
          {children}
        </main>
      </div>
    </SidebarContext.Provider>
  );
});
