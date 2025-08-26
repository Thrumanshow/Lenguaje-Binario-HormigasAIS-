# .HORMIGASAIS - Ejemplo de manejo de imágenes
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
