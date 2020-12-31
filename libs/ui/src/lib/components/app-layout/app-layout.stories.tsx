/*!
 * @license
 * Copyright (c) 2021 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an GPL-3.0 license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import React, { useContext } from 'react';
import { Sidebar } from '../../types';
import { AppLayout } from './app-layout';
import { AppLayoutSidebarContext } from './sidebar-context';

export default {
  title: 'Layout/Layout',
  component: AppLayout,
  argTypes: {
    sidebar: { control: 'text', defaultValue: 'Sidebar content' },
    children: {
      control: 'text',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores eligendi impedit odit omnis optio perferendis ratione reprehenderit tempora, veniam.',
    },
  },
};

export const example = ({ sidebar: sidebarContent, children }) => {
  const sidebar: Sidebar = useContext<Sidebar>(AppLayoutSidebarContext);

  console.log(sidebar);

  return (
    <>
      <AppLayout sidebar={<div>{sidebarContent}</div>}>
        <div>{children}</div>
        <footer>
          <button onClick={() => sidebar.toggle()}>{sidebar.isOpen ? 'close' : 'open'}</button>
        </footer>
      </AppLayout>

      <style type="text/css">{`
        body, #root {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </>
  );
};
