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
Created At : Thu May 08 2025, 1:00:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59846|66038|59288|54213|
|[hono](https://github.com/honojs/hono)|57587|63596|60448|48716|
|[fast](https://github.com/danteissaias/fast)|55143|64570|43357|57501|
|[oak](https://github.com/oakserver/oak)|26762|27301|26051|26934|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37559|44001|36071|32605|
|[fastify](https://github.com/fastify/fastify)|23958|24841|24980|22052|
|[koa](https://github.com/koajs/koa)|16390|16847|16280|16042|
|[express](https://github.com/expressjs/express)|6229|6268|5970|6449|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80720|90231|74685|77243|
|[nhttp](https://github.com/nhttp/nhttp)|66111|85934|55232|57168|
|[hono](https://github.com/honojs/hono)|63690|72927|60787|57356|
|[baojs](https://github.com/mattreid1/baojs)|45952|49884|44375|43598|
  



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

