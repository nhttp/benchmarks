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
Created At : Wed Oct 09 2024, 12:49:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47498|51328|46626|44540|
|[fast](https://github.com/danteissaias/fast)|47230|51724|44849|45116|
|[hono](https://github.com/honojs/hono)|47219|50666|47953|43039|
|[oak](https://github.com/oakserver/oak)|25549|26539|24929|25180|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24802|30844|22626|20936|
|[fastify](https://github.com/fastify/fastify)|16639|17016|16493|16409|
|[koa](https://github.com/koajs/koa)|13499|14221|12690|13586|
|[express](https://github.com/expressjs/express)|6217|6399|5914|6337|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67382|80733|67470|53943|
|[nhttp](https://github.com/nhttp/nhttp)|57662|79822|43133|50030|
|[hono](https://github.com/honojs/hono)|49259|62475|37851|47451|
|[baojs](https://github.com/mattreid1/baojs)|33878|35740|35820|30073|
  



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

