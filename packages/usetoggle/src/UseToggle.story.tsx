import { storiesOf } from '@storybook/react';
import * as React from 'react';

import useToggle from './index';

const StoryComponent = () => {
  const { state, onToggle } = useToggle();
  return (
    <div
      onClick={() => {
        onToggle();
      }}
    >
      My State is {JSON.stringify(state)}
    </div>
  );
};

storiesOf('components/UseToggle', module).add('default', () => (
  <StoryComponent />
));
