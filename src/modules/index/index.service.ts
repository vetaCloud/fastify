import fs from 'fs'
import axios from 'axios'

const service = {
    async uploadFile(request: any){
        const file = await request.file()
        const response = await axios({
            maxContentLength: Infinity, maxBodyLength: Infinity, 
            headers: {
                "Content-Type": "application/json",
                'X_API_KEY': process.env.VETACLOUD_PRIVATE_KEY, 'X_ROUTE_NAME': process.env.VETACLOUD_INDEX_ROUTE
            },
            method: 'POST',
            url: `${process.env.VETACLOUD_URL}/typescript/`,
            data: {
              filename: file.filename, raw: await file.toBuffer()
            }
        })
        return response
    }
}

export default service