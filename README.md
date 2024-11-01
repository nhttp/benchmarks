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
Created At : Fri Nov 01 2024, 12:54:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48073|52121|47591|44507|
|[hono](https://github.com/honojs/hono)|47528|49962|48993|43628|
|[fast](https://github.com/danteissaias/fast)|47314|51375|43890|46676|
|[oak](https://github.com/oakserver/oak)|26497|27478|25922|26091|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24555|30469|22248|20948|
|[fastify](https://github.com/fastify/fastify)|17191|17676|17024|16872|
|[koa](https://github.com/koajs/koa)|13930|14814|13151|13825|
|[express](https://github.com/expressjs/express)|6326|6511|5941|6525|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66830|81612|72168|46711|
|[nhttp](https://github.com/nhttp/nhttp)|57985|83909|46708|43338|
|[hono](https://github.com/honojs/hono)|50386|62765|45683|42711|
|[baojs](https://github.com/mattreid1/baojs)|33645|39706|32487|28742|
  



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

