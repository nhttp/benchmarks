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
Created At : Fri Nov 08 2024, 12:49:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49007|53648|48335|45038|
|[fast](https://github.com/danteissaias/fast)|48234|52430|46197|46075|
|[hono](https://github.com/honojs/hono)|47854|51282|47868|44411|
|[oak](https://github.com/oakserver/oak)|25761|27045|25075|25163|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23304|28370|21603|19939|
|[fastify](https://github.com/fastify/fastify)|17167|17532|17008|16962|
|[koa](https://github.com/koajs/koa)|13994|14762|13203|14016|
|[express](https://github.com/expressjs/express)|6272|6442|5989|6384|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77730|85603|74405|73182|
|[hono](https://github.com/honojs/hono)|62425|77546|54756|54972|
|[nhttp](https://github.com/nhttp/nhttp)|61192|85358|47494|50725|
|[baojs](https://github.com/mattreid1/baojs)|36342|42557|30702|35767|
  



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

