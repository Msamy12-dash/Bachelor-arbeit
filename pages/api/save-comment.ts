import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

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
  parentKey: number | null;
  canReply: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { comment }: { room: string; comment: Comment } = req.body;

    const client = new MongoClient('mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0');

    try {
      await client.connect();
      const db = client.db('mainText');
      let result;

      //if comment is main comment
      if (comment.parentKey === null) {
        result = await db.collection('comments').insertOne(comment);

      //if comment is subcomment
      } else if (comment.canReply === true) {
        result = await db.collection('comments').updateOne({key: comment.parentKey }, {$addToSet: {replies: comment}});
      
      //if comment is subsubcomment
      } else {
        let mainKey;
        const commentsArray = await db.collection("comments").find({}).toArray();
        for (let i = 0; i < commentsArray.length; i++) {
          const currentComment = commentsArray[i];
          const replies = currentComment.replies
          if (replies.length > 0) {
            for (let i = 0; i < replies.length; i++) {
              const repliesComment = replies[i];
              if (repliesComment.key === comment.parentKey) {
                mainKey = currentComment.key;
                break;
              }
            }
          }
        }
        result = await db.collection('comments').updateOne({key: mainKey, replies: {$elemMatch: {key: comment.parentKey}}}, {$addToSet: {"replies.0.replies": comment}});
      }
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