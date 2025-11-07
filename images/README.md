# 🖼️ Imagens e Ícones

## 📁 Conteúdo desta Pasta

Esta pasta contém os recursos visuais do Power-Up:

- `icon.png` - Ícone principal do Power-Up (128x128px)

## 🎨 Criar o Ícone

### Requisitos

- **Tamanho**: 128x128 pixels
- **Formato**: PNG com fundo transparente
- **Tema**: Relacionado a prioridades (alvo, estrela, flag, etc.)

### Opções

#### Opção 1: Usar Ícone Gratuito

Sites recomendados:
- **Flaticon**: https://www.flaticon.com
- **Icons8**: https://icons8.com
- **Iconscout**: https://iconscout.com

Busque por: "priority", "target", "flag", "star"

#### Opção 2: Criar Próprio

Use ferramentas como:
- **Canva**: https://www.canva.com
- **Figma**: https://www.figma.com
- **Photoshop**
- **GIMP** (gratuito)

#### Opção 3: Emoji como Ícone

Use um emoji converter:
1. Escolha um emoji: 🎯 🚩 ⭐ 📌
2. Acesse: https://www.favicon-generator.org
3. Cole o emoji
4. Baixe como PNG 128x128

## 📦 Instalar o Ícone

### Método 1: Local

```
1. Salve a imagem como icon.png
2. Coloque nesta pasta (images/)
3. Faça upload junto com os outros arquivos
```

### Método 2: CDN (Mais Fácil)

Use um ícone direto da internet:

No `manifest.json`:

```json
{
  "icon": {
    "url": "https://cdn-icons-png.flaticon.com/512/6897/6897039.png"
  }
}
```

No `js/power-up.js` (linha 32, 40, 63):

```javascript
icon: 'https://cdn-icons-png.flaticon.com/512/6897/6897039.png'
```

## 🎯 Ícones Recomendados (Gratuitos)

### Opção 1: Alvo (Target)
```
https://cdn-icons-png.flaticon.com/512/6897/6897039.png
```

### Opção 2: Flag
```
https://cdn-icons-png.flaticon.com/512/1828/1828884.png
```

### Opção 3: Star
```
https://cdn-icons-png.flaticon.com/512/1828/1828884.png
```

### Opção 4: Exclamation
```
https://cdn-icons-png.flaticon.com/512/5693/5693144.png
```

## 🔄 Atualizar o Ícone

Depois de adicionar/mudar o ícone:

1. **Commit e push** (GitHub)
2. **Aguarde 1-2 minutos** para propagação
3. **Recarregue o Trello** (Ctrl+R)
4. **Limpe o cache** se necessário (Ctrl+Shift+Del)

## 🎨 Dicas de Design

### Cores
- Use cores vibrantes mas profissionais
- Azul: #0079BF (cor do Trello)
- Vermelho: #DC3545
- Verde: #28A745
- Roxo: #6C5CE7

### Estilo
- Simples e reconhecível
- Funciona em tamanhos pequenos
- Contrasta bem com fundo branco e escuro

### Evite
- Detalhes muito pequenos
- Textos (difícil de ler em 128px)
- Cores muito claras ou escuras demais

## 📐 Templates

### Template SVG (Alvo)

```svg
<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="60" fill="#DC3545"/>
  <circle cx="64" cy="64" r="45" fill="#fff"/>
  <circle cx="64" cy="64" r="30" fill="#DC3545"/>
  <circle cx="64" cy="64" r="15" fill="#fff"/>
</svg>
```

Salve como `icon.svg` e converta para PNG usando:
- https://cloudconvert.com/svg-to-png

## 🆘 Problemas

### Ícone não aparece

1. Verifique se o arquivo existe
2. Confirme que o caminho está correto
3. Use uma URL absoluta
4. Limpe o cache do navegador

### Ícone distorcido

1. Certifique-se que é 128x128px
2. Use formato PNG (não JPG)
3. Mantenha proporções quadradas

## 📝 Checklist

Antes de finalizar:

- [ ] Ícone criado ou escolhido
- [ ] Tamanho correto (128x128px)
- [ ] Formato PNG
- [ ] Fundo transparente (opcional)
- [ ] Arquivo salvo como `icon.png`
- [ ] Upload feito
- [ ] Testado no Trello

---

**Ícone padrão temporário**: Estamos usando um ícone de alvo do Flaticon via CDN. Você pode mantê-lo ou substituir pelo seu próprio.

