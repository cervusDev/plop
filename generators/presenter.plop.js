module.exports = function (plop) {
  plop.setHelper('dashcase', (text) => {
    return text.toLowerCase();
  });

  plop.setHelper('pascalcase', (text) => text.toUpperCase());
  plop.setGenerator('Presenter', {
    description: 'Criando um novo presenter...',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da instância na camada de presenter? 🐪',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return 'O nome do presenter é obrigatório 🚨';
        },
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Escolha as features do presenter',
        choices: [
          {
            name: 'dto',
            value: 'dto',
            checked: false,
          },
          {
            name: 'mapper',
            value: 'mapper',
            checked: false,
          },
        ],
      },
      {
        type: 'confirm',
        name: 'controller',
        message: 'Deseja criar todos os entrypoints do controller? 🐪',
        default: false,
      },
      {
        type: 'confirm',
        name: 'create',
        message: 'Deseja criar o endpoint de create? 🚀 ',
        default: true,
        when: ({ controller }) => controller === false,
      },
      {
        type: 'confirm',
        name: 'readAll',
        message: 'Deseja criar o endpoint de readAll? 🚀 ',
        default: true,
        when: ({ controller }) => controller === false,
      },
      {
        type: 'confirm',
        name: 'read',
        message: 'Deseja criar o endpoint de read? 🚀 ',
        default: true,
        when: ({ controller }) => controller === false,
      },
      {
        type: 'confirm',
        name: 'update',
        message: 'Deseja criar o endpoint de update? 🚀 ',
        default: true,
        when: ({ controller }) => controller === false,
      },
      {
        type: 'confirm',
        name: 'delete',
        message: 'Deseja criar o endpoint de delete? 🚀 ',
        default: true,
        when: ({ controller }) => controller === false,
      },
      {
        type: 'confirm',
        name: 'user',
        message: 'Seu controller vai utilizar o decorator @UseGuards?',
        default: false,
      },
    ],
    actions: ({ features }) => {
      let actions = [
        {
          type: 'add',
          path: '../src/presentation/rest/v1/{{dashcase name}}/{{dashcase name}}.module.ts',
          templateFile: 'templates/presentation/module.hbs',
          onabort: false,
        },
        {
          type: 'add',
          path: '../src/presentation/rest/v1/{{dashcase name}}/{{dashcase name}}.controller.ts',
          templateFile: 'templates/presentation/controller.hbs',
          skipIfExists: true,
          onabort: false,
        },
      ];
      if (features) {
        if (features?.includes('dto')) {
          actions.push(
            {
              type: 'add',
              path: '../src/presentation/rest/v1/{{dashcase name}}/dto/create-{{dashcase name}}.dto.ts',
              templateFile: 'templates/presentation/dto/create.dto.hbs',
              skipIfExists: !features?.includes('dto'),
              onabort: false,
            },
            {
              type: 'add',
              path: '../src/presentation/rest/v1/{{dashcase name}}/dto/update-{{dashcase name}}.dto.ts',
              templateFile: 'templates/presentation/dto/update.dto.hbs',
              skipIfExists: !features?.includes('dto'),
              onabort: false,
            },
          );
        }
        if (features?.includes('mapper')) {
          actions.push(
            {
              type: 'add',
              path: '../src/presentation/rest/v1/{{dashcase name}}/mapper/create-{{dashcase name}}.mapper.ts',
              templateFile: 'templates/presentation/mapper/create.mapper.hbs',
              skipIfExists: !features?.includes('mapper'),
              onabort: false,
            },
            {
              type: 'add',
              path: '../src/presentation/rest/v1/{{dashcase name}}/mapper/update-{{dashcase name}}.mapper.ts',
              templateFile: 'templates/presentation/mapper/update.mapper.hbs',
              skipIfExists: !features?.includes('mapper'),
              onabort: false,
            },
          );
        }
      }
      return actions;
    },
  });
};
