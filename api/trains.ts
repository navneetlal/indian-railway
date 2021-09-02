import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';

import type { VercelRequest, VercelResponse } from '@vercel/node';

import { jwtVerify } from '../services/tokenService';

import trains from '../data/listOfTrains.json';
import Status from '../data/response.json';

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'GET') return response.status(405).send(Status[405]);

  const { authorization } = request.headers
  if (!authorization) return response.status(403).send(Status[403]);

  const perPage = parseInt(request.query.perPage as string) || 10;
  const page = parseInt(request.query.page as string) || 1;
  const type = request.query.type;

  if (perPage > 100) return response.status(413).send(Status[413]);

  const token = authorization.split(' ')[1] as string;
  try {
    const isAuthenticated = await jwtVerify(token)
    if (!isAuthenticated) return response.status(403).send(Status[403]);
    const listOfTrains = trains.filter((train: any) => type ? train.type === type : true)
    const totalTrains = listOfTrains.length;
    const responseObj = {
      page,
      perPage,
      total: totalTrains,
      result: listOfTrains.slice((page - 1) * perPage, page * perPage)
    }
    return response.status(200).send(responseObj)
  } catch (error) {
    if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
      return response.status(401).send({ ...Status[401], error })
    else return response.status(500).send(Status[500])
  }

}
