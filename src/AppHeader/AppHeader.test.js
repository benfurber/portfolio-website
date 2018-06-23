import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import AppHeader from './AppHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
