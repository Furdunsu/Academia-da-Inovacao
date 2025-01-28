// pages/api/users.ts (alterando para .ts para TypeScript)
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;

    // Você pode adicionar validações para garantir que os campos sejam válidos
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(user);
  } else {
    // Caso o método não seja nem GET nem POST, retornamos um erro 405
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
