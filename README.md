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
Created At : Thu Dec 28 2023, 12:36:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46427|50145|41525|47611|
|[nhttp](https://github.com/nhttp/nhttp)|46155|49832|44888|43744|
|[hono](https://github.com/honojs/hono)|44703|46711|45707|41692|
|[fastro](https://github.com/fastrodev/fastro)|22970|47708|10266|10936|
|[oak](https://github.com/oakserver/oak)|20591|21588|20659|19526|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25967|33335|23294|21271|
|[fastify](https://github.com/fastify/fastify)|15243|15721|14910|15099|
|[koa](https://github.com/koajs/koa)|14193|14508|13259|14811|
|[express](https://github.com/expressjs/express)|6338|6434|6071|6509|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68294|79826|71059|53998|
|[nhttp](https://github.com/nhttp/nhttp)|63120|83421|57198|48742|
|[hono](https://github.com/honojs/hono)|60360|69396|59731|51953|
|[baojs](https://github.com/mattreid1/baojs)|38223|46623|33387|34660|
  



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

