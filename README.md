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
Created At : Wed Jun 04 2025, 1:05:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55246|63089|53957|48693|
|[fast](https://github.com/danteissaias/fast)|54122|64121|43807|54439|
|[hono](https://github.com/honojs/hono)|53253|53727|53963|52069|
|[oak](https://github.com/oakserver/oak)|27831|29694|25857|27943|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37564|43289|34729|34675|
|[fastify](https://github.com/fastify/fastify)|24853|24830|26011|23717|
|[koa](https://github.com/koajs/koa)|16970|17524|16931|16455|
|[express](https://github.com/expressjs/express)|6391|6530|6106|6536|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81651|95806|75116|74030|
|[nhttp](https://github.com/nhttp/nhttp)|67585|90723|56194|55839|
|[hono](https://github.com/honojs/hono)|60568|68210|58034|55460|
|[baojs](https://github.com/mattreid1/baojs)|44636|51069|40712|42128|
  



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

