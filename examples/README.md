📂 Ejemplos de uso — Lenguaje-Binario-HormigasAIS-Contribuciones 

Esta carpeta contiene ejemplos prácticos para demostrar cómo funciona el manejo de errores híbridos definido en el uso de Lenguaje Binario HormigasAIS. 

--- 

## 🐍 Python
Ejecutar el script: 
```bash
ejemplo-validar_imagen.py 
``` 
--- 

## NodeJS
Ejecutar el script:
```bash
ejemplo-validar_imagen.js 
```
--- 

 Ejemplo 1: Error estándar === <!-- index.html convencional -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo Sobrecarga</title>
</head>
<body>
    <h1>Galería de imágenes</h1>
    
    <!-- Uso de múltiples imágenes pesadas directamente en HTML -->
    <img src="imagenes/grande1.png" alt="Imagen 1" width="800">
    <img src="imagenes/grande2.png" alt="Imagen 2" width="800">
    <img src="imagenes/grande3.png" alt="Imagen 3" width="800">
    <img src="imagenes/grande4.png" alt="Imagen 4" width="800">
    <img src="imagenes/grande5.png" alt="Imagen 5" width="800"> 

    <p>Este enfoque aumenta significativamente el peso del repositorio y la carga de la página.</p>
</body>
</html> 

=== Ejemplo 2: Error híbrido Lenguaje -Binario-HormigasAIS=== # .HORMIGASAIS - Ejemplo de manejo de imágenes
properties:
  @owner-cristhiam-quinonez
resources:
  - resource: Release.HormigasAIS
    directives:
      description: "Imágenes validadas mediante identificador binario"
      type: library
settings:
  version: 1.0.0
  use_hybrid_validation: true
examples:
  - name: Imagen PNG validada
    id_binary: "08 41 44 39 35 33 27 45 01 09 19.png"
    description: "La imagen se carga solo si pasa validación, evitando sobrepeso"
