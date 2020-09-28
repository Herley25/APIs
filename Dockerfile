FROM node:12-alpine

# criar um diretorio para a aplicação
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json para dentro da imagem
COPY package-lock.json ./
COPY package.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar todos os arquivos da aplicação para dentro da imagem
COPY . .

# Expor em qual porta do container a aplicação vai rodar
EXPOSE 8080

# Quando o container iniciar, iniciar a aplicação
CMD [ "node", "src/app.js" ]
