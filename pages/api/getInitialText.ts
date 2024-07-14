import clientPromise from '@/lib/mongodb';
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { room } = req.query;

        if (!room) {
            return res.status(400).json({ error: 'Room is required' });
        }

        try {
            const client = await clientPromise;
            const db = client.db('mainText');
            const document = await db.collection('text').findOne({ room });

            if (document) {
                res.status(200).json({ text: document.text });
            } else {
                res.status(404).json({ error: 'No text found for this room' });
            }
        } catch (error) {
            console.error('Failed to fetch text:', error);
            res.status(500).json({ error: 'Failed to fetch text' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
