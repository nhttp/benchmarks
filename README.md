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
Created At : Thu Nov 07 2024, 12:49:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49018|53772|48207|45075|
|[hono](https://github.com/honojs/hono)|48026|50840|49707|43532|
|[fast](https://github.com/danteissaias/fast)|47829|52023|45509|45955|
|[oak](https://github.com/oakserver/oak)|26046|26901|25506|25732|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24631|30478|22603|20813|
|[fastify](https://github.com/fastify/fastify)|17120|17524|17017|16820|
|[koa](https://github.com/koajs/koa)|14125|15004|12966|14404|
|[express](https://github.com/expressjs/express)|6270|6457|5898|6456|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79126|84131|81329|71918|
|[hono](https://github.com/honojs/hono)|65710|77292|60876|58962|
|[nhttp](https://github.com/nhttp/nhttp)|59996|84044|46197|49748|
|[baojs](https://github.com/mattreid1/baojs)|35961|41171|36529|30183|
  



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

