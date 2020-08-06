import { storiesOf } from '@storybook/react';
import React from 'react';

import useInViewport from './index';

const Dummy = () => {
  const [inViewPort, ref] = useInViewport();

  return (
    <div>
      <div ref={ref}>observer dom</div>
      <div style={{ marginTop: 1000, color: inViewPort ? '#87d068' : '#f50' }}>
        {inViewPort ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};

storiesOf('inview', module).add('default', () => <Dummy />);
