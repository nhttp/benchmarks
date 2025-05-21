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
Created At : Wed May 21 2025, 1:01:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58994|65010|61327|50646|
|[nhttp](https://github.com/nhttp/nhttp)|57818|63023|56127|54304|
|[fast](https://github.com/danteissaias/fast)|52276|59806|47695|49326|
|[oak](https://github.com/oakserver/oak)|28000|29621|27398|26980|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38339|43199|35207|36612|
|[fastify](https://github.com/fastify/fastify)|24272|24441|25618|22756|
|[koa](https://github.com/koajs/koa)|17188|17916|16820|16828|
|[express](https://github.com/expressjs/express)|6401|6477|6170|6556|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82313|96788|72560|77592|
|[nhttp](https://github.com/nhttp/nhttp)|69203|91468|60155|55987|
|[hono](https://github.com/honojs/hono)|62726|69536|59108|59535|
|[baojs](https://github.com/mattreid1/baojs)|46886|53258|43558|43841|
  



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

