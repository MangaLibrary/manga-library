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
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ForwardedRef,
  forwardRef,
  ReactNode,
  Ref,
  RefAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import { useRippleEffect } from '../../hooks';
import type { ButtonSizeType, ButtonVariantType } from '../../types';
import { RippleEffect, RippleEffectRef } from '../ripple-effect';
import { buttonStyles } from './button-styles';

type ButtonAttributes = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>;

export interface BaseButtonProps extends ButtonAttributes {
  /**
   * The content of the button.
   */
  children?: ReactNode;
  /**
   * The URL to link to when the button is clicked.
   */
  href?: string;
  /**
   * If true, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  /**
   * The size of the button.
   */
  size?: ButtonSizeType;
  /**
   * The variant of the button.
   */
  variant?: ButtonVariantType;
  /**
   * If true, the button will change its appearance.
   */
  outline?: boolean;
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
}

const BaseButton: FC<ButtonProps & RefAttributes<HTMLElement>> = forwardRef(function Button(
  { href, type = 'button', disabled = false, disableRipple = false, children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const elRef = useRef<HTMLElement>(null);

  const rippleEffectRef = useRef<RippleEffectRef>(null);

  useImperativeHandle(ref, () => elRef.current, [elRef]);

  useRippleEffect(elRef, rippleEffectRef, { disable: disableRipple });

  const label: ReactNode = !!children && <span className="btn-label">{children}</span>;

  const rippleEffect: ReactNode = !(disableRipple || disabled) && <RippleEffect ref={rippleEffectRef} />;

  return (
    <React.Fragment>
      {href ? (
        <a ref={elRef as Ref<HTMLAnchorElement>} href={href} {...props}>
          {label}
          {rippleEffect}
        </a>
      ) : (
        <button ref={elRef as Ref<HTMLButtonElement>} type={type} disabled={disabled} {...props}>
          {label}
          {rippleEffect}
        </button>
      )}
    </React.Fragment>
  );
});

/**
 * Button component
 */
export const Button: FC<ButtonProps & RefAttributes<HTMLElement>> = forwardRef(function StyledButton(
  {
    variant = 'default',
    size = 'medium',
    outline = false,
    fullWidth = false,
    disabled = false,
    className = '',
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const classNames: string = classnames(
    'btn',
    `btn--size-${size}`,
    `btn--variant-${variant}`,
    {
      'btn--outline': outline,
      'btn--block': fullWidth,
      'btn--disabled': disabled,
    },
    className,
  );

  return <BaseButton ref={ref} disabled={disabled} {...props} className={classNames} css={buttonStyles} />;
});
