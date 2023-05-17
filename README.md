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
Created At : Wed May 17 2023, 12:42:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47800|51968|47486|43945|
|[hono](https://github.com/honojs/hono)|46711|51272|47583|41279|
|[fast](https://github.com/danteissaias/fast)|41258|49448|42957|31370|
|[fastro](https://github.com/fastrodev/fastro)|40616|50776|41562|29509|
|[oak](https://github.com/oakserver/oak)|15649|16792|15633|14522|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32777|35749|32344|30238|
|[fastify](https://github.com/fastify/fastify)|25922|26791|25982|24993|
|[koa](https://github.com/koajs/koa)|16714|17519|15649|16973|
|[express](https://github.com/expressjs/express)|5563|5769|5156|5764|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56948|55680|57705|57458|
|[hono](https://github.com/honojs/hono)|54979|54621|54832|55484|
|[elysia](https://github.com/elysiajs/elysia)|53559|54183|52062|54432|
|[baojs](https://github.com/mattreid1/baojs)|48699|55274|50554|40270|
  



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

