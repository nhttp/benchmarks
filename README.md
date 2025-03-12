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
Created At : Wed Mar 12 2025, 12:52:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59702|60313|61815|56979|
|[hono](https://github.com/honojs/hono)|57817|61519|61581|50352|
|[fast](https://github.com/danteissaias/fast)|53767|62693|46367|52241|
|[oak](https://github.com/oakserver/oak)|27168|28455|25483|27566|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37641|42913|36135|33876|
|[fastify](https://github.com/fastify/fastify)|24638|25876|25966|22071|
|[koa](https://github.com/koajs/koa)|16676|17444|15301|17282|
|[express](https://github.com/expressjs/express)|7018|7264|6511|7279|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74473|90960|69079|63380|
|[nhttp](https://github.com/nhttp/nhttp)|64866|85789|52921|55888|
|[hono](https://github.com/honojs/hono)|62069|72237|56039|57932|
|[baojs](https://github.com/mattreid1/baojs)|46637|51272|43338|45301|
  



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

