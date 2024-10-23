import bcrypt from 'bcryptjs';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  await dbConnect();

  const { name, password } = req.body;

  if (req.method === 'POST') {
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Set a cookie with the user's ID
      const cookie = serialize('auth', user._id, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      res.setHeader('Set-Cookie', cookie);
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
