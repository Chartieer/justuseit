import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';

import useCookie from './index';

const Dummy = () => {
  const [value, set, remove] = useCookie('token', 12);

  const obj = {
    value: 12,
    name: 'gerd'
  };
  return (
    <div>
      <h1>Cookie demo</h1>
      <p>{JSON.stringify(value)}</p>
      <button onClick={() => set('123')}>Change Cookie</button>
      <button onClick={() => set(obj)}>Change ObjCookie</button>
      <button onClick={() => remove()}>Delete Cookie</button>
    </div>
  );
};

storiesOf('Window/Cookie', module).add('default', () => <Dummy />);
