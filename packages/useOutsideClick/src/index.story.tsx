import { storiesOf } from '@storybook/react';
import React from 'react';

import useOutsideClick from './index';

const Dummy = () => {
  const ref = useOutsideClick(() => {
    alert('you clicked outside');
  });

  return (
    <div ref={ref}>
      <h1>click Outside</h1>
    </div>
  );
};

storiesOf('Events/Outside', module).add('default', () => <Dummy />);
