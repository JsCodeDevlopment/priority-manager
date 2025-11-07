# 🎯 Priority Manager - Trello Power-Up

Um Power-Up para Trello que permite criar e gerenciar níveis de prioridade personalizados com cores para seus cards.

## 📋 Funcionalidades

- ✨ **Criar níveis de prioridade personalizados** com nome e cor
- 🎨 **Escolher cores personalizadas** para cada nível
- 📌 **Atribuir prioridades aos cards** de forma fácil e rápida
- 👁️ **Visualização clara** com badges coloridos nos cards
- ✏️ **Editar e excluir** prioridades existentes
- 💾 **Armazenamento automático** no board do Trello

## 🚀 Instalação

### Passo 1: Preparar os Arquivos

1. Clone ou baixe este repositório
2. Faça upload dos arquivos para um servidor web com HTTPS (obrigatório)
   - Você pode usar: GitHub Pages, Netlify, Vercel, Glitch, etc.

### Passo 2: Criar o Power-Up no Trello

1. Acesse https://trello.com/power-ups/admin
2. Clique em **"New Power-Up"**
3. Preencha as informações:
   - **Name**: Priority Manager
   - **Description**: Gerencie níveis de prioridade personalizados para seus cards
   - **Iframe connector URL**: `https://seu-dominio.com/index.html`

4. Na seção **Capabilities**, habilite:
   - ✅ Card Badges
   - ✅ Card Buttons
   - ✅ Board Buttons
   - ✅ Show Settings
   - ✅ Card Detail Badges
   - ✅ Card Back Section

5. Clique em **"Save"**

### Passo 3: Ativar no seu Board

1. Abra um board do Trello
2. Clique em **"Power-Ups"** no menu
3. Procure por **"Priority Manager"** (ou o nome que você deu)
4. Clique em **"Add"**

## 📖 Como Usar

### Criar Níveis de Prioridade

1. No board do Trello, clique no menu (três pontos)
2. Clique em **"Gerenciar Prioridades"**
3. Preencha:
   - **Nome**: Ex: "Alta", "Média", "Baixa", "Urgente", etc.
   - **Cor**: Escolha uma cor que representa a prioridade
4. Clique em **"➕ Adicionar Prioridade"**

### Atribuir Prioridade a um Card

1. Abra um card
2. Clique no botão **"Prioridade"** (ícone de alvo)
3. Selecione a prioridade desejada
4. O card agora exibe um badge colorido com a prioridade

### Visualizar Prioridades

As prioridades aparecem:
- 🏷️ Como **badge** na frente do card
- 📊 Na **seção de detalhes** quando você abre o card
- 🎨 Com a **cor escolhida** para fácil identificação

### Editar ou Excluir Prioridades

1. Vá em **"Gerenciar Prioridades"**
2. Clique em:
   - **✏️ Editar**: Para mudar nome ou cor
   - **🗑️ Excluir**: Para remover a prioridade

## 🎨 Exemplos de Prioridades

Aqui estão algumas sugestões de níveis de prioridade:

| Nome | Cor | Uso |
|------|-----|-----|
| 🔴 Crítica | `#FF4444` | Problemas urgentes que bloqueiam o trabalho |
| 🟠 Alta | `#FF8800` | Tarefas importantes que devem ser feitas logo |
| 🟡 Média | `#FFD700` | Tarefas importantes mas não urgentes |
| 🟢 Baixa | `#4CAF50` | Tarefas que podem esperar |
| 🔵 Backlog | `#2196F3` | Ideias e tarefas futuras |

## 🛠️ Estrutura do Projeto

```
priority-manager/
├── manifest.json          # Configuração do Power-Up
├── index.html            # Página principal
├── settings.html         # Página de configurações
├── card-section.html     # Seção exibida no card
├── css/
│   └── styles.css       # Estilos do Power-Up
├── js/
│   ├── power-up.js     # Inicialização do Power-Up
│   └── client.js       # Lógica do cliente
├── images/
│   └── icon.png        # Ícone do Power-Up (128x128)
└── README.md           # Este arquivo
```

## 🔧 Configuração Avançada

### Personalizar o Ícone

1. Crie uma imagem PNG de 128x128 pixels
2. Salve como `images/icon.png`
3. Faça upload junto com os outros arquivos

### Alterar o App Key

No arquivo `js/power-up.js`, altere a linha:

```javascript
appKey: 'SEU_APP_KEY_AQUI',
```

Substitua `SEU_APP_KEY_AQUI` pelo App Key fornecido pelo Trello quando você criar o Power-Up.

## 📱 Compatibilidade

- ✅ Trello Web
- ✅ Trello Desktop
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🐛 Solução de Problemas

### O Power-Up não aparece

- Verifique se o URL está correto e com HTTPS
- Confirme que todos os arquivos foram carregados
- Limpe o cache do navegador

### As prioridades não salvam

- Verifique se o Power-Up tem permissão de armazenamento
- Certifique-se de que está logado no Trello

### Erro ao adicionar prioridade

- Verifique se o nome não está vazio
- Tente recarregar a página

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! 

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas:
1. Verifique a documentação acima
2. Consulte a [documentação oficial do Trello Power-Ups](https://developer.atlassian.com/cloud/trello/power-ups/)
3. Abra uma issue no repositório

## 🎉 Pronto!

Agora você tem um sistema completo de prioridades personalizável para seus boards do Trello!

---

Desenvolvido com ❤️ para melhorar sua produtividade no Trello

