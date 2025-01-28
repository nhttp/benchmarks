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
Created At : Tue Jan 28 2025, 12:49:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57191|63867|53692|54015|
|[fast](https://github.com/danteissaias/fast)|55807|67705|50356|49359|
|[hono](https://github.com/honojs/hono)|54908|56929|55025|52770|
|[oak](https://github.com/oakserver/oak)|27627|27835|26750|28296|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40162|46396|39939|34150|
|[fastify](https://github.com/fastify/fastify)|25016|24654|25590|24803|
|[koa](https://github.com/koajs/koa)|17102|17761|15770|17774|
|[express](https://github.com/expressjs/express)|7011|7208|6449|7375|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77380|92113|74463|65563|
|[nhttp](https://github.com/nhttp/nhttp)|71272|92851|58676|62290|
|[hono](https://github.com/honojs/hono)|66666|78241|60483|61275|
|[baojs](https://github.com/mattreid1/baojs)|49814|54991|47019|47433|
  



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

