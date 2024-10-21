import axios from 'axios';

export default async function <ReqT>(
    method: string, 
    endpoint: string, 
    req_body?: ReqT
) {
    try {
        const response = await axios({
            headers: {
                'Allow-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',                  
                'X-API-Key': process.env.API_KEY,
            },
            method: method,
            url: endpoint,
            data: req_body,
        });

        return response.data;
    } catch (e) {
        if (e instanceof Error) throw new customError(e.message, 'usecase', 500);
        else                    throw new customError('不明なエラーが発生しました', 'usecase', 500);
    }
}