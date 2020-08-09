import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { UseWatch } from './index';

storiesOf('components/UseWatch', module)
.add('default', () => <UseWatch />)
