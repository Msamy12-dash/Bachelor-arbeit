import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { room } = req.query;

        if (!room) {
            return res.status(400).json({ error: 'Room parameter is required' });
        }

        try {
            const time = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }); 
            console.log('Retrieving state from database at: ', time);
            const client = await clientPromise;
            const db = client.db('partykit');
            const result = await db.collection('roomStates').findOne({ room });

            if (result) {
                const newTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
                console.log('State retrieved successfully in Node:', result.state, " ", newTime );
                res.status(200).json({ state: result.state });
            } else {
                res.status(404).json({ error: 'No state found for this room' });
            }
            
        } catch (error) {
            console.error('Failed to retrieve state:', error);
            res.status(500).json({ error: 'Failed to retrieve state' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;