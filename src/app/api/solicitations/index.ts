import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  console.log(method);

  res.status(200).json({ name: 'John Doe' });
}
