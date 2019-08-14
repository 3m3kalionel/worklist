import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

import createServer from './createServer';
import db from './db';

dotenv.config({ path: '.env' });
const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    req.userId = userId;
  }
  next()
});

server.express.use(async(req, res, next) => {
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{id, email authoredTodoLists { id title tasks { id content isCompleted }}}'
  );
  req.user = user;
  next();
})

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}, deets => {
  console.log(`Server is now running on port http://localhost:${deets.port}`);
});
