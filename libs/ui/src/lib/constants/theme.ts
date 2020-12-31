/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

export const THEME_SCREEN_TYPES = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export const THEME_SPACING_TYPES = [
  '0',
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96',
] as const;

export const THEME_FONT_FAMILY_TYPES = ['sans', 'serif', 'mono'] as const;

export const THEME_FONT_SIZE_TYPES = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
] as const;

export const THEME_FONT_WEIGHT_TYPES = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

export const THEME_LINE_HEIGHT_TYPES = [
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
] as const;

export const THEME_COLOR_TYPES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;

export const THEME_COLOR_VARIANTS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const;

export const THEME_Z_INDEX_TYPES = ['button', 'buttonLabel', 'rippleEffect'] as const;
