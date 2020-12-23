/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, ReactElement, ReactNode, Ref } from 'react';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  href?: string;
  type?: never;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  href?: never;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = React.forwardRef(function Button(
  props: AnchorProps | ButtonProps,
  ref: ForwardedRef<HTMLAnchorElement | HTMLButtonElement>,
): ReactElement {
  const { children, href, type = 'button', ...elementProps } = props;

  return (
    <>
      {href != null ? (
        <a ref={ref as Ref<HTMLAnchorElement>} href={href} {...(elementProps as AnchorProps)}>
          {children}
        </a>
      ) : (
        <button ref={ref as Ref<HTMLButtonElement>} type={type} {...(elementProps as ButtonProps)}>
          {children}
        </button>
      )}
      <style jsx>{`
        a,
        button {
          background: rebeccapurple;
          color: white;
        }
      `}</style>
    </>
  );
});
