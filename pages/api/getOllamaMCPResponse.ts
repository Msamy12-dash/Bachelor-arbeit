import { requestResponseForMCP } from '../../Prompting/MCPFunction.js'
import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Handle POST request
        try {
            const { completeText, userComments, userCommentsContext } = req.body;
            const responseText = await requestResponseForMCP(completeText, userComments, userCommentsContext);
            res.status(200).json({ Response: responseText });
        } catch (error) {
            console.error('Error processing request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['POST']); // Specify allowed methods
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}