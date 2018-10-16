import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import theme from '../../theme';

import Button from '.';

describe('Button', () => {
  const CHILD = 'FOO';
  const component = <Button theme={theme}>{CHILD}</Button>;
  test('it shallows', () => {
    const wrapper = shallow(component);
    expect(wrapper.text()).toBe(CHILD);
    expect(wrapper).toBeDefined();
  });
  test('snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
