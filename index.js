const http = require('http');

// Verificación de versión de Node.js (tu código original)
if (parseInt(process.versions.node.split('.')[0]) < 6) {
  throw new Error('vm2 requires Node.js version 6 or newer.');
}

// Cargamos tu módulo principal
const vm2 = require('./lib/main');

// Creamos un servidor HTTP para Render
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    message: 'Servidor funcionando correctamente',
    version: vm2?.version || 'Desconocido'
  }));
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
