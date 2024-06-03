# Endpoint: `GET /all/recent`
## Muestra los productos y materiales mas recientes 

- **Método HTTP:** GET
- **URL:** /all/recent
- **Descripción:** Muestra los productos y materiales mas recientes 

  
## Ejemplo de respuesta
  ```json
  [
  {
    "id": "1",
    "nombre": "Producto 1",
    "descripcion": "Descripción del Producto 1",
    "fecha_creacion": "2024-06-03"
  },
  {
    "id": "1",
    "nombre": "Material 1",
    "descripcion": "Descripción del Material 1",
    "fecha_creacion": "2024-06-02"
  }
]
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