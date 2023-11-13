import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import '@bogeychan/elysia-polyfills/node/index.js';

const app = new Elysia()
  .use(cors())
  .get('/', () => 'hello')
  .listen({ port: 80 });

console.log(`Hello Node.js v${process.versions.node}!`);
