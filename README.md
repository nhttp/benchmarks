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
Created At : Mon Dec 02 2024, 12:56:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48752|52757|48006|45494|
|[hono](https://github.com/honojs/hono)|47565|50427|48499|43769|
|[fast](https://github.com/danteissaias/fast)|47120|51552|45479|44330|
|[oak](https://github.com/oakserver/oak)|26196|27149|25606|25833|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24549|30153|22900|20594|
|[fastify](https://github.com/fastify/fastify)|16874|17110|16800|16712|
|[koa](https://github.com/koajs/koa)|14005|14802|13165|14049|
|[express](https://github.com/expressjs/express)|6362|6605|5982|6498|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72110|81550|71721|63058|
|[nhttp](https://github.com/nhttp/nhttp)|62543|84146|52074|51410|
|[hono](https://github.com/honojs/hono)|57032|74432|49301|47364|
|[baojs](https://github.com/mattreid1/baojs)|29400|33349|28405|26446|
  



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

