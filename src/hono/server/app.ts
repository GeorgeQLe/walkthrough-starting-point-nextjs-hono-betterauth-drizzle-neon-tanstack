// src/hono/server/app.ts
import { Hono } from 'hono';

import authors from './authors';
import books from './books';

const app = new Hono()
  .basePath('/api')
  // Mount the sub-apps under /api/authors and /api/books
  .route('/authors', authors)
  .route('/books', books)
  // You can still have root routes too
  .get('/', (c) => c.json({ message: 'Hello from Hono root' }))
  // Demo endpoint
  .get('/demo', (c) => {
    return c.json({
      message: 'Welcome to Hono.js!',
      timestamp: new Date().toISOString(),
      features: [
        'Ultra-fast routing',
        'TypeScript support',
        'Works on any runtime',
        'Type-safe RPC client',
      ],
    });
  });

export default app;
export type AppType = typeof app;