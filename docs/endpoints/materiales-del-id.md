# Endpoint: `POST /materiales/del/id`
## Crear Tarjeta 

- **Método HTTP:** POST
- **URL:** /tarjetas
- **Descripción:** Crea una nueva tarjeta 
- **Parámetros de URL:** 
  {id} (obligatorio): Identificador único del material a eliminar.
  
## Ejemplo de uso
  ```json
  DELETE /materiales/del/123

```

## Respuesta de confirmación

- Código 201 indica que se ha creado un recurso de acuerdo con la solicitud POST.

  ```json
  {
  "message": "Successfully deleted"
    }
  ```

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
  "errno": 404,
  "error": "Not found"
    }
  ```

  ```json
    {
  "errno": 500,
  "error": "Internal Server Error"
    }
  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos.