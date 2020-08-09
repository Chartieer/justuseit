const componentGenerator = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name?',
      default: 'Componentname'
    },
    {
      type: 'confirm',
      name: 'stateless',
      message: 'Is it a Stateless Component?',
      default: 'y'
    }
  ],
  actions: ({ stateless }) => {
    const actions = [
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/package.json',
        templateFile: './package.json.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/LICENSE.md',
        templateFile: './LICENSE.md',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/README.md',
        templateFile: './README.md',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/src/index.ts',
        templateFile: './index.ts.hbs',
        abortOnFail: true
      },

      // Jest Test
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/src/{{properCase name}}.test.tsx',
        templateFile: './componentName.test.tsx.hbs',
        abortOnFail: true
      },
      // Story
      {
        type: 'add',
        path:
          '../packages/{{lowerCase name}}/src/{{properCase name}}.story.tsx',
        templateFile: './componentName.story.tsx.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../packages/{{lowerCase name}}/tsconfig.build.json',
        templateFile: './tsconfig.build.json.hbs',
        abortOnFail: true
      }
    ];

    return actions;
  }
};

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
