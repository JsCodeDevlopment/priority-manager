/* global TrelloPowerUp */

// Chaves de armazenamento
const STORAGE_KEY = 'priorities';
const CARD_PRIORITY_KEY = 'cardPriority';

// Função auxiliar para obter prioridades
const getPriorities = (t) => {
  return t.get('board', 'shared', STORAGE_KEY).then(priorities => priorities || []);
};

// Função auxiliar para obter prioridade de um card
const getCardPriority = (t) => {
  return t.get('card', 'shared', CARD_PRIORITY_KEY);
};

// Função para encontrar prioridade por ID
const findPriorityById = (priorities, priorityId) => {
  return priorities.find(p => p.id === priorityId);
};

// Inicialização do Power-Up
TrelloPowerUp.initialize({
  // Badge do Card - aparece no card quando tem prioridade
  'card-badges': function(t, options) {
    return Promise.all([
      getPriorities(t),
      getCardPriority(t)
    ]).then(([priorities, priorityId]) => {
      if (!priorityId) {
        return [];
      }
      
      const priority = findPriorityById(priorities, priorityId);
      
      if (!priority) {
        return [];
      }
      
      return [{
        text: priority.name,
        color: priority.color,
        icon: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png',
        title: `Prioridade: ${priority.name}`
      }];
    });
  },
  
  // Botão do Card - aparece no card para definir prioridade
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png',
      text: 'Prioridade',
      callback: function(t) {
        return t.popup({
          title: 'Definir Prioridade',
          url: './index.html',
          height: 350
        });
      }
    }];
  },
  
  // Botão do Board - aparece no menu do board
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png',
        light: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png'
      },
      text: 'Gerenciar Prioridades',
      callback: function(t) {
        return t.modal({
          title: 'Gerenciar Prioridades',
          url: './index.html',
          height: 600
        });
      }
    }];
  },
  
  // Configurações do Power-Up
  'show-settings': function(t, options) {
    return t.popup({
      title: 'Configurações de Prioridades',
      url: './settings.html',
      height: 184
    });
  },
  
  // Detalhes do Card - mostra informações adicionais
  'card-detail-badges': function(t, options) {
    return Promise.all([
      getPriorities(t),
      getCardPriority(t)
    ]).then(([priorities, priorityId]) => {
      if (!priorityId) {
        return [];
      }
      
      const priority = findPriorityById(priorities, priorityId);
      
      if (!priority) {
        return [];
      }
      
      return [{
        title: 'Prioridade',
        text: priority.name,
        color: priority.color,
        callback: function(t) {
          return t.popup({
            title: 'Alterar Prioridade',
            url: './index.html',
            height: 350
          });
        }
      }];
    });
  },
  
  // Ícone quando o card está sendo editado
  'card-back-section': function(t, options) {
    return Promise.all([
      getPriorities(t),
      getCardPriority(t)
    ]).then(([priorities, priorityId]) => {
      if (!priorityId) {
        return {
          title: 'Prioridade',
          icon: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png',
          content: {
            type: 'iframe',
            url: t.signUrl('./card-section.html'),
            height: 100
          }
        };
      }
      
      const priority = findPriorityById(priorities, priorityId);
      
      return {
        title: 'Prioridade',
        icon: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png',
        content: {
          type: 'iframe',
          url: t.signUrl('./card-section.html'),
          height: 100
        }
      };
    });
  }
}, {
  appKey: '0643bea326323a6ac5c559ee33cc7407',
  appName: 'Priority Manager'
});

