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
Created At : Sat Jun 22 2024, 12:40:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48435|52196|48108|45002|
|[hono](https://github.com/honojs/hono)|48251|51701|49091|43960|
|[fast](https://github.com/danteissaias/fast)|47881|52288|45125|46230|
|[oak](https://github.com/oakserver/oak)|26565|27525|25817|26352|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24277|30319|22790|19721|
|[fastify](https://github.com/fastify/fastify)|16651|16926|16706|16320|
|[koa](https://github.com/koajs/koa)|14427|15317|13536|14429|
|[express](https://github.com/expressjs/express)|6327|6437|6031|6513|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73053|85536|78924|54699|
|[nhttp](https://github.com/nhttp/nhttp)|63441|82885|55514|51924|
|[hono](https://github.com/honojs/hono)|62013|75332|60628|50079|
|[baojs](https://github.com/mattreid1/baojs)|36310|39105|36032|33794|
  



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

