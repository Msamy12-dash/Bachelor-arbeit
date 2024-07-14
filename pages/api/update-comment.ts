import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

interface Comment {
  key: number;
  content: string;
  history: string[]; 
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { comment, content }: { comment: Comment; content: string } = req.body;

    const client = await clientPromise;


    try {
      const client = await clientPromise;
      const db = client.db('mainText');
      let result;

      const updatedHistory = [...comment.history, comment.content];

      //if comment is main comment
      if (comment.parentKey === null) {
        result = await db.collection('comments').updateOne(
          { key: comment.key },
          { $set: { 
              content,
              history: updatedHistory,
            }
          }
        );

      //if comment is subcomment
      } else if (comment.canReply === true) {
        result = await db.collection('comments').updateOne(
          { key: comment.parentKey, 'replies.key': comment.key },
          { $set: { 
            "replies.$.content": content, 
            "replies.$.history": updatedHistory
          } 
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
                  $set: {
                    "replies.$[outer].replies.$[inner].content": content,
                    "replies.$[outer].replies.$[inner].history": updatedHistory
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
