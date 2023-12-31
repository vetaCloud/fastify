import { FastifyInstance } from 'fastify';
import indexController from './index.controller';

async function indexRoutes(server: FastifyInstance) {
  server.post('/upload', indexController.uploadFile),
  server.post('/upload/image/:height/:length/:quality', indexController.uploadMedia)
  server.post('/upload/video/:height/:length/:quality', indexController.uploadMedia),
  server.delete('/delete', indexController.deleteFile)
  server.get('/getAllFiles', indexController.getAllFiles)
}

export default indexRoutes;