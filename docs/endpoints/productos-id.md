# Endpoint: `GET /productos/id`
## Permite obtener productos por su id 

- **Método HTTP:** GET
- **URL:** /productos/id
- **Descripción:** Permite obtener productos por su id 
  
## Ejemplo de uso
  ```json
{
  "id": "123",
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