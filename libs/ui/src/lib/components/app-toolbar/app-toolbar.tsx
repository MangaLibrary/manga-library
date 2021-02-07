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
import { FC, forwardRef, ReactNode } from 'react';
import { useTheme } from '../../hooks';

export type AppToolbarVariants = 'default' | 'primary' | 'secondary';

export interface AppToolbarProps {
  children?: ReactNode;
  variant?: AppToolbarVariants;
}

// #DF4154
// #CD3B4D

// #308793
// #207581

// #404040
// #FFFFFF

export const AppToolbar: FC<AppToolbarProps> = forwardRef(function AppToolbar({
  children,
  variant = 'primary',
}: AppToolbarProps) {
  const theme = useTheme();

  const className: string = classnames('app-toolbar', `app-toolbar--${variant}`);

  const baseStyles = css`
    width: 100%;
    min-height: 88px;
    display: block;
    position: relative;
    order: -1;
    z-index: 10;
  `;

  const primaryStyles =
    variant === 'primary' &&
    css`
      height: 88px;

      &::before {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        display: block;
        background: #df4154;
        background: linear-gradient(90deg, #da4469 0%, #d2385c 35%, #b62c60 100%);
        clip-path: polygon(100% 0, 0 0, 0 75%, 50% 50%, 100% 75%);
        content: '';
        z-index: -1;
      }
    `;

  const secondaryStyles =
    variant === 'secondary' &&
    css`
      height: 88px;

      &::before {
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        display: block;
        background: #df4154;
        background: linear-gradient(90deg, #308793 0%, #2a7680 35%, #225e66 100%);
        clip-path: polygon(
          100% 0,
          0 0,
          0 77.5%,
          1% 77.4%,
          2% 77.1%,
          3% 76.6%,
          4% 75.9%,
          5% 75.05%,
          6% 74.05%,
          7% 72.95%,
          8% 71.75%,
          9% 70.55%,
          10% 69.3%,
          11% 68.05%,
          12% 66.9%,
          13% 65.8%,
          14% 64.8%,
          15% 64%,
          16% 63.35%,
          17% 62.85%,
          18% 62.6%,
          19% 62.5%,
          20% 62.65%,
          21% 63%,
          22% 63.5%,
          23% 64.2%,
          24% 65.1%,
          25% 66.1%,
          26% 67.2%,
          27% 68.4%,
          28% 69.65%,
          29% 70.9%,
          30% 72.15%,
          31% 73.3%,
          32% 74.35%,
          33% 75.3%,
          34% 76.1%,
          35% 76.75%,
          36% 77.2%,
          37% 77.45%,
          38% 77.5%,
          39% 77.3%,
          40% 76.95%,
          41% 76.4%,
          42% 75.65%,
          43% 74.75%,
          44% 73.75%,
          45% 72.6%,
          46% 71.4%,
          47% 70.15%,
          48% 68.9%,
          49% 67.7%,
          50% 66.55%,
          51% 65.5%,
          52% 64.55%,
          53% 63.75%,
          54% 63.15%,
          55% 62.75%,
          56% 62.55%,
          57% 62.5%,
          58% 62.7%,
          59% 63.1%,
          60% 63.7%,
          61% 64.45%,
          62% 65.4%,
          63% 66.45%,
          64% 67.6%,
          65% 68.8%,
          66% 70.05%,
          67% 71.3%,
          68% 72.5%,
          69% 73.6%,
          70% 74.65%,
          71% 75.55%,
          72% 76.35%,
          73% 76.9%,
          74% 77.3%,
          75% 77.5%,
          76% 77.45%,
          77% 77.25%,
          78% 76.8%,
          79% 76.2%,
          80% 75.4%,
          81% 74.45%,
          82% 73.4%,
          83% 72.25%,
          84% 71.05%,
          85% 69.8%,
          86% 68.55%,
          87% 67.35%,
          88% 66.2%,
          89% 65.2%,
          90% 64.3%,
          91% 63.55%,
          92% 63%,
          93% 62.65%,
          94% 62.5%,
          95% 62.55%,
          96% 62.8%,
          97% 63.3%,
          98% 63.9%,
          99% 64.75%,
          100% 65.7%
        );
        content: '';
        z-index: -1;
      }
    `;

  return (
    <div
      className={className}
      css={css`
        ${baseStyles}
        ${primaryStyles}
        ${secondaryStyles}
      `}
    >
      {children}
    </div>
  );
});

// preserveAspectRatio = 'none';
