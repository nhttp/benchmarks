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
Created At : Fri Aug 09 2024, 12:43:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46907|50253|45869|44598|
|[hono](https://github.com/honojs/hono)|46421|49869|47071|42323|
|[fast](https://github.com/danteissaias/fast)|46103|50349|44615|43344|
|[oak](https://github.com/oakserver/oak)|26560|27523|26197|25960|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25078|31093|22881|21261|
|[fastify](https://github.com/fastify/fastify)|17029|17537|16823|16727|
|[koa](https://github.com/koajs/koa)|14670|15475|13685|14851|
|[express](https://github.com/expressjs/express)|6346|6526|6023|6488|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70489|85218|78278|47971|
|[hono](https://github.com/honojs/hono)|62840|74721|50526|63274|
|[nhttp](https://github.com/nhttp/nhttp)|59961|88608|47063|44213|
|[baojs](https://github.com/mattreid1/baojs)|34678|38364|30823|34848|
  



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

