<h2 align="center">
Bootcamp Dual web/mobile <br>
 <img align="center"  height="120" width="120" src="https://raw.githubusercontent.com/cypress-io/cypress-icons/e61b554695b28267a1387a839f816c73e7a7e95e/src/logo/cypress-io-logo.svg"> 
 <img align="center"  height="40" width="40" src="https://codecept.io/logo.svg"  alt="codeceptjs"> 
  <img align="center"  height="40" width="40" src="https://github.com/FeBlanco/FeBlanco/assets/43914674/83508814-7d34-4943-8b4b-f68b44a01124" alt="appium">
</h2>

**Projeto feito no curso**

Este projeto foi criado com o intuito de aprender como criar arquiteturas de automação de teste em ambientes web com cypress, e mobile com codeceptJS e appium através do curso oferecido pelo Bootcamp da [QAxperience](https://qaxperience.com/pt/ "QAxperience") com a mentoria do Fernando Papito.

Nele automatizamos o sistema do Healthxp feito exclusivamente para o curso, sendo um sistema de gerenciamento de  alunos de uma academia.

![home cy js](https://github.com/FeBlanco/cypress-basico-udemy/assets/43914674/a56a45a5-706c-4f44-9d9c-28b604ef898e)
![Healthxp_cypress](https://github.com/FeBlanco/cypress-codeceptjs-appium-dualxperience-healthxp/assets/43914674/6ea0174a-01be-43fc-bd62-e782532cb2e3)

### Instalação e Execução

Para rodar o projeto,  você  precisará  do: 
[NodeJS - Vesion 18](https://nodejs.org/en/download/ "NodeJS -Vesion 18") e do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "npm") instalado.

### Aplicação Local
O  projeto da aplicação que está sendo testada no curso foi hospedada  em um projeto local.
Para instalar as dependências do  Healthxp acesse as  pastas no terminal em guias separadas `/apps/healthxp/api` e `/apps/healthxp/web`. Execute o comando `npm install`, e para subir a api e a página web use o comando `npm run dev`

### Cypress (web)
Após ter as instância do Healthxp de pé, entre na pasta web do projeto de automação `projects/healthxp-dual/web`  e rode o comando: `npm install` e dessa forma todas as dependências serão instaladas.

Para rodar os testes, após ter instalado o cypress com o comando acima, navegue para a pasta raiz do projeto e execute: 

modo interativo:

	npx cypress open

 modo headless:

    npx cypress run
 
  reports com tesults:

    npm run test

### CodeceptJs + appium (mobile)
Para rodar o projeto,  você  precisará ter instalados: 
[JDK - Vesion 20](https://www.oracle.com/br/java/technologies/downloads// "JDK - Vesion 20") | [Android Studio](https://developer.android.com/studio "Android Studio") | [Appium Inspector](https://developer.android.com/studiohttps://github.com/appium/appium-inspector/releases "Appium Inspector")

Configure os capabilities no Appium Inspector, salve e clique em start session para iniciar o appium inspector.
![capabilities](https://github.com/FeBlanco/cypress-basico-udemy/assets/43914674/782cfcab-821e-487f-941f-42a028a925fe)

Após ter as instância do Healthxp de pé, entre na pasta mobilw do projeto de automação`projects/healthxp-dual/mobile` e rode o comando: `npm install` e dessa forma todas as dependências serão instaladas.
Agora em guias separadas dentro de  `projects/healthxp-dual/mobile`:

Coloque o servidor do appium no ar:

	npx appium

 para rodar os testes mobile:

    npx codeceptjs run
 
 ou

    npm run test

## Tesults
Reports com [% Tesults](https://www.tesults.com/ "% Tesults") <br>
![Dual-tesults (3)](https://github.com/FeBlanco/cypress-basico-udemy/assets/43914674/3b515531-6c83-4ac8-91c1-1d63ccc0b06e)

## Conceitos aplicados:

 - Conhecendo a aplicação do Healthxp (Backeend, Frontend e Mobile)
 - Automatizar fluxo e2e web e mobile
 - Criar arquiteturas  de automação de testes web  e  mobile
 - Automação de testes web com cypress
 - Automação de testes mobile android com codeceptjs + appium
 - Desenvolver uma api Helper
 - Criando comandos personalizados
 - Relatorio de testes com Tesults.
