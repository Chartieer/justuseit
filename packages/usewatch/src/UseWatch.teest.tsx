import { mount } from 'enzyme';
import * as React from 'react';

import { UseWatch } from "./index";

describe(UseWatch, () => {
  test('should match snapshot and styles for default props', () => {
  expect(mount(<UseWatch>hello</UseWatch>)).toMatchSnapshot();
  });
});
