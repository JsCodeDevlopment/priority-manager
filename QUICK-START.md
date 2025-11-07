# 🚀 Quick Start - Priority Manager

## ⏱️ Instalação em 3 Minutos

### 1️⃣ Hospedar (escolha uma opção)

**Opção A: GitHub Pages** ⭐ Recomendado
```bash
# Fork este repo no GitHub
# Vá em Settings > Pages > Source: main branch
# URL: https://seu-usuario.github.io/priority-manager
```

**Opção B: Glitch**
```
1. Acesse glitch.com
2. New Project > Import from GitHub
3. Cole o URL deste repo
4. Copie o URL do projeto
```

**Opção C: Netlify**
```
1. Acesse app.netlify.com/drop
2. Arraste a pasta do projeto
3. Copie o URL gerado
```

### 2️⃣ Registrar no Trello

```
1. Acesse: https://trello.com/power-ups/admin
2. Clique em "New Power-Up"
3. Preencha:
   - Name: Priority Manager
   - Iframe connector URL: SEU_URL/index.html
4. Marque as capacidades:
   ☑️ authorization-status
   ☑️ card-badges
   ☑️ card-buttons
   ☑️ card-detail-badges
   ☑️ card-back-section
   ☑️ board-buttons
   ☑️ show-settings
5. Salve e copie o App Key
```

### 3️⃣ Configurar App Key

Edite `js/power-up.js`:

```javascript
// Linha 114 - Substitua SEU_APP_KEY_AQUI pelo App Key do Trello
appKey: 'sua-app-key-aqui',
```

Commit e push (ou re-upload).

### 4️⃣ Ativar no Board

```
1. Abra um board do Trello
2. Menu > Power-Ups > Custom
3. Encontre "Priority Manager"
4. Clique em "Add"
```

### 5️⃣ Usar

**Criar Prioridades:**
- Menu do Board > "Gerenciar Prioridades"
- Adicione nome e cor
- Clique em "➕ Adicionar Prioridade"

**Atribuir ao Card:**
- Abra um card
- Clique em "Prioridade"
- Selecione a prioridade

**Pronto! 🎉**

## 📋 Exemplo de Prioridades

Crie estas 4 prioridades para começar:

| Nome | Cor | Hex |
|------|-----|-----|
| 🔴 Crítica | Vermelho | #DC3545 |
| 🟠 Alta | Laranja | #FD7E14 |
| 🟡 Média | Amarelo | #FFC107 |
| 🟢 Baixa | Verde | #28A745 |

## 🆘 Problemas?

- **Power-Up não carrega**: Verifique se o URL usa HTTPS
- **Não aparece no board**: Certifique-se que você é admin do workspace
- **Badges não aparecem**: Configure o App Key corretamente

## 📚 Mais Informações

- Documentação completa: `README-PT.md`
- Guia de instalação: `INSTALL.md`
- Casos de uso: Veja o README

---

**Tempo total: 3-5 minutos** ⏱️

