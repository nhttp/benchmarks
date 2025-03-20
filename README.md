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
Created At : Thu Mar 20 2025, 12:52:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59533|65212|56970|56417|
|[hono](https://github.com/honojs/hono)|54756|60906|53618|49745|
|[fast](https://github.com/danteissaias/fast)|54221|61275|50285|51104|
|[oak](https://github.com/oakserver/oak)|27501|27057|27893|27554|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38760|45431|36379|34469|
|[fastify](https://github.com/fastify/fastify)|25752|28050|26192|23013|
|[koa](https://github.com/koajs/koa)|16744|17523|15494|17214|
|[express](https://github.com/expressjs/express)|7034|7237|6497|7369|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81939|96165|79486|70167|
|[nhttp](https://github.com/nhttp/nhttp)|71459|97557|61224|55595|
|[hono](https://github.com/honojs/hono)|65333|74279|63517|58204|
|[baojs](https://github.com/mattreid1/baojs)|51555|57835|48938|47891|
  



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

