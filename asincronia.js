const fs = require('node:fs')

console.log('1. Iniciando lectura de archivos...')

fs.readFile('./archivo1.txt', 'utf-8', (err, contenido1) => { 
  if (err) return console.error('Error en archivo 1:', err.message)
  console.log('➔ Contenido del primer archivo:', contenido1)
})

console.log('2. Servidor libre ejecutando otras tareas en segundo plano...')

fs.readFile('./archivo2.txt', 'utf-8', (err, contenido2) => {
  if (err) return console.error('Error en archivo 2:', err.message)
  console.log('➔ Contenido del segundo archivo:', contenido2)
})

console.log('3. Fin del script principal.')
