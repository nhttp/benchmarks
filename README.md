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
Created At : Fri Feb 14 2025, 12:50:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60059|67015|58807|54355|
|[hono](https://github.com/honojs/hono)|55134|57998|56854|50551|
|[fast](https://github.com/danteissaias/fast)|54473|65305|44349|53764|
|[oak](https://github.com/oakserver/oak)|28401|27953|27247|30002|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39544|44062|39879|34690|
|[fastify](https://github.com/fastify/fastify)|25213|25045|25946|24649|
|[koa](https://github.com/koajs/koa)|17272|18611|15844|17360|
|[express](https://github.com/expressjs/express)|6990|7158|6525|7288|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76874|90234|77373|63014|
|[nhttp](https://github.com/nhttp/nhttp)|71129|95712|57637|60037|
|[hono](https://github.com/honojs/hono)|65812|77372|59474|60590|
|[baojs](https://github.com/mattreid1/baojs)|50494|56333|48447|46703|
  



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

