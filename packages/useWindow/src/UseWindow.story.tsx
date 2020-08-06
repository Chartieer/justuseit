import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import useWindow from './usewindow';

const Dummy = () => {
  const { height, width } = useWindow();

  return (
    <div>
      Height: {height}, Width: {width}
    </div>
  );
};
storiesOf('Window/Usewindow', module).add('default', () => <Dummy />);
