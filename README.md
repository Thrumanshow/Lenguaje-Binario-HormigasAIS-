patch_id 

Autor: Cristhiam Quiñónez
Colaborador: Thrumanshow (GitHub) 

--- 

## Attach binaries by dropping them here or selecting them 

https://private-user-images.githubusercontent.com/179357123/482027182-c10aaaff-9062-4a73-a2f8-f241c8598eb9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTYyMDEyNDcsIm5iZiI6MTc1NjIwMDk0NywicGF0aCI6Ii8xNzkzNTcxMjMvNDgyMDI3MTgyLWMxMGFhYWZmLTkwNjItNGE3My1hMmY4LWYyNDFjODU5OGViOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgyNlQwOTM1NDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMmNhMDZjNmQ0NDJmMzU5ZWNmOTcwZjQwYmIwZDkyYjc2NWFiMDViMThkNzYzNTg3OTU0ODdiM2MyNGQ0MTAzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9._0A4Q55hPuYaGaF0eic5XwaXHVNSgYhWufQF5d9hQLQ

---

Descripción 

Este directorio contiene el parche .HORMIGASAIS y ejemplos de manejo de recursos binarios LBH: 

• Código binario → representación de palabras en LBH 

• Ejemplo de imagen → 02091401180915.png (BINARIO) 

Compatible con Python y JavaScript/NodeJS. 

Contenido del parche y ejemplos 

# ----------------------- # Parche YAML .HORMIGASAIS # ----------------------- properties: @owner-cristhiam-quinonez resources: - resource: GitHub.Thrumanshow directives: description: "Adjuntar recursos binarios con código LBH" type: collaborator - resource: HormigasAIS.Core directives: description: "Núcleo de parches y lógica binaria LBH" type: library settings: version: 1.0.0 compatible_with: [Python, JavaScript, NodeJS] binary_language_handling: true examples: - name: Archivo binario LBH file: 02091401180915.png description: "Imagen representando la palabra BINARIO en LBH" 

----------------------- # Ejemplos ejecutables # ----------------------- 

Python 

python3 ejemplo_binario_lbh.py 

JavaScript/NodeJS 

node ejemplo_binario_lbh.js 

Salida esperada: 

Archivo: 02091401180915.png Código LBH: (02)(09)(14)(01)(18)(09)(15) Palabra decodificada: BINARIO 
