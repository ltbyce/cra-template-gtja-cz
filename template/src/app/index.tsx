/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

/* init routes */
import { renderRoutes } from 'react-router-config';
import { routes } from 'app/routes';

const pjson = require('../../package.json');

export function App() {
  return (
    <BrowserRouter basename={pjson.name}>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <div style={{ minWidth: '1280px' }}>{renderRoutes(routes)}</div>
      <GlobalStyle />
    </BrowserRouter>
  );
}
