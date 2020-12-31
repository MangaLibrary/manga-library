/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import type {
  Theme,
  ThemeColors,
  ThemeFontFamily,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeScreens,
  ThemeSpacing,
  ThemeZIndex,
} from '../types';
import { THEME_DEFAULTS } from './theme-defaults';
import {
  isThemeColors,
  isThemeDarkMode,
  isThemeFontFamily,
  isThemeFontSize,
  isThemeFontWeight,
  isThemeLineHeight,
  isThemeScreens,
  isThemeSpacing,
  isThemeZIndex,
} from './theme-type-guards';

export class ThemeBuilder {
  private darkMode: boolean = false;

  private screens: ThemeScreens = THEME_DEFAULTS.SCREENS;

  private spacing: ThemeSpacing = THEME_DEFAULTS.SPACING;

  private fontFamily: ThemeFontFamily = THEME_DEFAULTS.FONT_FAMILY;

  private fontSize: ThemeFontSize = THEME_DEFAULTS.FONT_SIZE;

  private fontWeight: ThemeFontWeight = THEME_DEFAULTS.FONT_WEIGHT;

  private lineHeight: ThemeLineHeight = THEME_DEFAULTS.LINE_HEIGHT;

  private colors: ThemeColors = THEME_DEFAULTS.COLORS;

  private zIndex: ThemeZIndex = THEME_DEFAULTS.Z_INDEX;

  public static from(value: Partial<Theme>): Theme {
    return new ThemeBuilder()
      .withDarkMode(value.darkMode)
      .withScreens(value.screens)
      .withScreens(value.screens)
      .withSpacing(value.spacing)
      .withFontFamily(value.fontFamily)
      .withFontSize(value.fontSize)
      .withFontWeight(value.fontWeight)
      .withLineHeight(value.lineHeight)
      .withColors(value.colors)
      .withZIndex(value.zIndex)
      .build();
  }

  public build(): Theme {
    return Object.freeze({
      darkMode: false,
      screens: this.screens,
      spacing: this.spacing,
      fontFamily: this.fontFamily,
      fontSize: this.fontSize,
      fontWeight: this.fontWeight,
      lineHeight: this.lineHeight,
      colors: this.colors,
      zIndex: this.zIndex,
    });
  }

  public withDarkMode(value: boolean): this {
    if (isThemeDarkMode(value)) {
      this.darkMode = value;
    }
    return this;
  }

  public withScreens(value: Partial<ThemeScreens>): this {
    if (isThemeScreens(value)) {
      this.screens = Object.freeze(Object.assign(THEME_DEFAULTS.SCREENS, value));
    }
    return this;
  }

  public withSpacing(value: Partial<ThemeSpacing>): this {
    if (isThemeSpacing(value)) {
      this.spacing = Object.freeze(Object.assign(THEME_DEFAULTS.SPACING, value));
    }
    return this;
  }

  public withFontFamily(value: Partial<ThemeFontFamily>): this {
    if (isThemeFontFamily(value)) {
      this.fontFamily = Object.freeze(Object.assign(THEME_DEFAULTS.FONT_FAMILY, value));
    }
    return this;
  }

  public withFontSize(value: Partial<ThemeFontSize>): this {
    if (isThemeFontSize(value)) {
      this.fontSize = Object.freeze(Object.assign(THEME_DEFAULTS.FONT_SIZE, value));
    }
    return this;
  }

  public withFontWeight(value: Partial<ThemeFontWeight>): this {
    if (isThemeFontWeight(value)) {
      this.fontWeight = Object.freeze(Object.assign(THEME_DEFAULTS.FONT_WEIGHT, value));
    }
    return this;
  }

  public withLineHeight(value: Partial<ThemeLineHeight>): this {
    if (isThemeLineHeight(value)) {
      this.lineHeight = Object.freeze(Object.assign(THEME_DEFAULTS.LINE_HEIGHT, value));
    }
    return this;
  }

  public withColors(value: Partial<ThemeColors>): this {
    if (isThemeColors(value)) {
      this.colors = Object.freeze(Object.assign(THEME_DEFAULTS.COLORS, value));
    }
    return this;
  }

  public withZIndex(value: Partial<ThemeZIndex>): this {
    if (isThemeZIndex(value)) {
      this.zIndex = Object.freeze(Object.assign(THEME_DEFAULTS.Z_INDEX, value));
    }
    return this;
  }
}
