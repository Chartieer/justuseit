import { storiesOf } from '@storybook/react';
import React from 'react';

import useOnlOffLine from './index';

const Dummy = () => {
  const status = useOnlOffLine();

  return (
    <div>
      <div style={{ marginTop: 10, color: status ? '#87d068' : '#f50' }}>
        {status ? 'online' : 'offline'}
      </div>
    </div>
  );
};

storiesOf('network/status', module).add('default', () => <Dummy />);
