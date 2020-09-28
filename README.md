# Exemplo de API rodando em Container Docker

Esta é uma API simples rodando dentro de um container Docker

# Requisitos

-   Node.js com NPM
-   Git
-   Docker

# Como rodar a API

Execute os comandos abaixo para que a aplicação rode na sua máquina:

### Clonar o repositório

```
git clone <url do repo no Github>
```

### Entrar no diretório do projeto

```
cd api-image-example
```

### Instalar as dependências do projeto

```
npm install
```

### Criar imagem Docker

```
docker build -t api-image-example:1.0.0 .
```

### Rodar a API no Container

```
docker run -p 8080:8080 -d api-image-example:1.0.0
```

### Acessar a API

Para acessar os métodos da API você poderá usar o POSTMAN:

-   `GET /produtos` retornar uma lista de produtos
-   `POST /produtos` criar um novo produto
-   `PUT /produtos/{produtoId}` atualizar um produto existente
-   `DELETE /produtos/{produtoId}` remover um produto existente

### Payload

Para criar ou atualizar um novo produto você necessita enviar o Payload abaixo no body do método POST:

```json
{
    "nome": "API REST",
    "fabricante": "Datenworks",
    "aprendiz": "Herley"
}
```
