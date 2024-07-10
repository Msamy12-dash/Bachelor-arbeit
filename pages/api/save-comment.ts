import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  selectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { room, comment }: { room: string; comment: Comment } = req.body;

    const client = await clientPromise;


    try {
      const client = await clientPromise;
      //soll die datenbank mainText heißen??
      const db = client.db('mainText');
      const result = await db.collection('comments').insertOne(comment);
      res.status(200).json({ message: 'Comment saved successfully', result });
    } catch (error) {
      console.error('Failed to save comment:', error);
      res.status(500).json({ error: 'Failed to save comment' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
