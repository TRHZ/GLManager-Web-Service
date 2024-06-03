# Endpoint: `GET /materiales/id`
## Permite obtener materiales por su id 

- **Método HTTP:** GET
- **URL:** /materiales/id
- **Descripción:** Permite obtener materiales por su id 
  
## Ejemplo de uso
  ```json
  PUT /materiales/123
Content-Type: application/json

{
  "nombre": "Nuevo Nombre",
  "descripcion": "Nueva Descripción",
  "cantidad": 150,
  "stock_minimo": 75,
  "fecha_entrada": "2024-06-05"
}
```

## Respuesta de confirmación

- Código 201 indica que se ha creado un recurso de acuerdo con la solicitud POST.

  ```json
    {
  "message": "Successfully updated"
    }
  ```

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
    "errno": 400,
    "error": "Bad Request"
    }

    {
  "errno": 500,
  "error": "Internal Server Error"
    }

  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos.