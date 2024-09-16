//Conexión lista
const connectionReady = (cb = () =>{}) => {
    console.log('Listo para escuchar los mensajes')
    console.log('Cliente listo!');
    console.log('🔴 escribe: hola');
    cb()
}

//Verificación de QR
const connectionLost = (cb = () =>{}) => {
    console.log('** Error de autentificacion vuelve a generar el QRCODE (Borrar el archivo session.json) **');
    cb()
}

//Autenticación de módulos
module.exports = {connectionReady, connectionLost}