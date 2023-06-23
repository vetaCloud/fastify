import { FastifyReply, FastifyRequest } from 'fastify';
import service from './index.service';

const index = {
  async uploadFile(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
        const uploadFile = await service.uploadFile(request)
        return reply.code(201).send({
            status: 201,
            success: true,
            message: uploadFile.data.file,
        });
    } catch (e) {
      return reply.code(500).send({
        status: 500,
        success: false,
        message: e,
      });
    }
  },
  async uploadImage(
    request: FastifyRequest<{
      Params: {
        height: number,
        length:number,
        quality:number
      }
    }>,
    reply: FastifyReply
  ) {
    try {
        const uploadFile = await service.uploadImage(request)
        return reply.code(201).send({
            status: 201,
            success: true,
            message: uploadFile.data.file,
        });
    } catch (e) {
      return reply.code(500).send({
        status: 500,
        success: false,
        message: e,
      });
    }
  }
}

export default index;