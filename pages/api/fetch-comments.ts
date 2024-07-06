import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');
async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {

            const db = client.db('mainText');
            const comments = await db.collection('comments').find({}).toArray();

            console.log('Fetched comments:', comments);
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
