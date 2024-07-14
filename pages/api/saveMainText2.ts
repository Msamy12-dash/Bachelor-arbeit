import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { state, room } = req.body;

        if (!state || !room) {
            return res.status(400).json({ error: 'State and room are required' });
        }

        try {
            const client = await clientPromise;
            const db = client.db('partykit');
            const result = await db.collection('roomStates').updateOne(
                { room },
                { 
                    $set: { 
                        state: state, // This is now a Base64 encoded string
                        updatedAt: new Date() 
                    } 
                },
                { upsert: true }
            );
            res.status(200).json({ message: 'State saved successfully', result });
            console.log('State saved successfully!!!', result);
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