import requests

binary_name = "08 41 44 39 35 33 27 45 01 09 19.png"
release_base_url = "https://github.com/Thrumanshow/HormigasAIS-Contribuciones/releases/download/hc1.0/"
image_url = release_base_url + binary_name.replace(" ", "%20")

def validar_imagen(url, nombre_binario):
    nombre_archivo = url.split("/")[-1]
    if nombre_archivo != nombre_binario.replace(" ", "%20"):
        print(f"❌ Error: El nombre de la imagen no coincide. Encontrado: {nombre_archivo}")
        return None
    response = requests.head(url)
    if response.status_code == 200:
        print(f"✅ Imagen encontrada y nombre correcto: {nombre_archivo}")
        print(f"🔗 URL lista para usar: {url}")
        return url
    else:
        print(f"❌ Error: La imagen no está accesible en la URL. Status: {response.status_code}")
        return None

enlace_valido = validar_imagen(image_url, binary_name)

if enlace_valido:
    print(f"Se puede usar en los scripts de ejemplos: {enlace_valido}")
