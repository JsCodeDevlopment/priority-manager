/* global TrelloPowerUp */

// Inicialização do Power-Up
const STORAGE_KEY = 'priorities';
const CARD_PRIORITY_KEY = 'cardPriority';

// Variável global para o Trello
let t = TrelloPowerUp.iframe();

// Função para obter todas as prioridades
async function getPriorities(t) {
  const priorities = await t.get('board', 'shared', STORAGE_KEY);
  return priorities || [];
}

// Função para salvar prioridades
async function savePriorities(t, priorities) {
  await t.set('board', 'shared', STORAGE_KEY, priorities);
}

// Função para obter prioridade de um card
async function getCardPriority(t) {
  return await t.get('card', 'shared', CARD_PRIORITY_KEY);
}

// Função para salvar prioridade de um card
async function setCardPriority(t, priorityId) {
  await t.set('card', 'shared', CARD_PRIORITY_KEY, priorityId);
}

// Função para remover prioridade de um card
async function removeCardPriority(t) {
  await t.remove('card', 'shared', CARD_PRIORITY_KEY);
}

// Renderiza a página de gerenciamento de prioridades
async function renderPriorityManager() {
  const priorities = await getPriorities(t);
  
  const content = document.getElementById('content');
  content.innerHTML = `
    <div class="container">
      <div class="priority-manager">
        <h2>🎯 Gerenciar Níveis de Prioridade</h2>
        
        <div class="priority-form">
          <div class="form-group">
            <label for="priority-name">Nome da Prioridade</label>
            <input type="text" id="priority-name" placeholder="Ex: Alta, Média, Baixa">
          </div>
          
          <div class="form-group">
            <label for="priority-color">Cor</label>
            <div class="color-preview">
              <input type="color" id="priority-color" value="#FF6B6B">
              <span id="color-hex">#FF6B6B</span>
            </div>
          </div>
          
          <button id="add-priority-btn">➕ Adicionar Prioridade</button>
        </div>
        
        <h3>Prioridades Cadastradas</h3>
        <div id="priority-list" class="priority-list">
          ${priorities.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📋</div>
              <div class="empty-state-text">Nenhuma prioridade cadastrada</div>
              <div class="empty-state-description">Crie sua primeira prioridade usando o formulário acima</div>
            </div>
          ` : priorities.map(priority => `
            <div class="priority-item" data-id="${priority.id}">
              <div class="priority-info">
                <div class="priority-color-badge" style="background-color: ${priority.color}"></div>
                <span class="priority-name">${priority.name}</span>
              </div>
              <div class="priority-actions">
                <button class="secondary edit-priority-btn" data-id="${priority.id}">✏️ Editar</button>
                <button class="danger delete-priority-btn" data-id="${priority.id}">🗑️ Excluir</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Event Listeners
  document.getElementById('priority-color').addEventListener('input', (e) => {
    document.getElementById('color-hex').textContent = e.target.value.toUpperCase();
  });
  
  document.getElementById('add-priority-btn').addEventListener('click', addPriority);
  
  document.querySelectorAll('.delete-priority-btn').forEach(btn => {
    btn.addEventListener('click', (e) => deletePriority(e.target.dataset.id));
  });
  
  document.querySelectorAll('.edit-priority-btn').forEach(btn => {
    btn.addEventListener('click', (e) => editPriority(e.target.dataset.id));
  });
}

// Renderiza o seletor de prioridade para um card
async function renderPrioritySelector() {
  const priorities = await getPriorities(t);
  const currentPriorityId = await getCardPriority(t);
  
  const content = document.getElementById('content');
  
  if (priorities.length === 0) {
    content.innerHTML = `
      <div class="priority-selector">
        <div class="message info">
          ℹ️ Nenhuma prioridade cadastrada. Configure as prioridades nas configurações do board.
        </div>
      </div>
    `;
    t.sizeTo('#content');
    return;
  }
  
  content.innerHTML = `
    <div class="priority-selector">
      <h3>Selecionar Prioridade</h3>
      <div class="priority-options">
        ${priorities.map(priority => `
          <div class="priority-option ${currentPriorityId === priority.id ? 'selected' : ''}" data-id="${priority.id}">
            <div class="priority-option-info">
              <div class="priority-color-badge" style="background-color: ${priority.color}"></div>
              <span class="priority-name">${priority.name}</span>
            </div>
          </div>
        `).join('')}
      </div>
      ${currentPriorityId ? `
        <button class="danger remove-priority-btn">❌ Remover Prioridade</button>
      ` : ''}
    </div>
  `;
  
  document.querySelectorAll('.priority-option').forEach(option => {
    option.addEventListener('click', () => selectPriority(option.dataset.id));
  });
  
  const removeBtn = document.querySelector('.remove-priority-btn');
  if (removeBtn) {
    removeBtn.addEventListener('click', removePriority);
  }
  
  t.sizeTo('#content');
}

// Adicionar nova prioridade
async function addPriority() {
  const nameInput = document.getElementById('priority-name');
  const colorInput = document.getElementById('priority-color');
  
  const name = nameInput.value.trim();
  const color = colorInput.value;
  
  if (!name) {
    alert('Por favor, insira um nome para a prioridade');
    return;
  }
  
  const priorities = await getPriorities(t);
  const newPriority = {
    id: Date.now().toString(),
    name,
    color
  };
  
  priorities.push(newPriority);
  await savePriorities(t, priorities);
  
  nameInput.value = '';
  colorInput.value = '#FF6B6B';
  
  await renderPriorityManager();
}

// Deletar prioridade
async function deletePriority(id) {
  if (!confirm('Tem certeza que deseja excluir esta prioridade?')) {
    return;
  }
  
  let priorities = await getPriorities(t);
  priorities = priorities.filter(p => p.id !== id);
  await savePriorities(t, priorities);
  
  await renderPriorityManager();
}

// Editar prioridade
async function editPriority(id) {
  const priorities = await getPriorities(t);
  const priority = priorities.find(p => p.id === id);
  
  if (!priority) return;
  
  const newName = prompt('Novo nome:', priority.name);
  if (!newName) return;
  
  const newColor = prompt('Nova cor (hex):', priority.color);
  if (!newColor) return;
  
  priority.name = newName;
  priority.color = newColor;
  
  await savePriorities(t, priorities);
  await renderPriorityManager();
}

// Selecionar prioridade para um card
async function selectPriority(priorityId) {
  await setCardPriority(t, priorityId);
  t.closePopup();
}

// Remover prioridade de um card
async function removePriority() {
  await removeCardPriority(t);
  t.closePopup();
}

// Detecta o contexto e renderiza a view apropriada
t.render(async () => {
  const context = await t.getContext();
  
  if (context.command === 'board-button') {
    await renderPriorityManager();
  } else if (context.command === 'card-button') {
    await renderPrioritySelector();
  } else {
    await renderPriorityManager();
  }
  
  t.sizeTo('#content');
});

