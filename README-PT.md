# 🎯 Priority Manager - Guia Completo em Português

## 🌟 Visão Geral

O **Priority Manager** é um Power-Up para Trello que permite criar sistemas de prioridade personalizados. Ao contrário das etiquetas padrão do Trello, este Power-Up oferece uma interface dedicada para gerenciar níveis de prioridade com cores personalizadas que aparecem diretamente nos cards.

## 💡 Por que usar?

- 🎨 **Visual**: Cores customizáveis para cada nível de prioridade
- 🚀 **Rápido**: Interface simples para atribuir prioridades
- 📊 **Organizado**: Veja as prioridades de todos os cards rapidamente
- 🔧 **Flexível**: Crie quantas prioridades quiser
- 💾 **Integrado**: Funciona nativamente dentro do Trello

## 📥 Instalação Detalhada

### Opção 1: Usar GitHub Pages (Gratuito e Fácil)

1. **Fork ou clone este repositório**
   ```bash
   git clone https://github.com/seu-usuario/priority-manager.git
   cd priority-manager
   ```

2. **Ative o GitHub Pages**
   - Vá em Settings > Pages
   - Em "Source", selecione "main" branch
   - Salve e aguarde alguns minutos
   - Seu Power-Up estará em: `https://seu-usuario.github.io/priority-manager`

3. **Configure no Trello**
   - Acesse: https://trello.com/power-ups/admin
   - Clique em "New Power-Up"
   - Preencha o Iframe connector URL com seu link do GitHub Pages

### Opção 2: Usar Glitch (Mais Simples)

1. **Acesse Glitch**
   - Vá para https://glitch.com
   - Clique em "New Project" > "Import from GitHub"
   - Cole o URL deste repositório

2. **Obtenha o URL**
   - Clique em "Share" > "Live Site"
   - Copie o URL (algo como `https://seu-projeto.glitch.me`)

3. **Configure no Trello**
   - Use o URL do Glitch como Iframe connector URL

### Opção 3: Servidor Próprio

Se você tem um servidor com HTTPS:

1. Faça upload de todos os arquivos
2. Certifique-se que está acessível via HTTPS
3. Use o URL do seu servidor no Trello

## 🎓 Tutorial de Uso Passo a Passo

### Primeira Configuração

#### 1. Adicionar o Power-Up ao Board

```
Board do Trello → Menu → Power-Ups → Procurar → "Priority Manager" → Adicionar
```

#### 2. Criar suas Primeiras Prioridades

Vamos criar um sistema básico de 4 níveis:

**a) Prioridade Crítica (Vermelho)**
- Nome: `Crítica`
- Cor: `#DC3545` (vermelho)
- Uso: Bugs críticos, bloqueadores

**b) Prioridade Alta (Laranja)**
- Nome: `Alta`
- Cor: `#FD7E14` (laranja)
- Uso: Features importantes, prazos curtos

**c) Prioridade Média (Amarelo)**
- Nome: `Média`
- Cor: `#FFC107` (amarelo)
- Uso: Tarefas importantes mas não urgentes

**d) Prioridade Baixa (Verde)**
- Nome: `Baixa`
- Cor: `#28A745` (verde)
- Uso: Melhorias, tarefas futuras

### Usando no Dia a Dia

#### Cenário 1: Novo Bug Descoberto

1. Crie um card "Bug: Login não funciona"
2. Abra o card
3. Clique no botão "Prioridade"
4. Selecione "Crítica" (vermelho)
5. O card agora mostra um badge vermelho

#### Cenário 2: Planejamento de Sprint

1. Revise todos os cards na coluna "Backlog"
2. Para cada card:
   - Abra → Clique em "Prioridade"
   - Escolha o nível apropriado
3. Agora você vê visualmente as prioridades de todos os cards

#### Cenário 3: Alterar Prioridade

1. Abra o card
2. Clique no badge de prioridade ou no botão "Prioridade"
3. Selecione a nova prioridade
4. Pronto! A mudança é instantânea

## 🎨 Guia de Cores Recomendadas

### Sistema Tradicional (4 níveis)
```
Crítica: #DC3545 (Vermelho escuro)
Alta:    #FD7E14 (Laranja)
Média:   #FFC107 (Amarelo)
Baixa:   #28A745 (Verde)
```

### Sistema Estendido (5 níveis)
```
Urgente: #C00000 (Vermelho sangue)
Alta:    #FF4444 (Vermelho claro)
Média:   #FFA500 (Laranja)
Baixa:   #FFD700 (Dourado)
Backlog: #4CAF50 (Verde)
```

### Sistema por Tipo (6 níveis)
```
Bug Crítico:  #E74C3C (Vermelho)
Bug:          #F39C12 (Laranja)
Feature:      #3498DB (Azul)
Melhoria:     #9B59B6 (Roxo)
Documentação: #1ABC9C (Verde água)
Pesquisa:     #95A5A6 (Cinza)
```

## 🔍 Casos de Uso Comuns

### 1. Desenvolvimento de Software

**Equipe**: Desenvolvedores, QA, Product Manager

**Prioridades**:
- 🔴 P0 - Crítico (Bloqueador de produção)
- 🟠 P1 - Alta (Feature principal da sprint)
- 🟡 P2 - Média (Feature secundária)
- 🟢 P3 - Baixa (Nice to have)

### 2. Atendimento ao Cliente

**Equipe**: Suporte, Customer Success

**Prioridades**:
- 🔴 Urgente (Cliente VIP, problema crítico)
- 🟠 Alta (Problema afeta múltiplos clientes)
- 🟡 Normal (Solicitação padrão)
- 🟢 Baixa (Dúvida simples)

### 3. Marketing

**Equipe**: Marketing, Designers, Copywriters

**Prioridades**:
- 🔴 Deadline Hoje
- 🟠 Esta Semana
- 🟡 Este Mês
- 🟢 Próximo Mês
- 🔵 Ideias Futuras

### 4. Gestão de Projetos

**Equipe**: Project Managers, Stakeholders

**Prioridades**:
- 🔴 Deve Ter (Must Have)
- 🟠 Deveria Ter (Should Have)
- 🟡 Poderia Ter (Could Have)
- 🟢 Não Terá Agora (Won't Have)

## 🛠️ Personalização Avançada

### Modificar Cores Padrão

Edite `js/client.js` e altere a cor padrão:

```javascript
colorInput.value = '#0079BF'; // Sua cor preferida
```

### Adicionar Ícones Personalizados

No `manifest.json`, altere o ícone:

```json
"icon": {
  "url": "./images/seu-icone.png"
}
```

### Limitar Número de Prioridades

Em `js/client.js`, adicione validação:

```javascript
async function addPriority() {
  const priorities = await getPriorities(t);
  if (priorities.length >= 10) {
    alert('Limite de 10 prioridades atingido!');
    return;
  }
  // ... resto do código
}
```

## 📊 Melhores Práticas

### ✅ Faça

- Use cores distintas e contrastantes
- Mantenha nomes curtos (máx. 15 caracteres)
- Crie entre 3-6 níveis (não mais que isso)
- Documente o significado de cada nível
- Revise prioridades regularmente

### ❌ Evite

- Cores muito similares (#FF0000 e #FF1111)
- Muitos níveis de prioridade (mais de 8)
- Nomes ambíguos ("Importante", "Muito Importante")
- Mudar prioridades sem motivo
- Deixar cards sem prioridade

## 🔐 Segurança e Privacidade

- ✅ **Dados locais**: Tudo é armazenado no seu board do Trello
- ✅ **Sem servidor externo**: Nenhum dado é enviado para fora
- ✅ **Código aberto**: Você pode auditar todo o código
- ✅ **Sem analytics**: Não rastreamos seu uso

## 🐛 Problemas Comuns e Soluções

### Problema: "Power-Up não carrega"

**Soluções**:
1. Verifique se o URL usa HTTPS (não HTTP)
2. Teste o URL no navegador diretamente
3. Limpe cache: Ctrl + Shift + Del
4. Desative e reative o Power-Up

### Problema: "Prioridades não aparecem nos cards"

**Soluções**:
1. Verifique se você atribuiu uma prioridade ao card
2. Atualize a página (F5)
3. Verifique nas configurações do board se o Power-Up está ativo

### Problema: "Não consigo adicionar prioridade"

**Soluções**:
1. Certifique-se de preencher o nome
2. Verifique se está logado no Trello
3. Tente em outro navegador

### Problema: "Badge não mostra cor correta"

**Soluções**:
1. Use cores em formato hexadecimal (#RRGGBB)
2. Recarregue a página
3. Edite e salve a prioridade novamente

## 📈 Roadmap Futuro

Funcionalidades planejadas:

- [ ] Filtrar cards por prioridade
- [ ] Ordenar listas por prioridade
- [ ] Estatísticas de prioridades
- [ ] Exportar/Importar configurações
- [ ] Ícones customizados por prioridade
- [ ] Notificações de prioridade alta
- [ ] Integração com automação do Trello

## 🤝 Contribuindo

Quer melhorar o Priority Manager? 

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Contato e Suporte

- 📚 **Documentação**: Leia este README completo
- 🐛 **Bugs**: Abra uma issue no GitHub
- 💡 **Sugestões**: Compartilhe nas issues
- 📧 **Email**: [seu-email@exemplo.com]

## 🙏 Agradecimentos

Obrigado por usar o Priority Manager! 

Se este Power-Up te ajudou, considere:
- ⭐ Dar uma estrela no GitHub
- 📢 Compartilhar com sua equipe
- 💬 Deixar feedback

---

**Desenvolvido com ❤️ para aumentar sua produtividade no Trello**

Versão 1.0.0 | Última atualização: 2025

<br>
<div align="center">
  <img src="https://avatars.githubusercontent.com/u/100796752?s=400&u=ae99bd456c6b274cd934d85a374a44340140e222&v=4" width="100" style="border-radius: 50%" />
  <br>
  <strong>Jonatas Silva</strong>
  <br>
  Senior Software Engineer / CTO & Tech Lead at <a href="https://pokernetic.com/">PokerNetic</a>
</div>
