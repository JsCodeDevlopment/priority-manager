# 📦 Guia de Instalação - Priority Manager

## ⚡ Instalação Rápida (5 minutos)

### Pré-requisitos

- Conta no Trello
- Conta no GitHub (para hospedagem gratuita)
- Navegador moderno

### Passo 1: Preparar os Arquivos

#### Opção A: GitHub Pages (Recomendado - Gratuito)

1. **Fork este repositório**
   - Clique em "Fork" no canto superior direito
   - Aguarde a conclusão do fork

2. **Ative o GitHub Pages**
   - No seu fork, vá em `Settings` → `Pages`
   - Em "Source", selecione `main` branch
   - Clique em "Save"
   - Anote o URL gerado (ex: `https://seuusuario.github.io/priority-manager`)

3. **Aguarde a publicação**
   - Pode levar 2-5 minutos
   - Teste acessando o URL no navegador

#### Opção B: Glitch (Mais Simples)

1. **Crie um projeto no Glitch**
   - Acesse https://glitch.com
   - Clique em "New Project" → "Import from GitHub"
   - Cole: `https://github.com/seu-usuario/priority-manager`

2. **Obtenha o URL**
   - Clique em "Share" → copie o "Live Site URL"
   - Exemplo: `https://priority-manager.glitch.me`

#### Opção C: Netlify

1. **Deploy no Netlify**
   - Arraste a pasta do projeto para https://app.netlify.com/drop
   - Aguarde o deploy
   - Copie o URL fornecido

### Passo 2: Registrar o Power-Up no Trello

1. **Acesse o Portal de Desenvolvedores**
   ```
   https://trello.com/power-ups/admin
   ```

2. **Criar Novo Power-Up**
   - Clique em **"New"** (botão verde)
   - Ou clique em **"Create new Power-Up"**

3. **Preencha as Informações Básicas**

   **Name (Nome)**:
   ```
   Priority Manager
   ```

   **Workspace**: Selecione seu workspace do Trello

   **Iframe connector URL**: Cole o URL do Passo 1
   ```
   https://seuusuario.github.io/priority-manager/index.html
   ```

   **Description (Descrição)**:
   ```
   Gerencie níveis de prioridade personalizados para seus cards com cores customizáveis
   ```

   **Support contact**: Seu email

4. **Configurar Capabilities (Capacidades)**

   Marque as seguintes opções:
   - ☑️ `authorization-status`
   - ☑️ `card-badges`
   - ☑️ `card-buttons`
   - ☑️ `card-detail-badges`
   - ☑️ `card-back-section`
   - ☑️ `board-buttons`
   - ☑️ `show-settings`

5. **Obter o App Key**
   - Após salvar, copie o **App Key** gerado
   - Ele estará no topo da página do Power-Up

### Passo 3: Configurar o App Key

1. **Edite o arquivo `js/power-up.js`**
   
   Localize a linha:
   ```javascript
   appKey: 'SEU_APP_KEY_AQUI',
   ```

   Substitua por:
   ```javascript
   appKey: 'sua-app-key-do-trello',
   ```

2. **Commit e Push** (se usando GitHub):
   ```bash
   git add js/power-up.js
   git commit -m "Adiciona App Key do Trello"
   git push origin main
   ```

3. **Aguarde a atualização** (1-2 minutos)

### Passo 4: Ativar no Board

1. **Abra um Board do Trello**
   - Vá para qualquer board que você administra

2. **Acesse o Menu de Power-Ups**
   - Clique em **"Power-Ups"** no menu do board
   - Ou clique em **"Mostrar Menu"** → **"Power-Ups"**

3. **Encontre seu Power-Up**
   - Role até "Custom" (Personalizado)
   - Você verá **"Priority Manager"**

4. **Adicione ao Board**
   - Clique em **"Add"** ou **"Adicionar"**
   - Aguarde a confirmação

### Passo 5: Primeiro Uso

1. **Configure as Prioridades**
   - No board, clique no menu (três pontos no canto superior direito)
   - Clique em **"Gerenciar Prioridades"**
   - Adicione suas primeiras prioridades

2. **Teste em um Card**
   - Abra qualquer card
   - Clique em **"Prioridade"** (botão com ícone de alvo)
   - Selecione uma prioridade
   - Veja o badge aparecer!

## ✅ Verificação da Instalação

Confirme que tudo está funcionando:

- [ ] O Power-Up aparece na lista de Power-Ups do board
- [ ] O botão "Gerenciar Prioridades" aparece no menu do board
- [ ] É possível criar novas prioridades
- [ ] O botão "Prioridade" aparece nos cards
- [ ] É possível atribuir prioridades aos cards
- [ ] Os badges aparecem nos cards

## 🐛 Solução de Problemas

### Erro: "Power-Up not found"

**Causa**: URL incorreto ou arquivos não acessíveis

**Solução**:
1. Teste o URL no navegador: `https://seu-url/index.html`
2. Verifique se retorna a página HTML (não erro 404)
3. Certifique-se que usa HTTPS (não HTTP)

### Erro: "Failed to load"

**Causa**: CORS ou configuração de segurança

**Solução**:
1. Se usando servidor próprio, configure CORS:
   ```
   Access-Control-Allow-Origin: https://trello.com
   ```
2. Use GitHub Pages ou Glitch (já configurados corretamente)

### Power-Up não aparece em "Custom"

**Causa**: Você precisa ser admin do workspace

**Solução**:
1. Verifique se você é admin do workspace
2. Ou crie um novo workspace onde você será admin
3. Crie o Power-Up nesse workspace

### Badges não aparecem

**Causa**: App Key não configurado ou incorreto

**Solução**:
1. Verifique se copiou o App Key corretamente
2. Sem espaços extras
3. Re-faça o deploy após alterar

## 🔧 Configurações Opcionais

### Personalizar Ícone

1. Crie uma imagem PNG 128x128 pixels
2. Salve como `images/icon.png`
3. Faça upload junto com os arquivos
4. No Trello Power-Up admin, adicione o URL:
   ```
   https://seu-url/images/icon.png
   ```

### Alterar Cores Padrão

Edite `js/client.js`:

```javascript
// Linha ~83
colorInput.value = '#3498DB'; // Sua cor preferida
```

### Adicionar Analytics (Opcional)

Adicione Google Analytics editando `index.html`:

```html
<!-- Antes do </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📱 Testar em Múltiplos Dispositivos

O Power-Up funciona em:

- 💻 **Desktop**: Chrome, Firefox, Safari, Edge
- 📱 **Mobile**: Trello App (iOS/Android)
- 🌐 **Web Mobile**: Navegadores móveis

## 🔄 Atualizações Futuras

Para atualizar o Power-Up:

1. **Faça as mudanças** nos arquivos
2. **Commit e Push** (GitHub)
3. **Aguarde** o deploy automático
4. **Recarregue** o Trello (Ctrl+R)

Não é necessário reconfigurar no Trello!

## 📊 Monitoramento

### Verificar se está Online

Teste periodicamente:
```bash
curl -I https://seu-url/index.html
```

Deve retornar: `200 OK`

### Logs de Erro

Abra o Console do Navegador (F12):
- Tab "Console" para erros JavaScript
- Tab "Network" para erros de carregamento

## 🆘 Precisa de Ajuda?

1. **Releia este guia** - 90% dos problemas são resolvidos aqui
2. **Console do navegador** (F12) - Veja os erros
3. **GitHub Issues** - Reporte bugs
4. **Documentação Trello** - https://developer.atlassian.com/cloud/trello/

## ✅ Checklist Final

Antes de marcar como concluído:

- [ ] Arquivos hospedados com HTTPS
- [ ] Power-Up criado no Trello
- [ ] App Key configurado
- [ ] Power-Up adicionado a um board
- [ ] Prioridades criadas e testadas
- [ ] Badges aparecem nos cards

## 🎉 Parabéns!

Você instalou com sucesso o Priority Manager! 

Próximos passos:
1. Leia o `README.md` para uso avançado
2. Configure suas prioridades
3. Compartilhe com sua equipe

---

**Tempo estimado**: 5-10 minutos  
**Dificuldade**: ⭐⭐ (Fácil)  
**Custo**: 💰 Grátis

Se este guia te ajudou, considere dar uma ⭐ no GitHub!

