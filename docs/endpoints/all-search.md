# Endpoint: `GET /all/search`
## Buscar un Producto o Material 

- **Método HTTP:** GET
- **URL:** /all/search
- **Descripción:** Permite buscar un Producto o Material 
  
## Ejemplo de uso
  ```json
  {
  "productos": [
    {
      "nombre": "Producto 1",
    },
    {
      "nombre": "Producto 2",
    }
  ],
  "materiales": [
    {
      "nombre": "Material 1",
    }
  ]
}

```

## Respuesta de confirmación

- Respuesta Exitosa (Código 200 OK)

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
  "errno": 500,
  "error": "Internal Server Error"
    }
  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos.