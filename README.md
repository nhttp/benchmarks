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
Created At : Wed Nov 13 2024, 12:49:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48251|51778|48405|44570|
|[hono](https://github.com/honojs/hono)|47306|50881|47687|43350|
|[fast](https://github.com/danteissaias/fast)|46731|50771|44795|44626|
|[oak](https://github.com/oakserver/oak)|25956|26832|25551|25485|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24328|29775|22476|20733|
|[fastify](https://github.com/fastify/fastify)|16967|17576|16805|16519|
|[koa](https://github.com/koajs/koa)|14172|15220|12922|14373|
|[express](https://github.com/expressjs/express)|6281|6496|5849|6498|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79853|86135|79927|73496|
|[nhttp](https://github.com/nhttp/nhttp)|63212|84824|50736|54076|
|[hono](https://github.com/honojs/hono)|62939|78203|54763|55851|
|[baojs](https://github.com/mattreid1/baojs)|34117|38677|30397|33278|
  



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

