import bcrypt from 'bcryptjs';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  const { name, password } = req.body;

  if (req.method === 'POST') {
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ name });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = await User.create({
        name,
        password: hashedPassword,
      });

      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
