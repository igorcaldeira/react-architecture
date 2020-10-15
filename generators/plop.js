module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
      {
        type: 'list',
        name: 'type',
        choices: ['contexts', 'form', 'structure'],
        message: 'What is the component type?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'What is the name of the context?',
        when({ type }) {
          return type === 'contexts';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.styles.jsx',
        templateFile: 'templates/styles.js.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.spec.jsx',
        templateFile: 'templates/spec.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
        templateFile: 'templates/stories.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/components/{{type}}/{{kebabCase contextName}}/{{pascalCase name}}/index.js',
        templateFile: 'templates/index.js.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Page generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Page?',
      },
      {
        type: 'confirm',
        name: 'hasContext',
        message: 'Has context?',
      },
      {
        type: 'input',
        name: 'contextName',
        message: 'Context name?',
        when({ hasContext }) {
          return hasContext;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/pages/{{kebabCase contextName}}/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'templates/page.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '../src/pages/{{kebabCase contextName}}/{{pascalCase name}}/index.js',
        templateFile: 'templates/index.js.hbs',
      },
    ],
  });
};
