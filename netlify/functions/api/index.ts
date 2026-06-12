import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/auth', (req, res) => {
  res.status(200).json({ message: 'Auth API endpoint' });
});

app.use('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'ok' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, error: 'API not found' });
});

export const handler = serverless(app);