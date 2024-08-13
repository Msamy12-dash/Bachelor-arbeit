import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
      const db = client.db('mainText');
      
      // Try to find the document that stores the key state
      const keyDoc = await db.collection('keyState').findOne({});

      //console.log('Retrieved key document:', keyDoc);
      
      // If the document exists, extract the key, otherwise default to 0
      const currentKey = keyDoc ? keyDoc.currentKey : 0;
      
      res.status(200).json({ currentKey: currentKey });
    } catch (error) {
      console.error('Failed to fetch key:', error);
      res.status(500).json({ error: 'Failed to fetch key' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}