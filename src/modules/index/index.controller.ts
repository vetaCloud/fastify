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
      console.log(e)
      return reply.code(500).send({
        status: 500,
        success: false,
        message: "Something went wrong",
      });
    }
  },
  async uploadMedia(
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
        const uploadFile = await service.uploadMedia(request)
        return reply.code(201).send({
            status: 201,
            success: true,
            message: uploadFile.data.file,
        });
    } catch (e) {
      console.log(e)
      return reply.code(500).send({
        status: 500,
        success: false,
        message: "Something went wrong",
      });
    }
  },
  async deleteFile(
    request: FastifyRequest<{
      Headers: {
          X_FILE_NAME: string
      }
  }>,
    reply: FastifyReply
  ) {
    try {
        const uploadFile = await service.deleteFile(request)
        return reply.code(201).send({
            status: 201,
            success: true,
            message: uploadFile.data.file,
        });
    } catch (e) {
      console.log(e)
      return reply.code(500).send({
        status: 500,
        success: false,
        message: "Something went wrong",
      });
    }
  }
}

export default index;