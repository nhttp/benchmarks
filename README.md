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
Created At : Tue Sep 26 2023, 12:36:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65380|69669|63501|62970|
|[hono](https://github.com/honojs/hono)|63895|69924|65757|56004|
|[fast](https://github.com/danteissaias/fast)|57136|68132|52263|51014|
|[fastro](https://github.com/fastrodev/fastro)|27557|69850|6486|6334|
|[oak](https://github.com/oakserver/oak)|20191|21226|20144|19202|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45201|48755|44949|41899|
|[fastify](https://github.com/fastify/fastify)|35001|35864|35076|34064|
|[koa](https://github.com/koajs/koa)|21839|23175|20328|22015|
|[express](https://github.com/expressjs/express)|7482|7771|6810|7866|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|61175|59807|57080|66638|
|[nhttp](https://github.com/nhttp/nhttp)|61029|62095|56847|64144|
|[elysia](https://github.com/elysiajs/elysia)|58401|60041|59563|55600|
|[baojs](https://github.com/mattreid1/baojs)|53668|60984|43900|56121|
  



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

