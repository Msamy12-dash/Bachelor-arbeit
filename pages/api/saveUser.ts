import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'
import { User } from '../../party/types';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const user: User = req.body;
            const time = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }); 
            console.log('Saving user to database.', time);
            
            const client = await clientPromise;
            const db = client.db('partykit');
            const usersCollection = db.collection('users');

            const result = await usersCollection.insertOne(user);

            const newTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
            console.log('User saved successfully:', result.insertedId, newTime);
            
            res.status(200).json({ success: true, userId: result.insertedId });
        } catch (error) {
            console.error('Failed to save user:', error);
            res.status(500).json({ error: 'Failed to save user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;