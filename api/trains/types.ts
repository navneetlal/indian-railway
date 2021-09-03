import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';

import type { VercelRequest, VercelResponse } from '@vercel/node';

import { jwtVerify } from '../../services/tokenService';
import trainType from '../../data/trainType.json';
import Status from '../../data/response.json';

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'GET') return response.status(405).send(Status[405]);
  const { authorization } = request.headers
  if (!authorization) return response.status(403).send(Status[403]);
  const token = authorization.split(' ')[1] as string;
  try {
    const isAuthenticated = await jwtVerify(token)
    if (!isAuthenticated) return response.status(403).send(Status[403]);
    return response.status(200).send({ page: 1, perPage: 20, total: trainType.length, result: trainType })
  } catch (error) {
    if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
      return response.status(401).send({ ...Status[401], error })
    else return response.status(500).send(Status[500])
  }
}
