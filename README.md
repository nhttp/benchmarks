## Runtime JS/TS benchmarks
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Mon Mar 13 2023, 12:43:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40706|43390|39280|39447|
|[fast](https://github.com/danteissaias/fast)|37976|39846|36081|38001|
|[hono](https://github.com/honojs/hono)|34450|37149|36202|30000|
|[fastro](https://github.com/fastrodev/fastro)|32754|36795|31781|29686|
|[oak](https://github.com/oakserver/oak)|15174|17688|12474|15359|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53181|60451|49792|49300|
|[nhttp](https://github.com/nhttp/nhttp)|52730|60803|48092|49296|
|[elysia](https://github.com/elysiajs/elysia)|50402|58641|47401|45164|
|[baojs](https://github.com/mattreid1/baojs)|40565|44210|40771|36715|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|30558|32483|29888|29303|
|[nhttp](https://github.com/nhttp/nhttp)|28793|32469|26201|27709|
|[koa](https://github.com/koajs/koa)|15731|12250|16772|18171|
|[express](https://github.com/expressjs/express)|6200|6367|5873|6360|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|Bun|53181|60451|49792|49300|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|52730|60803|48092|49296|
|[elysia](https://github.com/elysiajs/elysia)|Bun|50402|58641|47401|45164|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|40706|43390|39280|39447|
|[baojs](https://github.com/mattreid1/baojs)|Bun|40565|44210|40771|36715|
|[fast](https://github.com/danteissaias/fast)|Deno|37976|39846|36081|38001|
|[hono](https://github.com/honojs/hono)|Deno|34450|37149|36202|30000|
|[fastro](https://github.com/fastrodev/fastro)|Deno|32754|36795|31781|29686|
|[fastify](https://github.com/fastify/fastify)|Node|30558|32483|29888|29303|
|[nhttp](https://github.com/nhttp/nhttp)|Node|28793|32469|26201|27709|
|[koa](https://github.com/koajs/koa)|Node|15731|12250|16772|18171|
|[oak](https://github.com/oakserver/oak)|Deno|15174|17688|12474|15359|
|[express](https://github.com/expressjs/express)|Node|6200|6367|5873|6360|



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)

