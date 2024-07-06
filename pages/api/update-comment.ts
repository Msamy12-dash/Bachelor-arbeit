import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { room, key, content }: { room: string; key: number; content: string } = req.body;

    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
      const db = client.db('mainText');
      const result = await db.collection('comments').updateOne(
        { room, key },
        { $set: { content, updatedAt: new Date() } }
      );
      res.status(200).json({ message: 'Comment updated successfully', result });
    } catch (error) {
      console.error('Failed to update comment:', error);
      res.status(500).json({ error: 'Failed to update comment' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
