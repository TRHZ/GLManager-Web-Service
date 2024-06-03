# Endpoint: `POST /tarjetas`
## Crear Tarjeta 

- **Método HTTP:** POST
- **URL:** /tarjetas
- **Descripción:** Crea una nueva tarjeta 
  
## Ejemplo de resultado
  ```json
  {
  "lowStockProducts": [...],
  "lowStockMaterials": [...]
}

```

## Respuestas de Errores Posibles

  ```json
    {
  "errno": 500,
  "error": "Internal Server Error"
    }

  ```

## Notas Adicionales
- Asegurate de incluir datos que sean validos.