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
Created At : Wed Feb 26 2025, 12:51:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57130|66015|54305|51069|
|[hono](https://github.com/honojs/hono)|56325|57914|59693|51368|
|[fast](https://github.com/danteissaias/fast)|53849|63769|46569|51209|
|[oak](https://github.com/oakserver/oak)|27665|28900|27608|26486|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40215|47737|39145|33763|
|[fastify](https://github.com/fastify/fastify)|25976|25346|27292|25290|
|[koa](https://github.com/koajs/koa)|16645|16705|15817|17412|
|[express](https://github.com/expressjs/express)|7029|7258|6511|7319|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73557|87175|71190|62307|
|[nhttp](https://github.com/nhttp/nhttp)|65916|90995|51288|55464|
|[hono](https://github.com/honojs/hono)|60246|65844|59514|55381|
|[baojs](https://github.com/mattreid1/baojs)|46460|51540|44699|43142|
  



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

