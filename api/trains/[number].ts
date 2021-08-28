import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';

import type { VercelRequest, VercelResponse } from '@vercel/node';
import type GeoJsonTrains from '../../interfaces/trains';

import { jwtVerify } from '../../services/tokenService';

const trains: GeoJsonTrains = require('../../data/trains.json');

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'GET') return response.status(405).send('Method Not Allowed');
  const { authorization } = request.headers
  if (!authorization) return response.status(403).send('Forbidden');
  const trainNumber = request.query.number;
  const token = authorization.split(' ')[1] as string;
  try {
    const isAuthenticated = await jwtVerify(token)
    if (!isAuthenticated) return response.status(403).send('Forbidden');
    const matchedTrain = trains.features.find(train => train.properties.number === trainNumber)
    return response.status(200).send(matchedTrain)
  } catch (error) {
    if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
      return response.status(400).send(error)
    else return response.status(500).send('Internal server error')
  }
}
