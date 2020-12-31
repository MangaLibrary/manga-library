/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { addons } from '@storybook/addons';
import { addDecorator } from '@storybook/react';
import { ThemeBuilder, MlUiThemeProvider } from '../src/lib/theme';

export const parameters = {
  options: {
    storySort: {
      order: ['Theme'],
    },
  },
};

let isDarkModeEnabled = false;
const channel = addons.getChannel();

channel.on('globalsUpdated', (event) => {
  const {
    backgrounds: { value },
  } = event.globals || {};

  isDarkModeEnabled = value === '#333333';
});

addDecorator(withKnobs);
addDecorator(withTheme);

function withTheme(storyFn) {
  return <StorybookThemeProvider>{storyFn()}</StorybookThemeProvider>;
}

function StorybookThemeProvider(props) {
  const isDarkMode = isDarkModeEnabled;
  const [theme, setTheme] = useState(new ThemeBuilder().build());

  useEffect(() => {
    isDarkMode ? setTheme(new ThemeBuilder().build()) : setTheme(new ThemeBuilder().build());
  }, [isDarkMode, setTheme]);

  return <MlUiThemeProvider theme={theme}>{props.children}</MlUiThemeProvider>;
}
