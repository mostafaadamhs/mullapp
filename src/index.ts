import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';

const server = express();
const crs = cors;
crs;

export const createNestServer = async expressInstance => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    { cors: true },
  );

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch(err => console.error('NEst broken', err));

export const api = functions.https.onRequest(server);
