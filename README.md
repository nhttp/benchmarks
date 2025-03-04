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
Created At : Tue Mar 04 2025, 12:52:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61356|65662|60612|57794|
|[fast](https://github.com/danteissaias/fast)|58503|66397|49565|59546|
|[hono](https://github.com/honojs/hono)|56360|59536|55996|53547|
|[oak](https://github.com/oakserver/oak)|29071|29535|28388|29291|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39203|46189|36673|34748|
|[fastify](https://github.com/fastify/fastify)|24908|24538|25129|25056|
|[koa](https://github.com/koajs/koa)|17028|17374|16468|17243|
|[express](https://github.com/expressjs/express)|6826|6949|6329|7199|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76150|89869|75094|63487|
|[nhttp](https://github.com/nhttp/nhttp)|68865|91909|56263|58423|
|[hono](https://github.com/honojs/hono)|65713|75768|61766|59604|
|[baojs](https://github.com/mattreid1/baojs)|47092|51397|42794|47085|
  



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

