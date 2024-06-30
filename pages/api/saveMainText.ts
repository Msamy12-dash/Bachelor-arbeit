import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { htmlToText } from 'html-to-text';
async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { text, room } = req.body;

        if (!text || !room) {
            return res.status(400).json({ error: 'Text and room are required' });
        }
        const plainText = htmlToText(text)
        const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

        try {
            await client.connect();
            const db = client.db('mainText');
            const result = await db.collection('text').updateOne(
                { room },
                { $set: { text:plainText , updatedAt: new Date() } },
                { upsert: true }
            );
            res.status(200).json({ message: 'Text saved successfully', result });
        } catch (error) {
            console.error('Failed to save text:', error);
            res.status(500).json({ error: 'Failed to save text' });
        } finally {
            await client.close();
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
