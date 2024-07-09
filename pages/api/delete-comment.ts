import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { room, key }: { room: string; key: number } = req.body;

    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
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
