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
Created At : Wed Jun 26 2024, 12:40:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48718|52394|48846|44914|
|[nhttp](https://github.com/nhttp/nhttp)|48664|51973|48228|45790|
|[fast](https://github.com/danteissaias/fast)|47811|52321|45086|46025|
|[oak](https://github.com/oakserver/oak)|27439|28501|26816|26999|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25260|32062|22875|20843|
|[fastify](https://github.com/fastify/fastify)|17066|17516|17136|16546|
|[koa](https://github.com/koajs/koa)|14417|15251|13606|14394|
|[express](https://github.com/expressjs/express)|6407|6559|6154|6509|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75763|86931|78707|61652|
|[nhttp](https://github.com/nhttp/nhttp)|61430|88668|52610|43013|
|[hono](https://github.com/honojs/hono)|56605|70340|52416|47060|
|[baojs](https://github.com/mattreid1/baojs)|35730|42729|34146|30316|
  



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

