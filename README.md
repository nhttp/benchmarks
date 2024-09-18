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
Created At : Wed Sep 18 2024, 12:46:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47085|50807|46306|44143|
|[hono](https://github.com/honojs/hono)|47031|50293|47695|43104|
|[fast](https://github.com/danteissaias/fast)|45865|51200|42822|43572|
|[oak](https://github.com/oakserver/oak)|25386|26144|24730|25283|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25632|33474|22891|20530|
|[fastify](https://github.com/fastify/fastify)|16609|16863|16530|16433|
|[koa](https://github.com/koajs/koa)|13274|14022|12541|13259|
|[express](https://github.com/expressjs/express)|6070|6217|5710|6284|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65439|81705|70455|44158|
|[nhttp](https://github.com/nhttp/nhttp)|55505|81984|39447|45083|
|[hono](https://github.com/honojs/hono)|53239|61692|49332|48694|
|[baojs](https://github.com/mattreid1/baojs)|33543|37381|30694|32553|
  



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

