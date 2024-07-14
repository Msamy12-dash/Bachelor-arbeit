import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'


async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {

            const client = await clientPromise;
            const db = client.db('mainText');
            const comments = await db.collection('comments').find({}).toArray();

            //console.log('Fetched comments:', comments);
            res.status(200).json(comments);
        } catch (error) {
            console.error('Failed to fetch comments:', error);
            res.status(500).json({ error: 'Failed to fetch comments' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
