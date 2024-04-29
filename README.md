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
Created At : Mon Apr 29 2024, 12:38:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48309|51701|47358|45867|
|[fast](https://github.com/danteissaias/fast)|48197|51313|46452|46827|
|[hono](https://github.com/honojs/hono)|47447|50079|48022|44241|
|[oak](https://github.com/oakserver/oak)|28062|29731|28194|26261|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24602|30873|22550|20383|
|[fastify](https://github.com/fastify/fastify)|16977|17177|16948|16807|
|[koa](https://github.com/koajs/koa)|14476|15095|13507|14825|
|[express](https://github.com/expressjs/express)|6430|6627|6155|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78843|86384|82140|68006|
|[hono](https://github.com/honojs/hono)|65594|68419|65509|62853|
|[nhttp](https://github.com/nhttp/nhttp)|60802|87494|49900|45011|
|[baojs](https://github.com/mattreid1/baojs)|36782|42551|35649|32147|
  



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

