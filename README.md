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
Created At : Sun Apr 21 2024, 12:42:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48936|52099|50126|44582|
|[fast](https://github.com/danteissaias/fast)|48248|52247|45552|46946|
|[nhttp](https://github.com/nhttp/nhttp)|48013|51235|47303|45500|
|[oak](https://github.com/oakserver/oak)|28300|29843|28370|26686|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24876|31701|22784|20143|
|[fastify](https://github.com/fastify/fastify)|16994|17566|16966|16450|
|[koa](https://github.com/koajs/koa)|14867|15802|14098|14702|
|[express](https://github.com/expressjs/express)|6561|6644|6286|6752|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71839|82653|74845|58020|
|[nhttp](https://github.com/nhttp/nhttp)|61878|87440|46897|51296|
|[hono](https://github.com/honojs/hono)|59215|63597|57501|56546|
|[baojs](https://github.com/mattreid1/baojs)|37693|45992|32226|34862|
  



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

