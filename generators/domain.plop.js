module.exports = function (plop) {
  plop.setHelper('loud', (text) => {
    return text.toUpperCase();
  });

  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });

  plop.setGenerator('domain', {
    description: 'Create a new domain',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do dominio?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/constants/{{dashCase name}}.provider.ts/',
        templateFile: 'templates/domain/constants/domain.provider.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/entities/{{dashCase name}}.entity.ts/',
        templateFile: 'templates/domain/entities/usecase.entity.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/repository/{{dashCase name}}.repository.ts/',
        templateFile: 'templates/domain/repository/domain.repository.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/usecases/create-{{dashCase name}}.usecase.ts/',
        templateFile: 'templates/domain/usecases/create-usecase.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/usecases/find-{{dashcase name}}.usecase.ts/',
        templateFile: 'templates/domain/usecases/find-usecase.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
        templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
        templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
      },
      {
        type: 'add',
        path: '../src/domain/{{dashcase name}}/usecases/update-{{dashcase name}}.usecase.ts/',
        templateFile: 'templates/domain/usecases/update-usecase.hbs',
      },
    ],
  });
};
