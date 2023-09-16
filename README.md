## Iniciando

Estas instruções vão mostrar como fazer uma cópia deste projeto e executá-lo localmente em um ambiente de desenvolvimento.

### Clonando o repositório:

```
git clone https://github.com/luisabfs/mackenzie-landing-page.git
```

### Rodando o servidor em desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

🎉  Agora é só abrir [http://localhost:3000](http://localhost:3000) com o seu navegador!

## Implementação

Principais bibliotecas:
* [`NextJS`](https://nextjs.org/) - framework React que nos permite criar aplicações web full-stack
* [`Tailwind CSS`](https://tailwindcss.com/) - framework CSS orientado a utilitários

### Estrutura do Projeto:

* O projeto foi inicializado usando o comando `create-next-app` para configurar uma aplicação Next.js.
* A estrutura do projeto inclui pastas para componentes, páginas, estilos e outros recursos estáticos.

### Configuração de Estilos:

* Tailwind CSS foi configurado e personalizado de acordo com as cores e estilos dos requisitos.
* Classes do Tailwind foram aplicadas diretamente aos elementos HTML nos componentes, aproveitando a abordagem de utility-first do Tailwind.

### Tipografia:

* Para carregar as fontes Inter e Bebas Neue, foi utilizado o pacote `next/font`, que facilita o carregamento de fontes da web de forma otimizada.
* As fontes Inter e Bebas Neue foram importadas e configuradas globalmente, permitindo seu uso em toda a página.
* As classes do Tailwind CSS foram usadas para definir estilos de texto, tamanhos de fonte e espaçamento entre linhas de forma consistente.

### Layout Responsivo:

* Media queries foram implementadas para controlar o layout e o estilo da página em diferentes pontos de interrupção.
* O sistema de grid do Tailwind CSS foi usado para criar layouts responsivos, enquanto flexbox foi aplicado para alinhar elementos de forma flexível.

### Imagens e Recursos Estáticos:

* Imagens e outros recursos estáticos foram armazenados na pasta public do projeto e carregados nos componentes conforme necessário.
* Manipulação de SVG para criação de ícone.
