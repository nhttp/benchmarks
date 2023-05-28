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
Created At : Sun May 28 2023, 12:44:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54644|56320|57517|50094|
|[hono](https://github.com/honojs/hono)|52731|59070|53335|45788|
|[fast](https://github.com/danteissaias/fast)|49594|62034|33248|53499|
|[fastro](https://github.com/fastrodev/fastro)|44864|57764|44149|32679|
|[oak](https://github.com/oakserver/oak)|19484|20550|19659|18244|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41039|43797|39937|39384|
|[fastify](https://github.com/fastify/fastify)|30514|33252|29847|28443|
|[koa](https://github.com/koajs/koa)|19555|22158|17605|18901|
|[express](https://github.com/expressjs/express)|6628|7100|6486|6299|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64566|65387|65123|63189|
|[hono](https://github.com/honojs/hono)|63338|64802|63439|61772|
|[elysia](https://github.com/elysiajs/elysia)|63321|65443|63252|61268|
|[baojs](https://github.com/mattreid1/baojs)|54049|59805|56248|46095|
  



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

