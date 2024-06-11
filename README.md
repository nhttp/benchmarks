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
Created At : Tue Jun 11 2024, 12:40:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49194|53649|48051|45881|
|[hono](https://github.com/honojs/hono)|48695|52112|50013|43959|
|[fast](https://github.com/danteissaias/fast)|48326|52678|46042|46258|
|[oak](https://github.com/oakserver/oak)|27511|28596|26953|26985|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24810|31247|22940|20242|
|[fastify](https://github.com/fastify/fastify)|17132|17731|16946|16718|
|[koa](https://github.com/koajs/koa)|14731|15709|13817|14666|
|[express](https://github.com/expressjs/express)|6487|6682|6178|6600|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72632|86876|79242|51779|
|[nhttp](https://github.com/nhttp/nhttp)|66347|83082|58396|57564|
|[hono](https://github.com/honojs/hono)|58763|65008|60892|50388|
|[baojs](https://github.com/mattreid1/baojs)|35299|38689|33151|34058|
  



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

