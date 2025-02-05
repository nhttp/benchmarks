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
Created At : Wed Feb 05 2025, 12:50:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60843|67938|59788|54802|
|[hono](https://github.com/honojs/hono)|56017|58930|58079|51043|
|[fast](https://github.com/danteissaias/fast)|54940|63019|50226|51575|
|[oak](https://github.com/oakserver/oak)|27138|28997|25837|26581|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39760|46578|38017|34686|
|[fastify](https://github.com/fastify/fastify)|23775|23732|24757|22837|
|[koa](https://github.com/koajs/koa)|17489|18997|15820|17650|
|[express](https://github.com/expressjs/express)|7018|7347|6436|7270|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78467|92639|79029|63733|
|[nhttp](https://github.com/nhttp/nhttp)|70823|95143|59870|57455|
|[hono](https://github.com/honojs/hono)|62266|69010|58595|59192|
|[baojs](https://github.com/mattreid1/baojs)|49357|56154|45727|46190|
  



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

