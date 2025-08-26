const https = require('https');

const binaryName = "08 41 44 39 35 33 27 45 01 09 19.png";
const releaseBaseUrl = "https://github.com/Thrumanshow/HormigasAIS-Contribuciones/releases/download/hc1.0/";
const imageUrl = releaseBaseUrl + binaryName.replace(/ /g, "%20");

function validarImagen(url, nombreBinario) {
    const nombreArchivo = url.split("/").pop();

    if (nombreArchivo !== nombreBinario.replace(/ /g, "%20")) {
        console.log(`❌ Error: El nombre de la imagen no coincide. Encontrado: ${nombreArchivo}`);
        return;
    }

    https.get(url, (res) => {
        if (res.statusCode === 200) {
            console.log(`✅ Imagen encontrada y nombre correcto: ${nombreArchivo}`);
            console.log(`🔗 URL lista para usar: ${url}`);
        } else {
            console.log(`❌ Error: La imagen no está accesible en la URL. Status: ${res.statusCode}`);
        }
    }).on('error', (e) => {
        console.log(`❌ Error al acceder a la URL: ${e.message}`);
    });
}

validarImagen(imageUrl, binaryName);
