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
Created At : Wed May 07 2025, 1:00:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58927|63881|60470|52431|
|[hono](https://github.com/honojs/hono)|56280|62375|56046|50418|
|[fast](https://github.com/danteissaias/fast)|55546|63913|46440|56286|
|[oak](https://github.com/oakserver/oak)|27280|28535|26495|26811|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38764|46786|35861|33644|
|[fastify](https://github.com/fastify/fastify)|23551|24125|24000|22529|
|[koa](https://github.com/koajs/koa)|16778|16905|16838|16590|
|[express](https://github.com/expressjs/express)|6524|6574|6329|6669|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|84744|92169|82268|79795|
|[nhttp](https://github.com/nhttp/nhttp)|69443|91801|58005|58524|
|[hono](https://github.com/honojs/hono)|65878|74656|64488|58489|
|[baojs](https://github.com/mattreid1/baojs)|49250|56087|43584|48080|
  



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

