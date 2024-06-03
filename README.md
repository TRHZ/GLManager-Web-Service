# API para proyecto final
Se modifico el servicio web para ser implementado en mi proyecto para la especialidad.

## Datos a conocer
   **No todos las rutas funcionan**
   Me refiero a que no todas las rutas estan configuradas al 100%, es por ello avisar que las utilizadas son las unicas funcionales, el resto son extras.

## Tabla de contenido

- [API para proyecto final](#api-para-proyecto-final)
  - [Datos a conocer](#datos-a-conocer)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Debes asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:

```sh
https://github.com/TRHZ/GLManager-Web-Service.git
```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd GLManager-Web-Service
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    > **IMPORTANTE**
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

    ```sh
    docker-compose up -d
    ```

4. La API estará disponible en `http://localhost:3050`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)

