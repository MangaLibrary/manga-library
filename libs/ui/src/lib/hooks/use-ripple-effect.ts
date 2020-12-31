/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { RefObject, useEffect } from 'react';

import { RippleEffectRef } from '../components';

export interface UseRippleEffectOptions {
  disable: boolean;
}

export const useRippleEffect = (
  hostRef: RefObject<HTMLElement>,
  rippleEffectRef: RefObject<RippleEffectRef>,
  options?: UseRippleEffectOptions,
): void => {
  const { disable = false } = options || {};

  useEffect(() => {
    const ref: HTMLElement | null = hostRef.current;
    const clickHandler = (event: MouseEvent) => !disable && rippleEffectRef.current?.run(event);

    ref?.addEventListener('click', clickHandler);

    return () => ref?.removeEventListener('click', clickHandler);
  }, [hostRef, rippleEffectRef, disable]);
};
