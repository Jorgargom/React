import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import ButtonGroup from '.';

describe('ButtonGroup', () => {
  const CHILD = 'FOO';
  const component = <ButtonGroup>{CHILD}</ButtonGroup>;
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
