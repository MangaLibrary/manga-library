/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React, { Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const ExamplePage = React.lazy(() => import('./pages/example/ExamplePage'));

export function App() {
  return (
    <div className="app">
      <div>
        <Link to="/">Home</Link> <Link to="/page">Page</Link>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <Suspense fallback={<div>Wczytywanie...</div>}>
            <HomePage />
          </Suspense>
        )}
      />
      <Route
        path="/page"
        exact
        render={() => (
          <Suspense fallback={<div>Wczytywanie...</div>}>
            <ExamplePage />
          </Suspense>
        )}
      />
    </div>
  );
}
