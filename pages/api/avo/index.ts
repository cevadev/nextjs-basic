import { IncomingMessage, ServerResponse } from 'http'

// importamos la BD local
import DB from '@database'

const allAvo = async (req: IncomingMessage, res: ServerResponse) => {
  // instacia de la BD
  const db = new DB()
  const allEntries = await db.getAll()
  const length = allEntries.length

  // presentamos los datos al cliente
  // 1. status code exitoso
  res.statusCode = 200
  // 2. construimos el header
  res.setHeader('Content-type', 'application/json')
  // 3. enviamos la respuesta
  res.end(JSON.stringify({ length, data: allEntries }))
}

export default allAvo
