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
Created At : Mon May 15 2023, 12:42:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48491|53707|48052|43714|
|[hono](https://github.com/honojs/hono)|46845|51994|48052|40489|
|[fast](https://github.com/danteissaias/fast)|43094|50810|44320|34152|
|[fastro](https://github.com/fastrodev/fastro)|41088|49958|43676|29631|
|[oak](https://github.com/oakserver/oak)|15615|16637|15629|14579|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32658|35572|32462|29941|
|[fastify](https://github.com/fastify/fastify)|26470|27517|26452|25442|
|[koa](https://github.com/koajs/koa)|16089|17124|14684|16460|
|[express](https://github.com/expressjs/express)|5480|5523|5051|5866|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55958|54768|56845|56260|
|[hono](https://github.com/honojs/hono)|54047|53279|55872|52990|
|[elysia](https://github.com/elysiajs/elysia)|53789|52738|55547|53081|
|[baojs](https://github.com/mattreid1/baojs)|47493|53695|49422|39363|
  



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

