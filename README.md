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
Created At : Tue May 30 2023, 12:42:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50754|54424|51001|46838|
|[fast](https://github.com/danteissaias/fast)|50636|55934|47468|48506|
|[hono](https://github.com/honojs/hono)|47671|49129|50354|43529|
|[fastro](https://github.com/fastrodev/fastro)|40842|50666|42344|29517|
|[oak](https://github.com/oakserver/oak)|16088|17842|15059|15364|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36937|39880|36569|34363|
|[fastify](https://github.com/fastify/fastify)|27010|29488|24128|27415|
|[koa](https://github.com/koajs/koa)|18160|19179|16648|18653|
|[express](https://github.com/expressjs/express)|6187|6155|6001|6404|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60719|59957|61245|60955|
|[elysia](https://github.com/elysiajs/elysia)|57108|54980|57527|58816|
|[nhttp](https://github.com/nhttp/nhttp)|56286|60306|58073|50480|
|[baojs](https://github.com/mattreid1/baojs)|50791|54249|48778|49345|
  



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

