module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setHelper('loud', (text) => {
    return text.toUpperCase();
  });
  plop.setGenerator('Shared', {
    description: 'Create a new Shared',
    prompts: [
      {
        input: 'name',
        name: 'name',
        message: 'Qual o nome do Shared?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/shared/IoC/providers/{{dashcase name}}.provider.ts',
        templateFile: 'templates/shared/shared.provider.hbs',
        skipIfExists: true,
      },
    ],
  });
};
