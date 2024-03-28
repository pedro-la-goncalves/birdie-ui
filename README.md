# BirdieUi

Bem vindos! 👋

BirdUi é o front-end da aplicação Birdie que desenvolvi, que é uma plataforma de cadastro de hóspedes e reservas de quartos de um hotel. Você pode encontrar o back-end da aplicação [clicando aqui](https://github.com/pedro-la-goncalves/birdie-api).

## Configurando o projeto
### 1. Verifique a versão do Node em sua máquina
Recomendo que você esteja usando uma versão mais atual do Node. Durante o desenvolvimento deste projeto não foi utilizado Docker, então não há arquivos de imagem no momento. A versão do Node utilizada durante o desenvolvimento do projeto foi a **18.16.0**.

### 2. Clone o projeto para a sua máquina
```
git clone https://github.com/pedro-la-goncalves/birdie-ui.git
```

### 3. Instale as dependências
Abra um terminal no diretório do projeto e rode o seguinte comando:
```
npm install
```

### 4. Configurando a url para o projeto do back-end
No arquivo `src/environment/environment.ts` você deverá colocar a url onde o seu projeto do back-end estiver rodando. Já deixei a url `http://localhost:8080/api` que utilizei durante o desenvolvimento do projeto, mas saiba que este valor poderá mudar no caso de você já estiver utilizando a porta em um outro projeto.

### 5. Inicie a aplicação
Abra um terminal no diretório do projeto e rode o seguinte comando:
```
ng serve
```

### Alegria 🎉🎉
Caso você não tenha configurado o projeto do back-end você pode [clicar aqui](https://github.com/pedro-la-goncalves/birdie-api) para iniciar a configuração.
