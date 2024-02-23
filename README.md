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
Created At : Fri Feb 23 2024, 12:35:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46643|49421|46269|44238|
|[fast](https://github.com/danteissaias/fast)|46258|50107|44033|44634|
|[hono](https://github.com/honojs/hono)|46062|48670|46999|42516|
|[oak](https://github.com/oakserver/oak)|26985|28469|27141|25344|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24076|29961|22177|20090|
|[fastify](https://github.com/fastify/fastify)|16014|16689|15525|15828|
|[koa](https://github.com/koajs/koa)|14396|15197|13394|14596|
|[express](https://github.com/expressjs/express)|6234|6331|5923|6447|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72986|82603|76159|60195|
|[hono](https://github.com/honojs/hono)|57711|70924|52957|49252|
|[nhttp](https://github.com/nhttp/nhttp)|57338|81218|47211|43584|
|[baojs](https://github.com/mattreid1/baojs)|32265|35136|28596|33062|
  



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

