import auth from 'basic-auth';

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { jwtSign } from '../services/tokenService';
import mongoService from '../services/mongoService';

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'POST') return response.status(405).send('Method Not Allowed');

  const credential = auth(request);
  if (!credential) return response.status(400).send('Username or Password not provided.')
  
  const user = await mongoService(credential.name)
  if (
    user &&
    Object.prototype.hasOwnProperty.call(user, 'username') &&
    Object.prototype.hasOwnProperty.call(user, 'password') &&
    credential.name === user.username &&
    credential.pass === user.password
  ) {
    try {
      const token = await jwtSign(credential.name)
      return response
        .status(200)
        .send({ access_token: token, token_type: 'Bearer', expires_in: 3600 })
    } catch (error) {
      return response
        .status(500)
        .send('Internal server error')
    }
  }
  else return response.status(401).send('Invalid username or password.');
}