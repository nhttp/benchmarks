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
Created At : Tue Jan 02 2024, 12:37:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45931|49264|45271|43257|
|[fast](https://github.com/danteissaias/fast)|45315|48566|43838|43542|
|[hono](https://github.com/honojs/hono)|44406|46793|45503|40923|
|[fastro](https://github.com/fastrodev/fastro)|23011|47685|11077|10272|
|[oak](https://github.com/oakserver/oak)|19398|20303|19640|18251|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24350|30062|22819|20168|
|[fastify](https://github.com/fastify/fastify)|15469|15720|15480|15206|
|[koa](https://github.com/koajs/koa)|14052|14680|13373|14103|
|[express](https://github.com/expressjs/express)|6263|6467|5936|6387|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72592|82131|74434|61211|
|[nhttp](https://github.com/nhttp/nhttp)|58088|77088|45657|51519|
|[hono](https://github.com/honojs/hono)|56883|67931|55712|47005|
|[baojs](https://github.com/mattreid1/baojs)|36661|44090|30586|35307|
  



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

