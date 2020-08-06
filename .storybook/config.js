import { configure, addParameters, addDecorator } from '@storybook/react';
//import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../packages', true, /.story.tsx?$/);
function loadStories() {
  //addDecorator(withKnobs);

  addParameters({
    options: {
      showPanel: true,

      panelPosition: 'bottom'
    }
  });

  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

////////////////////////
// CSS;
// import '../styles/index.scss';
