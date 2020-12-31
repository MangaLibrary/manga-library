/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

export type CssAbsoluteLengthUnitValueType = 'cm' | 'mm' | 'in' | 'px' | 'pt' | 'pc';

export type CssRelativeLengthUnitValueType = 'em' | 'ex' | 'ch' | 'rem' | 'vh' | 'vw' | 'vmin' | 'vmax' | '%';

export type CssUnitValueType = '' | CssAbsoluteLengthUnitValueType | CssRelativeLengthUnitValueType;

export type CssUnitValue = `${number}${CssUnitValueType}`;
