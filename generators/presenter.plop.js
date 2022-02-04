module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setGenerator('Presenter', {
    description: 'Create a new Presenter',
    prompts: [
      {
        input: 'name',
        name: 'name',
        message: 'Qual o nome do Presenter?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/dto/create-{{dashcase name}}.dto.ts',
        templateFile: 'templates/presentation/dto/create.dto.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/dto/update-{{dashcase name}}.dto.ts',
        templateFile: 'templates/presentation/dto/update.dto.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/mapper/create-{{dashcase name}}.mapper.ts',
        templateFile: 'templates/presentation/mapper/create.mapper.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/mapper/update-{{dashcase name}}.mapper.ts',
        templateFile: 'templates/presentation/mapper/update.mapper.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/{{dashcase name}}.controller.ts',
        templateFile: 'templates/presentation/controller.hbs',
        skipIfExists: true,
      },
      {
        type: 'add',
        path: '../src/presentation/rest/v1/{{dashcase name}}/{{dashcase name}}.module.ts',
        templateFile: 'templates/presentation/module.hbs',
      },
    ],
  });
};
