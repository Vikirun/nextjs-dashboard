import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const externalApiUrl = 'http://wp.local/index.php/wp-json/wc/store/v1/cart';
    const response = await axios.get(externalApiUrl);
    console.log("response", response)
  } catch (error) {
    // 错误处理
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
  res.status(200).json({ message: 'Hello from Next.js!' })
}