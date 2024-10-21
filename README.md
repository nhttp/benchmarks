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
Created At : Mon Oct 21 2024, 12:52:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47964|51074|49173|43645|
|[nhttp](https://github.com/nhttp/nhttp)|47494|51787|47066|43630|
|[fast](https://github.com/danteissaias/fast)|47217|51079|43717|46856|
|[oak](https://github.com/oakserver/oak)|25853|26818|25386|25354|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24621|30830|22471|20562|
|[fastify](https://github.com/fastify/fastify)|16871|17446|16845|16323|
|[koa](https://github.com/koajs/koa)|14134|15179|13003|14221|
|[express](https://github.com/expressjs/express)|6264|6546|5820|6426|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73685|79415|78940|62699|
|[nhttp](https://github.com/nhttp/nhttp)|61353|79445|50224|54391|
|[hono](https://github.com/honojs/hono)|61169|73120|59152|51236|
|[baojs](https://github.com/mattreid1/baojs)|33765|37065|34672|29557|
  



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

