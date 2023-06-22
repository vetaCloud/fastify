import { FastifyInstance } from 'fastify';
import indexController from './index.controller';
const multipart = require('connect-multiparty');

async function indexRoutes(server: FastifyInstance) {
  server.post('/upload', 
  {
    preHandler: multipart(), 
    handler: indexController.uploadFile}
  );
}

export default indexRoutes;