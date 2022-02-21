module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => text.toLowerCase());
  plop.setGenerator('usecase', {
    description: 'Criando um novo usecase...',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome deste usecase? 🐪 ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do usecase é obrigatório! 🚨';
        },
      },
      {
        type: 'confirm',
        name: 'usecase',
        message: 'Deseja criar todos os entrypoints de CRUD? 🐪',
        default: false,
      },
      {
        type: 'checkbox',
        name: 'crud',
        message: 'Selecione os entrypoints desejados 🚀',
        choices: [
          {
            name: 'create',
            value: 'create',
            checked: false,
          },
          {
            name: 'read',
            value: 'read',
            checked: false,
          },
          {
            name: 'readAll',
            value: 'readAll',
            checked: false,
          },
          {
            name: 'update',
            value: 'update',
            checked: false,
          },
          {
            name: 'delete',
            value: 'delete',
            checked: false,
          },
        ],
        when: ({ usecase }) => usecase === false,
      },
      {
        type: 'confirm',
        name: 'previousUsecase',
        message: 'Deseja criar os arquivos em um dominio pré-existente? ',
      },
      {
        type: 'input',
        name: 'usecaseName',
        message: 'Qual o nome do dominio? 🐪',
      },
    ],
    actions: ({ crud, usecase, previousUsecase }) => {
      let actions = [];
      if (!usecase) {
        if (crud?.includes('create')) {
          if (previousUsecase) {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/create-{{dashCase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/create-usecase.hbs',
              skipIfExists: !crud?.includes('create'),
              abortOnFail: false,
            });
          } else {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/create-{{dashCase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/create-usecase.hbs',
              skipIfExists: !crud?.includes('create'),
              abortOnFail: false,
            });
          }
        }

        if (crud?.includes('read')) {
          if (previousUsecase) {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/find-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-usecase.hbs',
              skipIfExists: !crud?.includes('read'),
              abortOnFail: false,
            });
          } else {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/find-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-usecase.hbs',
              skipIfExists: !crud?.includes('read'),
              abortOnFail: false,
            });
          }
        }

        if (crud?.includes('readAll')) {
          if (previousUsecase) {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
              skipIfExists: !crud?.includes('readAll'),
              abortOnFail: false,
            });
          } else {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
              skipIfExists: !crud?.includes('readAll'),
              abortOnFail: false,
            });
          }
        }

        if (crud?.includes('update')) {
          if (previousUsecase) {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/update-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/update-usecase.hbs',
              skipIfExists: !crud?.includes('update'),
              abortOnFail: false,
            });
          } else {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/update-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/update-usecase.hbs',
              skipIfExists: !crud?.includes('update'),
              abortOnFail: false,
            });
          }
        }

        if (crud?.includes('delete')) {
          if (previousUsecase) {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
              skipIfExists: !crud?.includes('soft-delete'),
              abortOnFail: false,
            });
          } else {
            actions.push({
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
              skipIfExists: !crud?.includes('soft-delete'),
              abortOnFail: false,
            });
          }
        }
      } else {
        if (previousUsecase) {
          actions.push(
            {
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/create-{{dashCase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/create-usecase.hbs',
              skipIfExists: !crud?.includes('create'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
              skipIfExists: !crud?.includes('readAll'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/find-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-usecase.hbs',
              skipIfExists: !crud?.includes('read'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/update-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/update-usecase.hbs',
              skipIfExists: !crud?.includes('update'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase usecaseName}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
              skipIfExists: !crud?.includes('delete'),
              abortOnFail: false,
            },
          );
        } else {
          actions.push(
            {
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/create-{{dashCase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/create-usecase.hbs',
              skipIfExists: !crud?.includes('create'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
              skipIfExists: !crud?.includes('readAll'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/find-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/find-usecase.hbs',
              skipIfExists: !crud?.includes('read'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/update-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/update-usecase.hbs',
              skipIfExists: !crud?.includes('update'),
              abortOnFail: false,
            },
            {
              type: 'add',
              path: '../src/domain/{{dashcase name}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
              templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
              skipIfExists: !crud?.includes('delete'),
              abortOnFail: false,
            },
          );
        }
      }
      return actions;
    },
  });
};
