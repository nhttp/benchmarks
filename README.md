## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Sun May 07 2023, 12:42:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56666|62845|55248|51904|
|[hono](https://github.com/honojs/hono)|50494|54644|52015|44824|
|[fast](https://github.com/danteissaias/fast)|48609|59651|35054|51122|
|[fastro](https://github.com/fastrodev/fastro)|48062|59887|49359|34941|
|[oak](https://github.com/oakserver/oak)|17601|18716|17645|16443|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37061|39876|36816|34490|
|[fastify](https://github.com/fastify/fastify)|29986|31022|29926|29010|
|[koa](https://github.com/koajs/koa)|18584|19692|17386|18673|
|[express](https://github.com/expressjs/express)|6537|6676|6226|6710|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62790|61771|65131|61469|
|[hono](https://github.com/honojs/hono)|59693|58733|60176|60169|
|[elysia](https://github.com/elysiajs/elysia)|59337|58735|61397|57878|
|[baojs](https://github.com/mattreid1/baojs)|54364|60056|47115|55922|
  



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

