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
Created At : Mon Jun 26 2023, 12:53:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57347|61571|55589|54882|
|[hono](https://github.com/honojs/hono)|56074|60338|55605|52279|
|[fastro](https://github.com/fastrodev/fastro)|45209|57448|47731|30448|
|[oak](https://github.com/oakserver/oak)|17445|18635|17196|16504|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28793|30829|28809|26740|
|[nhttp](https://github.com/nhttp/nhttp)|19465|19337|19321|19738|
|[koa](https://github.com/koajs/koa)|16223|17133|15091|16445|
|[express](https://github.com/expressjs/express)|6112|6190|5809|6337|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64051|64138|63762|64253|
|[hono](https://github.com/honojs/hono)|62504|61372|61391|64749|
|[elysia](https://github.com/elysiajs/elysia)|61089|61220|62256|59791|
|[baojs](https://github.com/mattreid1/baojs)|50837|56761|42704|53046|
  



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

