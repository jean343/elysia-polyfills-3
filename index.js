import { cors } from '@elysiajs/cors';
import { Elysia } from 'elysia';
import '@bogeychan/elysia-polyfills/node/index.js';

// Uncomment to test workaround
// global.Response = class extends Response {
//   constructor(body, init) {
//     super(body === "" && init.status === 204 ? null : body, init);
//   }
// };

new Elysia()
  .use(cors())
  .get('/', () => 'hello')
  .listen({ port: 3000 });

console.log(`Hello Node.js v${process.versions.node}!`);
