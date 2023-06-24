import axios from 'axios'
import { FastifyRequest } from 'fastify';

const service = {
    async uploadFile(request: FastifyRequest){
        const file = await request.file()
        const response = await axios({
            maxContentLength: Infinity, maxBodyLength: Infinity, 
            headers: {
                "Content-Type": "application/json",
                'X_API_KEY': process.env.VETACLOUD_PRIVATE_KEY, 'X_ROUTE_NAME': process.env.VETACLOUD_INDEX_ROUTE
            },
            method: 'POST',
            url: `${process.env.VETACLOUD_URL}/fastify/`,
            data: {
              filename: file.filename, raw: await file.toBuffer()
            }
        })
        return response
    },
    async uploadMedia(
        request: FastifyRequest<{
            Params: {
              height: number,
              length:number,
              quality:number
            }
        }>,
    ){
        const file = await request.file()
        const height = request.params.height
        const length = request.params.length
        const quality = request.params.quality  
                
        const response = await axios({
            maxContentLength: Infinity, maxBodyLength: Infinity, 
            headers: {
                "Content-Type": "application/json",
                'X_API_KEY': process.env.VETACLOUD_PRIVATE_KEY, 'X_ROUTE_NAME': process.env.VETACLOUD_INDEX_ROUTE
            },
            method: 'POST',
            url: `${process.env.VETACLOUD_URL}/fastify/image/${height}/${length}/${quality}`,
            data: {
              filename: file.filename, raw: await file.toBuffer()
            }
        })
        return response
    },
    async deleteFile(
        request: FastifyRequest<{
            Headers: {
                X_FILE_NAME: string
            }
        }>,
    ){  
        const response = await axios({
            maxContentLength: Infinity, maxBodyLength: Infinity, 
            headers: {
                "Content-Type": "application/json",
                'X_API_KEY': process.env.VETACLOUD_PRIVATE_KEY, 
                'X_ROUTE_NAME': process.env.VETACLOUD_INDEX_ROUTE, 
                'X_FILE_NAME': request.headers.x_file_name
            },
            method: 'delete',
            url: `${process.env.VETACLOUD_URL}/fastify/`
        })
        return response
    },
    async getAllFilesInRoute(
        request: FastifyRequest
    ){  
        const response = await axios({
            maxContentLength: Infinity, maxBodyLength: Infinity, 
            headers: {
                "Content-Type": "application/json",
                'X_API_KEY': process.env.VETACLOUD_PRIVATE_KEY, 
                'X_ROUTE_NAME': process.env.VETACLOUD_INDEX_ROUTE
            },
            method: 'get',
            url: `${process.env.VETACLOUD_URL}/fastify/files`
        })
        return response
    }
}

export default service