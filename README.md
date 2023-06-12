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
Created At : Mon Jun 12 2023, 12:50:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57345|62774|55743|53518|
|[hono](https://github.com/honojs/hono)|55473|61195|55391|49833|
|[fast](https://github.com/danteissaias/fast)|53024|62360|42063|54648|
|[fastro](https://github.com/fastrodev/fastro)|47816|57551|49279|36619|
|[oak](https://github.com/oakserver/oak)|17306|18427|17422|16069|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38360|41116|38483|35482|
|[fastify](https://github.com/fastify/fastify)|29926|31439|29165|29175|
|[koa](https://github.com/koajs/koa)|18826|20011|17451|19016|
|[express](https://github.com/expressjs/express)|6332|6620|5732|6643|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62955|62161|64994|61709|
|[hono](https://github.com/honojs/hono)|60712|58417|61244|62474|
|[elysia](https://github.com/elysiajs/elysia)|60050|59422|61004|59725|
|[baojs](https://github.com/mattreid1/baojs)|52284|60536|41222|55094|
  



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

