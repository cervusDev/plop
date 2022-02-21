module.exports = function (plop) {
  plop.setHelper('loud', (text) => {
    return text.toUpperCase();
  });

  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });

  plop.setGenerator('domain', {
    description: 'Criando um novo dominio...',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome deste dominio? 🐪',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do dominio é obrigatório! 🚨';
        },
      },
      {
        type: 'checkbox',
        name: 'domain',
        message: 'Escolha as features da camada de dominio! 🚀',
        choices: [
          {
            name: 'provider',
            value: 'provider',
            checked: false,
          },
          {
            name: 'entity',
            value: 'entity',
            checked: false,
          },
          {
            name: 'repository',
            value: 'repository',
            checked: false,
          },
        ],
      },
      {
        type: 'confirm',
        name: 'usecase',
        message: 'Deseja criar todos os entrypoints de CRUD? 🐪',
        default: true,
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
        name: 'subProvider',
        message: 'Seu dominio necessita de mais um provider? 🔖 ',
        default: false,
        when: ({ domain }) => domain?.includes('provider') === true,
      },
      {
        type: 'input',
        name: 'subProviderName',
        message: 'Qual o nome do provider?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do novo provider é obrigatório! 🚨';
        },
        when: ({ subProvider }) => subProvider === true,
      },
      {
        type: 'confirm',
        name: 'subEntity',
        message: 'Seu dominio necessita de mais uma entidade? 🔖',
        default: false,
        when: ({ domain }) => domain?.includes('entity') === true,
      },
      {
        type: 'input',
        name: 'subEntityName',
        message: 'Qual o nome da entidade? 🥬',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome da nova entidade é obrigatório! 🚨';
        },
        when: ({ subEntity }) => subEntity === true,
      },
      {
        type: 'confirm',
        name: 'subRepository',
        message: 'Seu dominio necessita de mais um repositório? 🔖',
        default: false,
      },
      {
        type: 'input',
        name: 'subRepositoryName',
        message: 'Qual o nome do repositório? 🥬 ',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do novo repositório é obrigatório! 🚨';
        },
        when: ({ subRepository }) => subRepository === true,
      },
    ],
    actions: ({ domain, crud, usecase, subEntity, subRepository }) => {
      const actions = [];
      if (domain?.includes('provider')) {
        actions.push({
          type: 'add',
          path: '../src/domain/{{dashcase name}}/constants/{{dashcase name}}.provider.ts/',
          templateFile: 'templates/domain/constants/domain.provider.hbs',
          skipIfExists: !domain?.includes('provider'),
          abortOnFail: false,
        });
      }

      if (domain?.includes('entity')) {
        actions.push({
          type: 'add',
          path: '../src/domain/{{dashcase name}}/entities/{{dashCase name}}.entity.ts/',
          templateFile: 'templates/domain/entities/usecase.entity.hbs',
          skipIfExists: !domain?.includes('entity'),
          abortOnFail: false,
        });

        if (subEntity) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/entities/{{dashCase subEntityName}}.entity.ts/',
            templateFile: 'templates/domain/entities/usecase.sub-entity.hbs',
            skipIfExists: !domain?.includes('entity'),
            abortOnFail: false,
          });
        }
      }

      if (domain?.includes('repository')) {
        actions.push({
          type: 'add',
          path: '../src/domain/{{dashcase name}}/repository/{{dashCase name}}.repository.ts/',
          templateFile: 'templates/domain/repository/domain.repository.hbs',
          skipIfExists: !domain?.includes('repository'),
          abortOnFail: false,
        });

        if (subRepository) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/repository/{{dashCase subRepositoryName}}.repository.ts/',
            templateFile:
              'templates/domain/repository/domain.sub-repository.hbs',
            skipIfExists: !domain?.includes('repository'),
            abortOnFail: false,
          });
        }
      }

      if (!usecase) {
        if (crud?.includes('create')) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/usecases/create-{{dashCase name}}.usecase.ts/',
            templateFile: 'templates/domain/usecases/create-usecase.hbs',
            skipIfExists: !crud?.includes('create'),
            abortOnFail: false,
          });
        }

        if (crud?.includes('read')) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/usecases/find-{{dashcase name}}.usecase.ts/',
            templateFile: 'templates/domain/usecases/find-usecase.hbs',
            skipIfExists: !crud?.includes('read'),
            abortOnFail: false,
          });
        }

        if (crud?.includes('readAll')) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/usecases/find-all-{{dashcase name}}.usecase.ts/',
            templateFile: 'templates/domain/usecases/find-all-usecase.hbs',
            skipIfExists: !crud?.includes('readAll'),
            abortOnFail: false,
          });
        }

        if (crud?.includes('update')) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/usecases/update-{{dashcase name}}.usecase.ts/',
            templateFile: 'templates/domain/usecases/update-usecase.hbs',
            skipIfExists: !crud?.includes('update'),
            abortOnFail: false,
          });
        }

        if (crud?.includes('delete')) {
          actions.push({
            type: 'add',
            path: '../src/domain/{{dashcase name}}/usecases/soft-delete-{{dashcase name}}.usecase.ts/',
            templateFile: 'templates/domain/usecases/soft-delete-usecase.hbs',
            skipIfExists: !crud?.includes('soft-delete'),
            abortOnFail: false,
          });
        }
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

      return actions;
    },
  });
};
