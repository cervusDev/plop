module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });
  plop.setGenerator('inmemmory', {
    description: 'Criando novas entidades no database...',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da entidade? 🐪',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome da entidade é obrigatório 🚨';
        },
      },
      {
        type: 'checkbox',
        name: 'infra',
        message: 'Escolha as features da camada de infra-estrutura! 🚀',
        choices: [
          {
            name: 'inmemmory',
            value: 'inmemmory',
            checked: false,
          },
          {
            name: 'repository',
            value: 'repository',
            checked: false,
          },
        ],
      },
    ],
    actions: ({ infra }) => {
      let actions = [];
      if (infra.includes('inmemmory')) {
        actions.push({
          type: 'add',
          path: '../src/infra/database/inmemmory/repositories/{{dashcase name}}.ts',
          templateFile: 'templates/infra/inmemmory.hbs',
          skipIfExists: !infra?.includes('inmemmory'),
        });
      }

      if (infra.includes('repository')) {
        actions.push({
          type: 'add',
          path: '../src/infra/database/prisma/repositories/{{dashcase name}}.ts',
          templateFile: 'templates/infra/prisma.repository.hbs',
          skipIfExists: !infra?.includes('repository'),
        });
      }
      return actions;
    },
  });
};
