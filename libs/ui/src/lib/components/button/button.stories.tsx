/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { capitalize } from '@manga-library/utils';
import React from 'react';
import type { ButtonSizeType, ButtonVariantType } from '../../types';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Button' },
  },
};

const SIZES: ReadonlyArray<ButtonSizeType> = ['large', 'medium', 'small'];

const VARIANTS: ReadonlyArray<ButtonVariantType> = [
  'default',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'link',
];

export const example = ({ children, href, size, fullWidth, variant, outline, disabled, disableRipple }) => {
  return (
    <Button
      href={href}
      size={size}
      fullWidth={fullWidth}
      variant={variant}
      outline={outline}
      disabled={disabled}
      disableRipple={disableRipple}
    >
      {children}
    </Button>
  );
};

export const size = () => {
  return (
    <>
      {SIZES.map((size: ButtonSizeType) => (
        <section>
          <header>
            <h2 style={{ textTransform: 'capitalize' }}>{size}</h2>
          </header>

          <Button variant="primary" size={size}>
            Primary
          </Button>
          <Button variant="secondary" size={size}>
            Secondary
          </Button>
          <Button variant="link" size={size}>
            Link
          </Button>
        </section>
      ))}
    </>
  );
};

export const disabled = () => {
  return (
    <>
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </>
  );
};

export const variant = () => {
  return (
    <>
      {VARIANTS.map((variant: ButtonVariantType) => (
        <Button variant={variant}>{capitalize(variant)}</Button>
      ))}
    </>
  );
};

export const outline = () => {
  return (
    <>
      {VARIANTS.map((variant: ButtonVariantType) => (
        <Button variant={variant} outline>
          {capitalize(variant)}
        </Button>
      ))}
    </>
  );
};
