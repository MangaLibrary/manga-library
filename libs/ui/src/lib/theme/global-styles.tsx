/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

/** @jsx jsx */
import { Global, jsx } from '@emotion/react';
import { kebabCase } from 'lodash';
import { Fragment } from 'react';
import { css, GlobalStyles as TmGlobalStyles } from 'twin.macro';
import { useTheme } from '../hooks';
import { Theme } from '../types';

export function GlobalStyles() {
  const theme: Theme = useTheme();

  const variables: string = [
    ...mapVariables(theme, ['screens']),
    ...mapVariables(theme, ['spacing']),
    ...mapVariables(theme, ['fontFamily']),
    ...mapVariables(theme, ['fontSize']),
    ...mapVariables(theme, ['fontWeight']),
    ...mapVariables(theme, ['lineHeight']),
    ...mapVariables(theme, ['colors', 'primary']),
    ...mapVariables(theme, ['colors', 'secondary']),
    ...mapVariables(theme, ['colors', 'success']),
    ...mapVariables(theme, ['colors', 'danger']),
    ...mapVariables(theme, ['colors', 'warning']),
    ...mapVariables(theme, ['colors', 'info']),
    ...mapVariables(theme, ['zIndex']),
  ].join('\n');

  return (
    <Fragment>
      <TmGlobalStyles />

      <Global
        styles={css`
          :root {
            ${variables}
          }

          .js-focus-visible :focus:not(.focus-visible) {
            outline: none;
          }
        `}
      />
    </Fragment>
  );
}

function mapVariables(theme: Theme, keyPath: string[]): string[] {
  const obj = getValue(theme, keyPath);
  const prefix = kebabCase(keyPath.join('-'));

  return Object.entries(obj).map(([key, val]) => `--mlui-${prefix}-${kebabCase(key)}: ${val};`);
}

function getValue<T>(obj: T, keyPath: string[]) {
  if (Array.isArray(keyPath) && keyPath.length) {
    const [key, ...rest] = keyPath;
    return getValue(obj[key], rest);
  }
  return obj;
}
