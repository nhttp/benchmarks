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
Created At : Mon Mar 18 2024, 12:40:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47966|51229|46915|45755|
|[fast](https://github.com/danteissaias/fast)|47937|51376|46029|46406|
|[hono](https://github.com/honojs/hono)|46479|48949|47134|43353|
|[oak](https://github.com/oakserver/oak)|27371|29065|27618|25431|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25170|31382|23215|20913|
|[fastify](https://github.com/fastify/fastify)|16677|17146|16547|16338|
|[koa](https://github.com/koajs/koa)|14693|15588|13712|14780|
|[express](https://github.com/expressjs/express)|6328|6463|6098|6424|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78869|84863|75010|76733|
|[nhttp](https://github.com/nhttp/nhttp)|62493|86705|58121|42652|
|[hono](https://github.com/honojs/hono)|60403|70395|61390|49425|
|[baojs](https://github.com/mattreid1/baojs)|34507|39935|30223|33363|
  



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

