# 🧪 Como Testar o Priority Manager Localmente

## ⚠️ IMPORTANTE

Este projeto **NÃO funciona** se você simplesmente abrir o `index.html` no navegador!

É um **Power-Up do Trello** que precisa:
- ✅ Estar em um servidor com HTTPS
- ✅ Ser registrado no Trello
- ✅ Rodar dentro do Trello

## 🎯 Método Rápido: Servidor Local

### 1. Inicie o servidor local

```bash
# Opção A: Usar o servidor simples (já configurado)
npm start
```

Acesse: `http://localhost:3000`

**NOTA**: Você verá a página, mas ela NÃO funcionará completamente porque:
- ❌ Não está em HTTPS
- ❌ Não está registrado no Trello
- ❌ A API do Trello não está disponível

### 2. Expor para a internet (necessário para testar no Trello)

```bash
# Instale o ngrok
npm install -g ngrok

# Em outro terminal, exponha o servidor
npx ngrok http 3000
```

Você receberá um URL como: `https://abc123.ngrok.io`

### 3. Registre no Trello

1. Acesse: https://trello.com/power-ups/admin
2. Clique em "New"
3. Preencha:
   - **Name**: Priority Manager (Dev)
   - **Iframe connector URL**: `https://abc123.ngrok.io/index.html`
4. Habilite as capabilities:
   - Card Badges
   - Card Buttons
   - Board Buttons
   - Show Settings
   - Card Detail Badges
   - Card Back Section
5. Copie o **App Key**

### 4. Configure o App Key

Edite `js/power-up.js` na linha 154:

```javascript
appKey: 'cole-seu-app-key-aqui',
```

### 5. Ative no Trello

1. Abra um board do Trello
2. Menu → Power-Ups
3. Adicione "Priority Manager (Dev)"
4. Teste criando prioridades!

## 🚀 Método Recomendado: Deploy em Produção

### GitHub Pages (GRÁTIS)

1. **Crie um repositório no GitHub**
2. **Faça push do código**
3. **Ative GitHub Pages**:
   - Settings → Pages
   - Source: main branch
   - Save
4. **Aguarde 2-5 minutos**
5. **Use o URL**: `https://seu-usuario.github.io/priority-manager`

### Netlify (GRÁTIS)

1. Arraste a pasta para: https://app.netlify.com/drop
2. Copie o URL fornecido
3. Use no Trello

### Vercel (GRÁTIS)

```bash
npm install -g vercel
vercel
```

Siga as instruções e copie o URL.

## ✅ Verificação

Quando tudo estiver funcionando, você verá:

1. ✅ Botão "Prioridade" nos cards
2. ✅ Botão "Gerenciar Prioridades" no menu do board
3. ✅ Possibilidade de criar e atribuir prioridades
4. ✅ Badges coloridos nos cards

## 🐛 Problemas Comuns

### "Página em branco"
- ❌ **Causa**: Tentou abrir `index.html` diretamente
- ✅ **Solução**: Use um servidor + registre no Trello

### "TrelloPowerUp is not defined"
- ❌ **Causa**: Não está rodando dentro do Trello
- ✅ **Solução**: Registre o Power-Up e acesse pelo Trello

### "Failed to load"
- ❌ **Causa**: URL HTTP ao invés de HTTPS
- ✅ **Solução**: Use ngrok, GitHub Pages ou Netlify

## 📚 Documentação Completa

Veja `INSTALL.md` para instruções detalhadas de instalação em produção.

