/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import classnames from 'classnames';
import { FC, ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

export interface AppHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const AppHeader: FC<AppHeaderProps> = forwardRef(function AppHeader(
  { children, className, ...attributes }: AppHeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const hostClassName: string = classnames('app-header', className);

  return (
    <div
      ref={ref}
      className={hostClassName}
      css={css`
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: start;
        order: -1;
        z-index: 10;
      `}
      {...attributes}
    >
      {children}
    </div>
  );
});
