import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { currentKey }: { currentKey: number } = req.body;

    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
      const db = client.db('mainText');
      
      // Update the document that stores the key state, upserting if it doesn't exist
      const result = await db.collection('keyState').updateOne(
        { }, 
        { $set: { currentKey: currentKey } }, 
        { upsert: true }
      );
      
      res.status(200).json({ message: 'Key updated successfully', result });
    } catch (error) {
      console.error('Failed to update key:', error);
      res.status(500).json({ error: 'Failed to update key' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
