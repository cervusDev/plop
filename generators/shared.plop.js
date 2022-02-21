module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setHelper('loud', (text) => {
    return text.toUpperCase();
  });
  plop.setGenerator('Shared', {
    description: 'Criando um novo Shared...',
    prompts: [
      {
        input: 'name',
        name: 'name',
        message: 'Qual o nome do Shared?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do Shared é obrigatório';
        },
      },
      {
        type: 'confirm',
        name: 'modules',
        message: 'Você já possuí um módulo em seu IoC?',
        default: true,
      },
    ],
    actions: ({ modules }) => {
      let actions = [
        {
          type: 'add',
          path: '../src/shared/IoC/providers/{{dashcase name}}.provider.ts',
          templateFile: 'templates/shared/Ioc/providers/provider.hbs',
          skipIfExists: true,
        },
      ];

      if (!modules) {
        actions.push({
          type: 'add',
          path: '../src/shared/Ioc/ioc.module.ts',
          templateFile: 'templates/shared/Ioc/module.hbs',
        });
      }

      if (modules) {
        actions.push(
          {
            type: 'append',
            unique: false,
            path: '../src/shared/IoC/ioc.module.ts',
            pattern: 'importe seu repository aqui',
            template: '{{pascalCase name}}Repository',
          },
          {
            type: 'append',
            unique: false,
            path: '../src/shared/IoC/ioc.module.ts',
            pattern: 'proveja seu repository aqui',
            template: '{{pascalCase name}}Repository',
          },
        );
      }
      return actions;
    },
  });
};
