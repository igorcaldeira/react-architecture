# React Architecture

## Sobre

Este projeto tem como objetivo mostrar uma sugestão de estrutura de pastas para um projeto em react de múltiplo propósito.
A estrutura inicial parte do [Create React App](https://github.com/facebook/create-react-app), é uma base extremamente versátil e utilizada na comunidade.

Uma das características mais interessantes de trabalhar com uma biblioteca como o react é ter a liberade de adotar inúmeras estruturas de acordo com o objetivo proposto. Este projeto é uma sugestão de uma estrutura que escala bem e é ótimo para projetos comerciais.

## Visão geral

## Estrutura

Segue abaixo uma listagem das pastas que estão a nível da raiz `/src` do projeto, assim como uma descrição do objetivo da mesma.
Estas estruturas podem ter subpastas, as mesmas serão descritas em subtópicos.

#### 1 - Assets

A pasta onde se localiza arquivos de detalhes da aplicação.

#### 1.1 - Assets > Icons

#### 1.2 - Assets > Images

#### 2 - Components

A pasta onde se localiza a maior quantidade de componentes React do projeto.

#### 1.2 - Components > Form

Seção de componentes focada em formulários.

Exemplo: Input de texto, input de número e wrapper/containers de formulários.

#### 1.2 - Components > Layout

Seção de componentes focada em layout.

Exemplo:

- Layout/Wrapper da área publica do sitema (que contém Login / Esqueci minha senha/Primeiro cadastro e afins);
- Layout/Wrapper da área restrita do sistema (que contém Dashboard / Páginas internas e afins)

#### 1.2 - Components > Structure

Seção de componentes focada em elementos comuns e reutilizáveis em todo sistema.

Exemplo: Botões, Janelas/Modal, Menu, Linha do tempo, Cards, Tabelas;

#### 1.2 - Components > Contexts

Pasta para componentes reutilizáveis em um contexto.
Esta seção somente comporta múltiplos diretórios.

#### 1.2 - Components > Contexts > [Context]

Pasta de componentes de um contexto.

Exemplo:

#### 3 - Constants

Arquivos JSON que tenham grandes coleções de constantes utilizadas no projeto.

Exeplo de arquivos encontrados aqui:

- `endpoints.js` como a relação de endpoints que a aplicação acessa;
- `menu.js` como a relação das opções disponíveis no menu;
- `routes.js` como a relação de rotas disponíveis no sistema;

#### 4 - Hooks

Arquivos javascript que exportam hooks úteis e comuns na aplicação.

Exemplo de arquivos encontrados aqui:

- `useNetwork.js` como um hook para verificar o status da internet;
- `usePortal.js` como um hook para facilitar o uso do React Portal;
- `useScroll.js` como um hook para facilitar o uso do acompanhamento do scroll do usuário;

#### 5 - Lib

Neste diretório ficam arquivos relacionados a funções ou metodos que auxiliam ou automatizam tarefas.

#### 6 - Locales

Neste diretório ficam arquivos relacionados a internacionalização das pages.

Exemplo de arquivos encontrados aqui:

- `en.json` um arquivo json titulos, subtitulos, preview em inglês;
- `es.json` um arquivo json titulos, subtitulos, preview em espanhol;

#### 7 - Pages

Arquivos jsx que exportam componentes referentes a uma paginas a ser renderizada pelo navegador em uma rota especifica.

#### 8 - Store

O diretório Store é onde fica armazenada toda a gerência de estado da aplicação. Nela são armazenados os `ducks` e os `sagas`. É interessante salvar cada `duck` e `sagas` em seu diretório correspondente, por exemplo:

- `auth/auth.ducks.js` esse arquivo javascript é responsável por exportar as `actions`, `reducer` e os `types` referentes a autenticação;
- `auth/auth.sagas.js` esse arquivo javaScript é responsavel por exportar funcões que fazem sentido no dominio do login, como por exemplo, `signIn`;

#### 9 - Services

Arquvios javascript que exportam conexões com API's. Como por exemplo:

- `api.js` se refere a api consumida pelo front end;
- `webSocket.js` se refere ao sonsumo de algum websocket pelo front end;
- `otherAPI.js` se refere a qualquer outra API de terceiros por exemplo API do google

#### 10 - Providers

Arquivos que servem como um Wrapper para toda a aplicação. Como por exemplo:

- `ThemeProvider` é um provedor de tema para a aplicação;
- `IntlProvider` é um provedor de internacionalização para a aplicação;
