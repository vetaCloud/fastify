import { FastifyRequest } from 'fastify';

declare global {
    interface FastifyRequest {
        files? : Record<string,any>
    }
}