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
Created At : Sat May 06 2023, 12:36:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40644|44559|39752|37622|
|[hono](https://github.com/honojs/hono)|36125|39640|37478|31258|
|[fast](https://github.com/danteissaias/fast)|33919|42835|35420|23503|
|[fastro](https://github.com/fastrodev/fastro)|33679|42540|33602|24896|
|[oak](https://github.com/oakserver/oak)|10794|11545|10695|10143|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|18184|19672|17877|17004|
|[fastify](https://github.com/fastify/fastify)|13856|14626|13723|13219|
|[koa](https://github.com/koajs/koa)|9585|10010|9045|9700|
|[express](https://github.com/expressjs/express)|3956|4152|3565|4151|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49418|52271|49518|46466|
|[elysia](https://github.com/elysiajs/elysia)|48517|46014|50844|48693|
|[hono](https://github.com/honojs/hono)|47870|50432|50356|42822|
|[baojs](https://github.com/mattreid1/baojs)|43516|51069|43785|35695|
  



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

