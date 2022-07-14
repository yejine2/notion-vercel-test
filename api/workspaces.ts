import axios from 'axios'
import { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY, USERNAME } = process.env

export default async (req: VercelRequest, res: VercelResponse) => {
  const { id, method, data } = JSON.parse(req.body as string)
  const { data: returnValue } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`,
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': APIKEY as string,
      'username': USERNAME as string
    },
    data
  })
  
  res.status(200).json(returnValue)

  // netlify와 차이점 
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(returnValue)
  // }
}

