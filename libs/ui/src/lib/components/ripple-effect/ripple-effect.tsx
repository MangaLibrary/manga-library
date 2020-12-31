/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, {
  FC,
  ForwardedRef,
  ReactNode,
  RefAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import tw, { css } from 'twin.macro';

const RIPPLE_EFFECT_DURATION = 500;

export interface RippleEffectRef {
  nativeElement: HTMLSpanElement;
  run(event: MouseEvent): void;
}

export interface RippleEffectProps {
  children?: ReactNode;
}

/**
 * RippleEffect component
 */
export const RippleEffect: FC<RippleEffectProps & RefAttributes<RippleEffectRef>> = React.forwardRef(
  function RippleEffect(props: RippleEffectProps, ref: ForwardedRef<RippleEffectRef>) {
    const elRef = useRef<HTMLSpanElement>(null);
    const [animations] = useState<Set<Animation>>(new Set());

    const createRippleElement = useCallback((event: MouseEvent): HTMLSpanElement => {
      const rippleElement = document.createElement('span');

      const {
        clientWidth = 0,
        clientHeight = 0,
        offsetLeft = 0,
        offsetTop = 0,
      }: HTMLElement = event.currentTarget as HTMLElement;
      const { clientX = 0, clientY = 0 }: MouseEvent = event;

      const diameter: number = Math.max(clientWidth, clientHeight);
      const radius: number = diameter / 2;
      const x: number = clientX - offsetLeft;
      const y: number = clientY - offsetTop;
      const left: number = x >= 0 ? x - radius : 0;
      const top: number = y >= 0 ? y - radius : radius / -2;

      Object.assign(rippleElement.style, {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${left}px`,
        top: `${top}px`,
      });

      return rippleElement;
    }, []);

    const animateRippleElement = useCallback(
      (rippleElement: HTMLSpanElement): Animation => {
        const animation: Animation = rippleElement.animate(
          [
            { offset: 0, transform: 'scale(0)', opacity: '0.45' },
            { offset: 1, transform: 'scale(4)', opacity: '0' },
          ],
          { duration: RIPPLE_EFFECT_DURATION, easing: 'linear' },
        );

        animations.add(animation);

        animation.onfinish = () => {
          rippleElement.remove();
          animations.delete(animation);
        };

        return animation;
      },
      [animations],
    );

    useImperativeHandle(
      ref,
      () => ({
        nativeElement: elRef.current,
        run: (event: MouseEvent): void => {
          const rippleElement = createRippleElement(event);
          elRef.current.append(rippleElement);
          animateRippleElement(rippleElement);
        },
      }),
      [elRef, createRippleElement, animateRippleElement],
    );

    useEffect(() => {
      return () => animations.forEach((animation: Animation) => animation.finish());
    }, [animations]);

    return (
      <span
        ref={elRef}
        className="ripple-effect"
        css={css`
          &.ripple-effect {
            ${tw`
              block w-full h-full
              absolute inset-0
              overflow-hidden
              text-current
              z-ripple-effect
              pointer-events-none select-none
            `}
            border-radius: inherit;
          }

          &.ripple-effect > span {
            ${tw`
              block w-0 h-0
              absolute left-0 top-0
              rounded-full
              bg-current
              opacity-0
              z-ripple-effect
              origin-center
              pointer-events-none select-none
            `}
          }
        `}
      />
    );
  },
);
