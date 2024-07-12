import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

interface Comment {
  key: number;
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { comment }: { comment: Comment } = req.body;

    const client = await clientPromise;


    try {
      const client = await clientPromise;
      const db = client.db('mainText');
      let result;
      
      //if comment is main comment
      if (comment.parentKey === null) {
        result = await db.collection('comments').deleteOne({ key: comment.key });

      //if comment is subcomment
      } else if (comment.canReply === true) {
        result = await db.collection('comments').updateOne(
          { 'replies.key': comment.key },
          { $pull: { replies: { key: comment.key } as any } }
        );

      //if comment is subsubcomment
      } else {
        const commentsArray = await db.collection("comments").find({}).toArray();
        for (const currentComment of commentsArray) {
          const replies = currentComment.replies;
          for (const repliesComment of replies) {
            if (repliesComment.key === comment.parentKey) {
              result = await db.collection('comments').updateOne(
                { key: currentComment.key, 'replies.key': repliesComment.key },
                { $pull: { 'replies.$.replies': { key: comment.key } as any } }
              );
              if (result.modifiedCount > 0) break;
            }
          }
        }
      }
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
