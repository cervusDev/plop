module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setGenerator('inmemmory', {
    description: 'Create a new inmemmory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do inmemmory?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/infra/database/inmemmory/{{dashcase name}}.ts',
        templateFile: 'templates/infra/inmemmory.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/infra/database/prisma/repositories/{{dashcase name}}.ts',
        templateFile: 'templates/infra/prisma.repository.hbs',
        skipIfExists: true,
      },
    ],
  });
};
