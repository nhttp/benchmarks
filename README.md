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
Created At : Tue Nov 21 2023, 12:38:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45209|48598|44686|42342|
|[fast](https://github.com/danteissaias/fast)|44937|48290|42623|43897|
|[hono](https://github.com/honojs/hono)|43928|46411|44649|40723|
|[fastro](https://github.com/fastrodev/fastro)|23586|48900|11252|10605|
|[oak](https://github.com/oakserver/oak)|20198|21398|20159|19038|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26513|31929|24816|22795|
|[fastify](https://github.com/fastify/fastify)|15514|15992|15101|15449|
|[koa](https://github.com/koajs/koa)|14175|14980|13291|14255|
|[express](https://github.com/expressjs/express)|6381|6520|6046|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71225|78142|72812|62722|
|[hono](https://github.com/honojs/hono)|65485|73207|63959|59288|
|[nhttp](https://github.com/nhttp/nhttp)|63638|78836|52839|59240|
|[baojs](https://github.com/mattreid1/baojs)|35154|40158|35073|30232|
  



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

