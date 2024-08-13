import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb'
import { Role, User } from '../../party/types';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const time = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }); 
            //console.log('Retrieving user IDs from database.', time);
            
            const client = await clientPromise;
            const db = client.db('partykit');
            const usersCollection = db.collection('users');

            const usersData = await usersCollection.find({}).toArray();
            const users: User[] = usersData.map(userData => ({
                id: userData.id, // Use the id not _id as the id
                name: userData.name,
                color: userData.color,
                role: userData.role as Role
            }));

            const newTime = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
            //console.log('User IDs retrieved successfully:', users.length, "users found.", newTime);
            
            res.status(200).json({ users });
        } catch (error) {
            console.error('Failed to retrieve user IDs:', error);
            res.status(500).json({ error: 'Failed to retrieve user IDs' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;