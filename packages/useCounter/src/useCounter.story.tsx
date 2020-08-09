import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Componentname } from './index';

storiesOf('components/Componentname', module)
.add('default', () => <Componentname />)
