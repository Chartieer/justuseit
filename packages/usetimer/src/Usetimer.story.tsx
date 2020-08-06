import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import { useTimer } from './usetimer';

const Dummy = () => {
  const [delay, setDelay] = useState(0);

  useTimer(() => {
    setDelay(delay + 1);
  }, 2400);
  return <div>Dummy {delay}</div>;
};
storiesOf('components/Usetimer', module).add('default', () => <Dummy />);
