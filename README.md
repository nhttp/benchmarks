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
Created At : Thu Mar 07 2024, 12:29:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48825|53058|47435|45983|
|[fast](https://github.com/danteissaias/fast)|48055|51931|45046|47188|
|[hono](https://github.com/honojs/hono)|47151|50903|47516|43035|
|[oak](https://github.com/oakserver/oak)|27254|28097|27846|25818|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25015|31690|22720|20636|
|[fastify](https://github.com/fastify/fastify)|16831|17235|16684|16574|
|[koa](https://github.com/koajs/koa)|15036|16030|13785|15293|
|[express](https://github.com/expressjs/express)|6260|6151|6144|6484|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71116|84012|72685|56652|
|[hono](https://github.com/honojs/hono)|65394|76034|59454|60695|
|[nhttp](https://github.com/nhttp/nhttp)|63355|86398|55094|48572|
|[baojs](https://github.com/mattreid1/baojs)|34321|39599|33852|29512|
  



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

