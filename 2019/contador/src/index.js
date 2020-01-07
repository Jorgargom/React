import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import { App } from './components';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App maxValue={20} />
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
