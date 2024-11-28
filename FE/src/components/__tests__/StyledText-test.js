import * as React from 'react';
import renderer from 'react-test-renderer';

import { Inter } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<Inter>Snapshot test!</Inter>).toJSON();

  expect(tree).toMatchSnapshot();
});
