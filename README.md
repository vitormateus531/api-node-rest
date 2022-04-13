# Sistema de gerenciamento de veículos

#### Instrução

  - Dsenevolver uma api que faça autenticação e insira uma lista de contatos na base.
 

#### Pré-requisitos
  - node
  - docker
  - mysql
  - postgresql

#### Executando a aplicação
Baixe o zip da aplicação ou clone o repoositório com o comando:
```sh
git clone <repositorio remoto>
```
rode o comando abaixo para executar a aplicação e subir os serviços necessários
```sh
docker-compose up
```
Importe os scripts sql anexados no projeto para as bases de dados indicadas.

Ao executar o comando sua aplicação rodará na url `localhost:3000`, basta digitar o caminho em seu navegador seguindo da rota que queira utilizar.

Obs: para usar as outras rotas primeiro será necessário se autenticar na rota `/authentication` e usar o token jwt.

### Rotas da aplicação.
A aplicação possui as seguintes rotas:

| Uri | Tipo | Valores 
| ------ | ------ | ---------|
| /authentication | POST | valida as credenciais do usuario e gera o token JWT |
| /contact/list | GET | Exibe a lista de contatos |
| /contact/create | POST | recebe um array de objetos de contatos e insere na base|

#### Curls de exemplo

/authentication:
```sh
curl --location --request POST 'http://localhost:3000/authentication' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "admin",
    "password": "admin",
    "workplace": "macapa"
}'
```
ao se autenticar voce terá que passar obrigatoriamente tres campos: name, password e workplace, o campo workplace terá duas opções `macapa` ou `varejao` que é equivalente ao local de trabalho.

/contact/list:
```sh
curl --location --request GET 'http://localhost:3000/contact/list' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIiwid29ya3BsYWNlIjoibWFjYXBhIiwiaWF0IjoxNjQ5ODIyMDIzLCJleHAiOjE2NDk4MjU2MjN9.YGJ2fYlFL3gQMGSo9Aqu353uS_-JNShD2sFS7vAmz0U'
```

/contact/create	:
```sh
curl --location --request POST 'http://localhost:3000/contact/create' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIiwid29ya3BsYWNlIjoibWFjYXBhIiwiaWF0IjoxNjQ5ODIyMDIzLCJleHAiOjE2NDk4MjU2MjN9.YGJ2fYlFL3gQMGSo9Aqu353uS_-JNShD2sFS7vAmz0U' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contacts": [
        {
            "name": "Srta. Isabelly Castro",
            "cellphone": "5541959365078"
        },
        {
            "name": "Ana Julia da Rocha",
            "cellphone": "5541923038062"
        },
        {
            "name": "Srta. Ana Júlia Ramos",
            "cellphone": "5541968425283"
        }
    ]
}'
```
