import { storiesOf } from '@storybook/react';
import React from 'react';

import useContrastBgImage from './index';

const Dummy = () => {
  const ref = useContrastBgImage(() => {
    alert('you clicked outside');
  });

  return (
    <div
      ref={ref}
      className="contrast-bg"
      style={{
        width: '100%',
        height: '90vh',
        backgroundSize: 'cover',
        backgroundImage: `url(
          'https://cdn.cnn.com/cnnnext/dam/assets/150827142602-01-skyline-quiz-chicago-1-jpg-super-169.jpg'
        )`
      }}
    >
      <h1 className="contrast-el">Watch this</h1>
    </div>
  );
};

storiesOf('Image', module).add('default', () => <Dummy />);
