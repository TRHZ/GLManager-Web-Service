# Endpoint: `POST /materiales/add`
## Agregar materiales a la tabla 

- **Método HTTP:** POST
- **URL:** /materiales/add
- **Descripción:** Permite al usuario añadir datos a su tabla respectiva
  
## Ejemplo de uso
  ```json
  POST /materiales/add
Content-Type: application/json

{
  "nombre": "Material Ejemplo",
  "descripcion": "Descripción del material",
  "cantidad": 100,
  "stock_minimo": 50,
  "fecha_entrada": "2024-06-03"
}
```

## Respuesta de confirmación

- Código 201 indica que se ha creado un recurso de acuerdo con la solicitud POST.

  ```json
  {
    "status": 201,
    "message": "Created"
  }
  ```

## Respuestas de Errores Posibles
- Código 400 Bad Request: probelma con la solicitud.

  ```json
    {
    "errno": 400,
    "error": "Bad Request"
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