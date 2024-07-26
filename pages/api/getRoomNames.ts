import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const time = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }); 
            console.log('Retrieving room names from database.', time);
            
            const client = await clientPromise;
            const db = client.db('partykit');
            const roomStates = db.collection('roomStates');

            const roomDocuments = await roomStates.find({}, { projection: { room: 1, _id: 0 } }).toArray();
            const roomNames = roomDocuments.map(doc => doc.room);

            const newTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
            console.log('Room names retrieved successfully:', roomNames.length, "rooms found.", newTime);
            
            res.status(200).json({ roomNames });
        } catch (error) {
            console.error('Failed to retrieve room names:', error);
            res.status(500).json({ error: 'Failed to retrieve room names' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;