/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

describe('ui: Ui component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ui!');
  });
});
