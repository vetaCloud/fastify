import { FastifyInstance } from 'fastify';
import indexController from './index.controller';

async function indexRoutes(server: FastifyInstance) {
  server.post('/upload',  indexController.uploadFile )
}

export default indexRoutes;