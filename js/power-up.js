const STORAGE_KEY = "priorities";
const CARD_PRIORITY_KEY = "cardPriority";

const getPriorities = (t) => {
  return t
    .get("board", "shared", STORAGE_KEY)
    .then((priorities) => priorities || []);
};

const getCardPriority = (t) => {
  return t.get("card", "shared", CARD_PRIORITY_KEY);
};
const findPriorityById = (priorities, priorityId) => {
  return priorities.find((p) => p.id === priorityId);
};

TrelloPowerUp.initialize(
  {
    "card-badges": function (t, options) {
      return Promise.all([getPriorities(t), getCardPriority(t)]).then(
        ([priorities, priorityId]) => {
          if (!priorityId) {
            return [];
          }

          const priority = findPriorityById(priorities, priorityId);

          if (!priority) {
            return [];
          }

          return [
            {
              text: priority.name,
              color: priority.color,
              icon: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
              title: `Prioridade: ${priority.name}`,
            },
          ];
        },
      );
    },

    "card-buttons": function (t, options) {
      return [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
          text: "Prioridade",
          callback: function (t) {
            return t.popup({
              title: "Definir Prioridade",
              url: "./index.html",
              height: 350,
              args: { command: "card-button" },
            });
          },
        },
      ];
    },

    "board-buttons": function (t, options) {
      return [
        {
          icon: {
            dark: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
            light: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
          },
          text: "Gerenciar Prioridades",
          callback: function (t) {
            return t.modal({
              title: "Gerenciar Prioridades",
              url: "./index.html",
              height: 600,
              args: { command: "board-button" },
            });
          },
        },
      ];
    },

    "show-settings": function (t, options) {
      return t.popup({
        title: "Configurações de Prioridades",
        url: "./settings.html",
        height: 184,
      });
    },

    "card-detail-badges": function (t, options) {
      return Promise.all([getPriorities(t), getCardPriority(t)]).then(
        ([priorities, priorityId]) => {
          if (!priorityId) {
            return [];
          }

          const priority = findPriorityById(priorities, priorityId);

          if (!priority) {
            return [];
          }

          return [
            {
              title: "Prioridade",
              text: priority.name,
              color: priority.color,
              callback: function (t) {
                return t.popup({
                  title: "Alterar Prioridade",
                  url: "./index.html",
                  height: 350,
                  args: { command: "card-button" },
                });
              },
            },
          ];
        },
      );
    },

    "card-back-section": function (t, options) {
      return Promise.all([getPriorities(t), getCardPriority(t)]).then(
        ([priorities, priorityId]) => {
          if (!priorityId) {
            return {
              title: "Prioridade",
              icon: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
              content: {
                type: "iframe",
                url: t.signUrl("./card-section.html"),
                height: 100,
              },
            };
          }

          const priority = findPriorityById(priorities, priorityId);

          return {
            title: "Prioridade",
            icon: "https://cdn-icons-png.flaticon.com/512/6897/6897039.png",
            content: {
              type: "iframe",
              url: t.signUrl("./card-section.html"),
              height: 100,
            },
          };
        },
      );
    },
  },
  {
    appKey: "0643bea326323a6ac5c559ee33cc7407",
    appName: "Priority Manager",
  },
);
