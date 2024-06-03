# Dockerfile
# Usa una imagen base de Node.js
FROM node:lts

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación correrá
EXPOSE 3050

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
