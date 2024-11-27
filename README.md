# Scroll Animations with GSAP and React

Este projeto utiliza o **React** juntamente com a biblioteca **GSAP** para criar animações dinâmicas baseadas no **scroll**. Através do plugin **ScrollTrigger** do GSAP, as animações dos elementos da página são ativadas conforme o usuário rola a tela.

## Funcionalidades

- Animações fluídas com o movimento de rolagem (scroll).
- Efeitos de transição de opacidade, movimento e rotação de elementos com base no scroll do usuário.
- Implementação de uma timeline de animações que aparecem conforme o usuário passa por diferentes seções da página.

## Tecnologias Utilizadas

- **React**: Framework para a construção da interface de usuário.
- **GSAP (GreenSock Animation Platform)**: Biblioteca para animações de alto desempenho.
- **ScrollTrigger**: Plugin do GSAP que permite a sincronização de animações com o scroll da página.

## Como Funciona

### 1. **Estrutura do Código**

O código é dividido em dois **`useLayoutEffect`** principais que configuram as animações:

#### a) Primeira animação: `gsap.to(".relogio", {...})`

- Anima o elemento com a classe `.relogio` (imagem de um relógio) ao longo do scroll.
- A animação inclui uma transição de **posição** (`x`), **opacidade** (`opacity`) e **rotação** (`rotate`).
- O trigger para ativar a animação é a seção `.items`, e o início e o fim da animação são controlados pelos parâmetros `start` e `end`.

#### b) Segunda animação: `gsap.timeline({...})`

- Cria uma **timeline de animações** para três modelos de relógios.
- A animação é ativada conforme o usuário rola a página e se aproxima dos elementos `.models-item`.
- A animação dos modelos inclui uma transição de **opacidade** e **movimento no eixo Y** (`y`), fazendo com que cada modelo apareça com um efeito de deslizamento vertical.

### 2. **ScrollTrigger**

- O `ScrollTrigger` do GSAP é configurado para detectar a posição do scroll e disparar as animações quando os elementos definidos (`trigger`) entram na área da tela.
- A configuração **`scrub: true`** permite que a animação seja sincronizada com o movimento do scroll, criando uma experiência de rolagem interativa e fluída.
- Os **marcadores** (`markers: true`) são ativados para ajudar na visualização das posições de início e fim da animação (útil para debugging).

### 3. **Limpeza de Animações**

- Cada animação é limpa com `gsap.killTweensOf()` no retorno de cada `useLayoutEffect` para evitar vazamentos de memória e garantir que as animações sejam removidas quando o componente for desmontado.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado na sua máquina.

### Passo a Passo:

1. Clone o repositório para sua máquina local:

   ```bash
   https://github.com/ribbeiroana/scroll_react.git
   ```
2. No terminal execute o comando:

 ```bash
   npm install
   ```
    
  ```bash
   npm run dev
   ```