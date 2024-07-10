import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { room, key }: { room: string; key: number } = req.body;

    const client = await clientPromise;


    try {
      const client = await clientPromise;
      const db = client.db('mainText');
      const result = await db.collection('comments').deleteOne({ room, key });
      res.status(200).json({ message: 'Comment deleted successfully', result });
    } catch (error) {
      console.error('Failed to delete comment:', error);
      res.status(500).json({ error: 'Failed to delete comment' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
