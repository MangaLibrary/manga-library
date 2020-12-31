/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import type { SerializedStyles } from '@emotion/serialize';
import tw, { css } from 'twin.macro';

export const buttonStyles: SerializedStyles = css`
  /** region Defaults */

  &.btn {
    ${tw`
      relative inline-block
      mx-0.5 my-1
      px-3 py-1.5
      border-solid border border-gray-200 rounded
      bg-gray-100
      text-base font-normal text-black text-center align-middle no-underline
      select-none
      cursor-pointer pointer-events-auto
      z-button
      transition duration-150 ease-in-out

      hover:(bg-gray-200)
      focus:(outline-none ring ring-gray-300)

      disabled:(opacity-70 pointer-events-none)
    `}
  }

  &&.btn:focus:not(.focus-visible) {
    ${tw`outline-none ring-0`}
  }

  &.btn > .btn-label {
    ${tw`z-button-label`}
  }

  /** endregion Defaults */

  /** region Sizes */

  &.btn.btn--size-small {
    ${tw`
      px-2 py-1
      text-sm
    `}
  }

  &.btn.btn--size-large {
    ${tw`
      px-4 py-2
      text-xl
    `}
  }

  &.btn.btn--block {
    ${tw`w-full`}
  }

  /** endregion Sizes */

  /** region Variants */

  &.btn.btn--variant-primary {
    ${tw`
      bg-primary-500
      border-blue-400
      text-white
      hover:(bg-primary-600)
      focus:(ring-primary-300)
    `}
  }

  &.btn.btn--variant-secondary {
    ${tw`
      bg-secondary-500
      border-secondary-400
      text-white
      hover:(bg-secondary-600)
      focus:(ring-secondary-300)
    `}
  }

  &.btn.btn--variant-success {
    ${tw`
      bg-success-500
      border-success-400
      text-white
      hover:(bg-success-600)
      focus:(ring-success-300)
    `}
  }

  &.btn.btn--variant-danger {
    ${tw`
      bg-danger-500
      border-danger-400
      text-white
      hover:(bg-danger-600)
      focus:(ring-danger-300)
    `}
  }

  &.btn.btn--variant-warning {
    ${tw`
      bg-warning-500
      border-warning-400
      text-white
      hover:(bg-warning-600)
      focus:(ring-warning-300)
    `}
  }

  &.btn.btn--variant-info {
    ${tw`
      bg-info-500
      border-info-400
      text-white
      hover:(bg-info-600)
      focus:(ring-info-300)
    `}
  }

  &.btn.btn--variant-link {
    ${tw`
      bg-transparent
      border-transparent
      text-blue-500 underline
      hover:(bg-transparent text-blue-600)
      focus:(ring-blue-300)
    `}
  }

  /** endregion Variants */

  /** region Outline */

  &.btn.btn--outline:not(.btn--variant-link) {
    ${tw`
      bg-transparent
      border-gray-400
      text-gray-400
      hover:(border-gray-200 bg-gray-200 text-black)
    `}
  }

  &.btn.btn--outline.btn--variant-primary {
    ${tw`
      border-primary-500
      text-primary-500
      hover:(border-primary-400 bg-primary-600 text-white)
    `}
  }

  &.btn.btn--outline.btn--variant-secondary {
    ${tw`
      border-secondary-500
      text-secondary-500
      hover:(border-secondary-400 bg-secondary-600 text-white)
    `}
  }

  &.btn.btn--outline.btn--variant-success {
    ${tw`
      border-success-500
      text-success-500
      hover:(border-success-400 bg-success-600 text-white)
    `}
  }

  &.btn.btn--outline.btn--variant-danger {
    ${tw`
      border-danger-500
      text-danger-500
      hover:(border-danger-400 bg-danger-600 text-white)
    `}
  }

  &.btn.btn--outline.btn--variant-warning {
    ${tw`
      border-warning-500
      text-warning-500
      hover:(border-warning-400 bg-warning-600 text-white)
    `}
  }

  &.btn.btn--outline.btn--variant-info {
    ${tw`
      border-info-500
      text-info-500
      hover:(border-info-400 bg-info-600 text-white)
    `}
  }

  /** endregion Outline */
`;
