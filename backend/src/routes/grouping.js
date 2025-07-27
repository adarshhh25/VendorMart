// File: routes/grouping.js
import express from 'express';
import groupEngine from '../controllers/groupEngine.js';
const router = express.Router();



router.get('/', groupEngine);

export default router;
