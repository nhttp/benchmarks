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
Created At : Thu Jun 27 2024, 12:41:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48919|52532|48169|46056|
|[hono](https://github.com/honojs/hono)|48300|51551|48936|44413|
|[fast](https://github.com/danteissaias/fast)|48238|52974|44319|47421|
|[oak](https://github.com/oakserver/oak)|26997|28184|26392|26416|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23931|29671|21936|20185|
|[fastify](https://github.com/fastify/fastify)|16843|17501|16613|16415|
|[koa](https://github.com/koajs/koa)|14489|15108|13606|14752|
|[express](https://github.com/expressjs/express)|6431|6577|6152|6564|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70823|85776|75449|51243|
|[hono](https://github.com/honojs/hono)|61143|73864|58049|51517|
|[nhttp](https://github.com/nhttp/nhttp)|60143|82547|59888|37995|
|[baojs](https://github.com/mattreid1/baojs)|36429|43322|33747|32218|
  



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

