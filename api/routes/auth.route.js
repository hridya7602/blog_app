import express from 'express';
import { signup } from '../controllers/auth.controller.js'; // Ensure the correct file extension

const router = express.Router();

router.post('/signup', signup);

export default router;
