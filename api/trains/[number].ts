import { JsonWebTokenError, NotBeforeError, TokenExpiredError } from 'jsonwebtoken';

import type { VercelRequest, VercelResponse } from '@vercel/node';
import type GeoJsonTrains from '../../interfaces/trains';

import { jwtVerify } from '../../services/tokenService';

const trains: GeoJsonTrains = require('../../data/trains.json');
import Status from '../../data/response.json';

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== 'GET') return response.status(405).send(Status[405]);
  const { authorization } = request.headers
  if (!authorization) return response.status(403).send(Status[403]);
  const trainNumber = request.query.number;
  const token = authorization.split(' ')[1] as string;
  try {
    const isAuthenticated = await jwtVerify(token)
    if (!isAuthenticated) return response.status(403).send(Status[403]);
    const matchedTrain = trains.features.find(train => train.properties.number === trainNumber)
    if (matchedTrain
      && Object.prototype.hasOwnProperty.call(matchedTrain, 'properties')
    ) return response.status(200).send(matchedTrain)
    else return response.status(404).send(Status[404])
  } catch (error) {
    if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError || error instanceof NotBeforeError)
      return response.status(401).send({ ...Status[401], error })
    else {
      console.log(error)
      return response.status(500).send(Status[500])
    }
  }
}
