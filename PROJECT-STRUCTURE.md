# 📂 Estrutura do Projeto - Priority Manager

## 🌳 Árvore de Arquivos

```
priority-manager/
│
├── 📄 manifest.json              # Configuração do Power-Up para o Trello
├── 📄 index.html                 # Página principal do Power-Up
├── 📄 settings.html              # Página de configurações
├── 📄 card-section.html          # Seção exibida dentro dos cards
│
├── 📁 css/
│   └── 📄 styles.css            # Estilos globais do Power-Up
│
├── 📁 js/
│   ├── 📄 power-up.js           # Inicialização e capabilities do Power-Up
│   └── 📄 client.js             # Lógica de cliente (CRUD de prioridades)
│
├── 📁 images/
│   ├── 📄 README.md             # Instruções sobre ícones
│   └── 🖼️ icon.png              # Ícone do Power-Up (128x128)
│
├── 📁 examples/
│   └── 📄 example-priorities.json  # Exemplos de sistemas de prioridade
│
├── 📁 docs/
│   ├── 📄 README.md             # Documentação completa (EN)
│   ├── 📄 README-PT.md          # Documentação completa (PT-BR)
│   ├── 📄 INSTALL.md            # Guia de instalação detalhado
│   ├── 📄 QUICK-START.md        # Guia de início rápido
│   └── 📄 PROJECT-STRUCTURE.md  # Este arquivo
│
├── 📄 package.json               # Configuração do projeto Node.js
├── 📄 .gitignore                 # Arquivos ignorados pelo Git
├── 📄 LICENSE                    # Licença MIT
└── 📄 CHANGELOG.md               # Histórico de mudanças

```

## 📋 Descrição dos Arquivos

### 🔧 Arquivos de Configuração

#### `manifest.json`
- **Propósito**: Define as propriedades e capacidades do Power-Up
- **Conteúdo**: Nome, ícone, autor, capabilities
- **Importante**: URL do iframe connector

#### `package.json`
- **Propósito**: Configuração do projeto Node.js
- **Conteúdo**: Nome, versão, scripts, dependências
- **Uso**: Opcional, para desenvolvimento local

### 🎨 Arquivos HTML

#### `index.html`
- **Propósito**: Página principal do Power-Up
- **Quando aparece**: 
  - Popup de seleção de prioridade (nos cards)
  - Modal de gerenciamento de prioridades (no board)
- **Carrega**: `styles.css` e `client.js`

#### `settings.html`
- **Propósito**: Página de configurações do Power-Up
- **Quando aparece**: Menu Power-Up > Configurações
- **Conteúdo**: Informações sobre o Power-Up

#### `card-section.html`
- **Propósito**: Seção exibida no verso do card
- **Quando aparece**: Ao abrir um card
- **Exibe**: A prioridade atual do card

### 🎨 Arquivos CSS

#### `css/styles.css`
- **Propósito**: Estilos visuais do Power-Up
- **Contém**:
  - Layout das interfaces
  - Cores e tipografia
  - Animações e transições
  - Responsividade
- **Tamanho**: ~5KB

### ⚙️ Arquivos JavaScript

#### `js/power-up.js`
- **Propósito**: Inicializa o Power-Up e define capabilities
- **Funções principais**:
  - `card-badges`: Badges nos cards
  - `card-buttons`: Botão "Prioridade" nos cards
  - `board-buttons`: Botão no menu do board
  - `show-settings`: Link para configurações
  - `card-detail-badges`: Badge detalhado no card
  - `card-back-section`: Seção no verso do card
- **Tamanho**: ~4KB

#### `js/client.js`
- **Propósito**: Lógica de negócio do Power-Up
- **Funções principais**:
  - `getPriorities()`: Busca prioridades do board
  - `savePriorities()`: Salva prioridades
  - `addPriority()`: Adiciona nova prioridade
  - `deletePriority()`: Remove prioridade
  - `editPriority()`: Edita prioridade
  - `getCardPriority()`: Busca prioridade do card
  - `setCardPriority()`: Define prioridade do card
  - `removeCardPriority()`: Remove prioridade do card
  - `renderPriorityManager()`: Renderiza interface de gerenciamento
  - `renderPrioritySelector()`: Renderiza seletor de prioridade
- **Tamanho**: ~8KB

### 📚 Documentação

#### `README.md`
- **Idioma**: Inglês
- **Conteúdo**: Documentação completa do projeto
- **Inclui**: Instalação, uso, exemplos, solução de problemas

#### `README-PT.md`
- **Idioma**: Português (Brasil)
- **Conteúdo**: Documentação completa e detalhada
- **Inclui**: Casos de uso, melhores práticas, personalização

#### `INSTALL.md`
- **Propósito**: Guia passo a passo de instalação
- **Conteúdo**: 
  - Instruções detalhadas para cada plataforma
  - Solução de problemas
  - Checklist de verificação

#### `QUICK-START.md`
- **Propósito**: Guia rápido de 3 minutos
- **Conteúdo**: Passos essenciais para começar
- **Público**: Usuários que querem começar rapidamente

#### `CHANGELOG.md`
- **Propósito**: Histórico de mudanças
- **Formato**: Keep a Changelog
- **Conteúdo**: Versões, features, bugs corrigidos

### 🖼️ Recursos

#### `images/icon.png`
- **Tamanho**: 128x128 pixels
- **Formato**: PNG com transparência
- **Uso**: Ícone do Power-Up no Trello

#### `examples/example-priorities.json`
- **Propósito**: Exemplos de sistemas de prioridade
- **Contém**: 8 sistemas diferentes
- **Uso**: Referência para criar suas prioridades

### ⚖️ Outros

#### `LICENSE`
- **Tipo**: MIT License
- **Permite**: Uso comercial, modificação, distribuição
- **Requer**: Manter aviso de copyright

#### `.gitignore`
- **Propósito**: Arquivos ignorados pelo Git
- **Inclui**: node_modules, logs, arquivos temporários

## 🔄 Fluxo de Funcionamento

### 1. Carregamento Inicial

```
Trello → Carrega manifest.json
      → Lê capabilities
      → Carrega power-up.js
      → Inicializa o Power-Up
```

### 2. Usuário Abre o Board

```
Power-Up → Registra board-buttons
        → Botão "Gerenciar Prioridades" aparece
```

### 3. Usuário Gerencia Prioridades

```
Clica em "Gerenciar Prioridades"
→ Abre index.html em modal
→ Carrega client.js
→ Renderiza renderPriorityManager()
→ Usuário adiciona/edita/remove prioridades
→ Salva com savePriorities()
→ Armazena no board do Trello
```

### 4. Usuário Abre um Card

```
Power-Up → Registra card-buttons
        → Botão "Prioridade" aparece
        → Registra card-badges
        → Badge da prioridade aparece (se definido)
```

### 5. Usuário Define Prioridade

```
Clica em "Prioridade"
→ Abre index.html em popup
→ Carrega client.js
→ Renderiza renderPrioritySelector()
→ Lista prioridades disponíveis
→ Usuário seleciona uma
→ Salva com setCardPriority()
→ Badge aparece imediatamente
```

## 📊 Armazenamento de Dados

### Estrutura de Dados

#### Prioridades do Board
```javascript
// Chave: 'priorities'
// Escopo: 'board', 'shared'
[
  {
    id: "1699999999999",
    name: "Alta",
    color: "#DC3545"
  },
  {
    id: "1699999999998",
    name: "Média",
    color: "#FFC107"
  }
]
```

#### Prioridade do Card
```javascript
// Chave: 'cardPriority'
// Escopo: 'card', 'shared'
"1699999999999" // ID da prioridade
```

### Onde os Dados São Armazenados

- **Local**: Dentro do próprio board/card do Trello
- **Tipo**: Plugin Data Storage do Trello
- **Limite**: 4KB por card, 4MB por board
- **Sincronização**: Automática pelo Trello

## 🚀 Deploy e Hospedagem

### Opções de Hospedagem

1. **GitHub Pages** (Gratuito)
   - Integração com Git
   - HTTPS automático
   - URL: `https://usuario.github.io/repo`

2. **Glitch** (Gratuito)
   - Editor online
   - Deploy instantâneo
   - URL: `https://projeto.glitch.me`

3. **Netlify** (Gratuito)
   - Drag and drop
   - HTTPS automático
   - URL customizável

4. **Vercel** (Gratuito)
   - Otimizado para performance
   - Integração com Git
   - URL customizável

### Requisitos de Hospedagem

- ✅ **HTTPS obrigatório**
- ✅ Servir arquivos estáticos
- ✅ Sem necessidade de backend
- ✅ CORS configurado automaticamente

## 🔐 Segurança

### Dados do Usuário
- **Não coletamos**: Nenhum dado é enviado para servidores externos
- **Armazenamento**: Apenas no Trello
- **Privacidade**: 100% local ao board

### Código Aberto
- Todo o código é visível
- Pode ser auditado
- Sem ofuscação

### Permissões
- Leitura: Prioridades do board
- Escrita: Prioridades e atribuições de cards
- Nenhuma outra permissão necessária

## 📏 Tamanhos dos Arquivos

```
Total: ~30KB (sem compressão)

manifest.json:      ~0.5KB
index.html:         ~0.5KB
settings.html:      ~0.8KB
card-section.html:  ~1.2KB
styles.css:         ~5KB
power-up.js:        ~4KB
client.js:          ~8KB
```

## 🛠️ Desenvolvimento Local

### Testar Localmente

```bash
# Instalar servidor HTTP simples
npm install -g http-server

# Iniciar servidor
cd priority-manager
http-server -p 8080

# Acessar
http://localhost:8080
```

### Usar ngrok para Expor Localmente

```bash
# Instalar ngrok
# Baixar de: https://ngrok.com

# Expor porta local
ngrok http 8080

# Use o URL HTTPS gerado no Trello
https://xxxx-xxx-xxx-xxx.ngrok.io
```

## 🔄 Atualizações

### Processo de Atualização

1. Modificar os arquivos
2. Commit e push (GitHub)
3. Aguardar deploy (1-2 min)
4. Recarregar Trello (Ctrl+R)

### Sem Necessidade de Reconfiguração

- URL permanece o mesmo
- Trello carrega automaticamente
- Usuários recebem atualização instantânea

## 📞 Suporte

### Recursos
- 📖 Documentação: README-PT.md
- 🚀 Quick Start: QUICK-START.md
- 🔧 Instalação: INSTALL.md
- 📋 Exemplos: examples/

### Contato
- 🐛 Bugs: GitHub Issues
- 💡 Sugestões: GitHub Discussions
- 📧 Email: [seu-email]

---

**Versão**: 1.0.0  
**Última atualização**: 2025-11-07  
**Licença**: MIT

