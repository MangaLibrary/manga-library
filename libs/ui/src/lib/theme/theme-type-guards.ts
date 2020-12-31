/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { isBoolean, isObject, isString, noExtraProps } from '@manga-library/utils';

import {
  THEME_COLOR_TYPES,
  THEME_COLOR_VARIANTS,
  THEME_FONT_FAMILY_TYPES,
  THEME_FONT_SIZE_TYPES,
  THEME_FONT_WEIGHT_TYPES,
  THEME_LINE_HEIGHT_TYPES,
  THEME_SCREEN_TYPES,
  THEME_SPACING_TYPES,
  THEME_Z_INDEX_TYPES,
} from '../constants';
import type {
  ThemeColor,
  ThemeColors,
  ThemeFontFamily,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeScreens,
  ThemeSpacing,
  ThemeZIndex,
} from '../types';

export function isThemeDarkMode(value: unknown): value is boolean {
  return isBoolean(value);
}

export function isThemeScreens(value: unknown): value is ThemeScreens {
  return isObject(value) && noExtraProps(value, THEME_SCREEN_TYPES);
}

export function isThemeSpacing(value: unknown): value is ThemeSpacing {
  return isObject(value) && noExtraProps(value, THEME_SPACING_TYPES);
}

export function isThemeFontFamily(value: unknown): value is ThemeFontFamily {
  return (
    isObject(value) &&
    noExtraProps(value, THEME_FONT_FAMILY_TYPES) &&
    Object.values(value as ThemeFontFamily).every((val) => Array.isArray(val) && val.every(isString))
  );
}

export function isThemeFontSize(value: unknown): value is ThemeFontSize {
  return isObject(value) && noExtraProps(value, THEME_FONT_SIZE_TYPES);
}

export function isThemeFontWeight(value: unknown): value is ThemeFontWeight {
  return isObject(value) && noExtraProps(value, THEME_FONT_WEIGHT_TYPES);
}

export function isThemeLineHeight(value: unknown): value is ThemeLineHeight {
  return isObject(value) && noExtraProps(value, THEME_LINE_HEIGHT_TYPES);
}

export function isThemeColor(value: unknown): value is ThemeColor {
  return isObject(value) && noExtraProps(value, THEME_COLOR_TYPES);
}

export function isThemeColors(value: unknown): value is ThemeColors {
  return isObject(value) && noExtraProps(value, THEME_COLOR_VARIANTS);
}

export function isThemeZIndex(value: unknown): value is ThemeZIndex {
  return isObject(value) && noExtraProps(value, THEME_Z_INDEX_TYPES);
}
