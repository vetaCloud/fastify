import { FastifyReply, FastifyRequest } from 'fastify';
import service from './index.service';

const index = {
  async uploadFile(
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
        console.log(request.files)
        const uploadFile = await service.uploadFile(request)
        return reply.code(201).send({
            status: 201,
            success: true,
            message: uploadFile,
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