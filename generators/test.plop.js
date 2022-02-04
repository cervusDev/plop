module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setGenerator('Jest', {
    description: 'Create a new Jest',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do Jest?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../test/{{dashcase name}}.spec.ts',
        templateFile: 'templates/test/spec.hbs',
        skipIfExists: true,
      },
    ],
  });
};
