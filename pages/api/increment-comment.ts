import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

interface Comment {
  key: number;
  upvotes: number;
  parentKey: number | null;
  canReply: boolean;
  replies: Comment[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { comment }: { comment: Comment } = req.body;

    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
      const db = client.db('mainText');
      let result;

      //if comment is main comment
      if (comment.parentKey === null) {
        result = await db.collection('comments').updateOne(
          { key: comment.key },
          { $inc: { upvotes: 1} }
        );

      //if comment is subcomment
      } else if (comment.canReply === true) {
        result = await db.collection('comments').updateOne(
          { key: comment.parentKey, 'replies.key': comment.key },
          { $inc: { "replies.$.upvotes": 1 } 
        });

      //if comment is subsubcomment
      } else {
        const commentsArray = await db.collection("comments").find({}).toArray();
        for (const currentComment of commentsArray) {
          const replies = currentComment.replies;
          for (const repliesComment of replies) {
            if (repliesComment.key === comment.parentKey) {
              result = await db.collection('comments').updateOne(
                { key: currentComment.key, "replies.replies.key": comment.key },
                {
                  $inc: {
                    "replies.$[outer].replies.$[inner].upvotes": 1
                  }
                },
                {
                  arrayFilters: [
                    { "outer.key": comment.parentKey },
                    { "inner.key": comment.key }
                  ]
                }
              );
              if (result.modifiedCount > 0) break;
            }
          }
        }
      }

      res.status(200).json({ message: 'Upvotes updated successfully', result });
    } catch (error) {
      console.error('Failed to update upvotes:', error);
      res.status(500).json({ error: 'Failed to update upvotes' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
