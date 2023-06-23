import { FastifyInstance } from 'fastify';
import indexController from './index.controller';

async function indexRoutes(server: FastifyInstance) {
  server.post('/upload', indexController.uploadFile),
  server.post('/upload/image/:height/:length/:quality', indexController.uploadImage)
}

export default indexRoutes;