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
Created At : Tue Mar 18 2025, 12:53:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62387|68089|60636|58435|
|[hono](https://github.com/honojs/hono)|59674|62606|62916|53499|
|[fast](https://github.com/danteissaias/fast)|55233|63776|51119|50805|
|[oak](https://github.com/oakserver/oak)|28416|29061|28623|27564|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40026|47490|38103|34486|
|[fastify](https://github.com/fastify/fastify)|25544|25852|27303|23477|
|[koa](https://github.com/koajs/koa)|16954|17826|15932|17105|
|[express](https://github.com/expressjs/express)|6989|7207|6390|7369|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73126|80344|71057|67976|
|[nhttp](https://github.com/nhttp/nhttp)|68049|88419|55556|60173|
|[hono](https://github.com/honojs/hono)|64442|73260|61397|58668|
|[baojs](https://github.com/mattreid1/baojs)|48680|53645|47454|44941|
  



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

