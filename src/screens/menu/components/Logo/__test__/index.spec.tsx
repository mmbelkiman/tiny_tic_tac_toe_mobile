import React from 'react';
import {render} from '@testing-library/react-native';
import Logo from '../index';

describe('Logo component', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Logo />);
    expect(toJSON()).toMatchSnapshot();
  });
});
