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
Created At : Wed May 14 2025, 1:00:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58336|61319|61941|51747|
|[nhttp](https://github.com/nhttp/nhttp)|57355|64414|55877|51774|
|[fast](https://github.com/danteissaias/fast)|54688|64262|46303|53498|
|[oak](https://github.com/oakserver/oak)|27561|29134|26959|26591|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39898|46464|36744|36485|
|[fastify](https://github.com/fastify/fastify)|24328|23441|25768|23776|
|[koa](https://github.com/koajs/koa)|17272|17580|17048|17187|
|[express](https://github.com/expressjs/express)|6350|6364|6151|6536|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83419|96306|74216|79735|
|[nhttp](https://github.com/nhttp/nhttp)|65983|86802|57538|53610|
|[hono](https://github.com/honojs/hono)|61505|63604|60372|60538|
|[baojs](https://github.com/mattreid1/baojs)|45687|48662|41238|47161|
  



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

