import { NextApiRequest, NextApiResponse } from 'next'

// importamos la BD local
import DB from '@database'

const getAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  // instacia de la BD
  const db = new DB()
  // Capturamos el id del query param. Se llama id porque asi nombre a mi pagina dinamica [id].ts
  const avoId = req.query.id.toString()

  const avo = await db.getById(avoId)

  // helper json() de NextJS
  res.status(200).json({ data: avo })
}

export default getAvo
