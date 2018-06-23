import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AppHeader from './AppHeader';

describe('<AppHeader />', () => {
  const wrapper = render(<AppHeader />)

  it('renders the title', () => {
    expect(wrapper.text()).toContain('Ben Furber')
  })
  
  it('renders the menu', () => {
    expect(wrapper.find('.HeaderMenu')).toHaveLength(1)
  })
})
