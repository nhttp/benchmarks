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
Created At : Sun Sep 10 2023, 12:37:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57497|61975|56532|53983|
|[fast](https://github.com/danteissaias/fast)|51822|61361|43962|50142|
|[hono](https://github.com/honojs/hono)|51737|56778|53137|45296|
|[fastro](https://github.com/fastrodev/fastro)|22839|56568|6296|5654|
|[oak](https://github.com/oakserver/oak)|17443|18596|17344|16389|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39153|42688|38293|36479|
|[fastify](https://github.com/fastify/fastify)|28651|30050|28712|27192|
|[koa](https://github.com/koajs/koa)|18080|18949|16821|18470|
|[express](https://github.com/expressjs/express)|6270|6532|5706|6571|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62583|63158|62726|61865|
|[hono](https://github.com/honojs/hono)|61881|62448|62776|60418|
|[nhttp](https://github.com/nhttp/nhttp)|60735|63459|60714|58031|
|[baojs](https://github.com/mattreid1/baojs)|43723|49844|37764|43560|
  



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

