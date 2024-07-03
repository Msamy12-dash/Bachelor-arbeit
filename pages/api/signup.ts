import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, userrole } = req.body;

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
          where: { username },
        });
  
        if (existingUser) {
          return res.status(400).json({ error: 'User already exists' });
        }
      
      const user = await prisma.user.create({
        data: {
          username,
          userrole
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'internal error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
