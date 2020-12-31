/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { useEffect, useState } from 'react';

const QUERY: string = '(prefers-color-scheme: dark)';

export interface UseDarkModeOptions {
  className?: string;
}

export function useDarkMode(options?: UseDarkModeOptions): boolean {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const { className = 'dark-mode' } = options || {};

  useEffect(() => {
    const mql: MediaQueryList = matchMedia(QUERY);

    const onChange = function ({ matches }: MediaQueryListEvent) {
      applyDarkModeClassName(className, matches);
      setIsDarkMode(matches);
    };

    onChange({ media: QUERY, matches: mql.matches } as MediaQueryListEvent);

    mql.addEventListener('change', onChange);

    return mql.removeEventListener('change', onChange);
  }, [setIsDarkMode, className]);

  return isDarkMode;
}

function applyDarkModeClassName(className: string, isDarkMode: boolean): void {
  const host: HTMLElement = document.documentElement;

  if (isDarkMode) {
    return host.classList.add(className);
  }

  return host.classList.remove(className);
}
