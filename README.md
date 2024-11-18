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
Created At : Mon Nov 18 2024, 12:54:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48281|51335|49076|44432|
|[fast](https://github.com/danteissaias/fast)|47892|52274|45170|46231|
|[nhttp](https://github.com/nhttp/nhttp)|47861|52368|47140|44075|
|[oak](https://github.com/oakserver/oak)|26023|26900|25828|25341|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24045|29938|21945|20251|
|[fastify](https://github.com/fastify/fastify)|17147|17401|17036|17004|
|[koa](https://github.com/koajs/koa)|13982|14949|12866|14130|
|[express](https://github.com/expressjs/express)|6342|6601|5949|6476|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79036|85100|80849|71159|
|[hono](https://github.com/honojs/hono)|65432|76718|60342|59236|
|[nhttp](https://github.com/nhttp/nhttp)|63992|85335|53528|53114|
|[baojs](https://github.com/mattreid1/baojs)|36203|42985|35098|30526|
  



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

