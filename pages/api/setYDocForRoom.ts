import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'
import { time } from 'console';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { state, room } = req.body;

        if (!state || !room) {
            return res.status(400).json({ error: 'State and room are required' });
        }

        try {
            const time = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }); 

            //console.log('Saving YDoc state to database.', time);
            const client = await clientPromise;
            const db = client.db('partykit');
            const result = await db.collection('roomStates').updateOne(
                { room },
                { 
                    $set: { 
                        state: state,
                        updatedAt: time
                    } 
                },
                { upsert: true }
            );
            res.status(200).json({ message: 'State saved successfully', result });
            const newTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
            //console.log('State saved successfully.(', state.slice(0, 5), ")", newTime);
        } catch (error) {
            console.error('Failed to save state:', error);
            res.status(500).json({ error: 'Failed to save state' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;