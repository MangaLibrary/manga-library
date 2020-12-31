/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import type { TupleToUnion } from '@manga-library/utils';

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
import type { CssUnitValue } from './css-unit-value';

export interface Theme {
  readonly darkMode: boolean;
  readonly screens: ThemeScreens;
  readonly spacing: ThemeSpacing;
  readonly fontFamily: ThemeFontFamily;
  readonly fontSize: ThemeFontSize;
  readonly fontWeight: ThemeFontWeight;
  readonly lineHeight: ThemeLineHeight;
  readonly colors: ThemeColors;
  readonly zIndex: ThemeZIndex;
}

export type ThemeScreenType = TupleToUnion<typeof THEME_SCREEN_TYPES>;

export type ThemeScreens = { readonly [screenType in ThemeScreenType]: CssUnitValue };

export type ThemeSpacingType = TupleToUnion<typeof THEME_SPACING_TYPES>;

export type ThemeSpacing = { readonly [spacingType in ThemeSpacingType]: CssUnitValue };

export type ThemeFontFamilyType = TupleToUnion<typeof THEME_FONT_FAMILY_TYPES>;

export type ThemeFontFamily = { readonly [fontFamilyType in ThemeFontFamilyType]: string[] };

export type ThemeFontSizeType = TupleToUnion<typeof THEME_FONT_SIZE_TYPES>;

export type ThemeFontSize = { readonly [fontSizeType in ThemeFontSizeType]: CssUnitValue };

export type ThemeFontWeightType = TupleToUnion<typeof THEME_FONT_WEIGHT_TYPES>;

export type ThemeFontWeight = { readonly [fontWeightType in ThemeFontWeightType]: `${number}` };

export type ThemeLineHeightType = TupleToUnion<typeof THEME_LINE_HEIGHT_TYPES>;

export type ThemeLineHeight = { readonly [lineHeightType in ThemeLineHeightType]: CssUnitValue };

export type ThemeColorType = TupleToUnion<typeof THEME_COLOR_TYPES>;

export type ThemeColor = { readonly [colorType in ThemeColorType]: string };

export type ThemeColorVariant = TupleToUnion<typeof THEME_COLOR_VARIANTS>;

export type ThemeColors = { readonly [colorVariant in ThemeColorVariant]: ThemeColor };

export type ThemeZIndexTypes = typeof THEME_Z_INDEX_TYPES;

export type ThemeZIndexType = TupleToUnion<ThemeZIndexTypes>;

export type ThemeZIndex = { readonly [zIndexType in ThemeZIndexType]: `${number}` };
