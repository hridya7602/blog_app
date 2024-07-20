import User from '../models/user.model.js'; // Ensure the correct file path and extension
import bcyrptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const  hashedPassword= bcyrptjs.hashSync(password,10);

    try {
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        });

        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
