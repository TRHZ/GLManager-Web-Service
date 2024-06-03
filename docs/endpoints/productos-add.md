# Endpoint: `POST /productos/add`
## Agregar productos a la tabla 

- **Método HTTP:** POST
- **URL:** /productos/add
- **Descripción:** Permite al usuario añadir datos a su tabla respectiva
  
## Ejemplo de uso
  ```json
POST /productos/add
Content-Type: application/json

{
  "nombre": "Producto Ejemplo",
  "descripcion": "Descripción del producto",
  "cantidad": 10,
  "stock_minimo": 5,
  "stock_maximo": 100,
  "fecha_entrada": "2024-06-03",
  "lote": "Lote001"
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