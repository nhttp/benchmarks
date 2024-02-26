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
Created At : Mon Feb 26 2024, 12:37:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47997|51791|46887|45313|
|[fast](https://github.com/danteissaias/fast)|47533|50744|44765|47089|
|[hono](https://github.com/honojs/hono)|46193|48316|46332|43931|
|[oak](https://github.com/oakserver/oak)|27297|28767|27358|25765|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24880|31305|23231|20105|
|[fastify](https://github.com/fastify/fastify)|16672|17457|16641|15917|
|[koa](https://github.com/koajs/koa)|14604|15558|13609|14644|
|[express](https://github.com/expressjs/express)|6382|6540|6048|6559|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72874|84927|75345|58351|
|[nhttp](https://github.com/nhttp/nhttp)|62860|85344|52206|51031|
|[hono](https://github.com/honojs/hono)|61529|72475|52043|60070|
|[baojs](https://github.com/mattreid1/baojs)|33897|36643|34045|31003|
  



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

