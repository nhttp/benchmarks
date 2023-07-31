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
Created At : Mon Jul 31 2023, 12:45:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56313|60612|55550|52777|
|[hono](https://github.com/honojs/hono)|53006|58021|55815|45182|
|[fastro](https://github.com/fastrodev/fastro)|21125|52606|5305|5463|
|[oak](https://github.com/oakserver/oak)|16450|17314|16394|15641|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35804|38870|35437|33106|
|[fastify](https://github.com/fastify/fastify)|28823|29782|29239|27447|
|[koa](https://github.com/koajs/koa)|18051|19111|16884|18158|
|[express](https://github.com/expressjs/express)|6220|6344|5883|6432|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60858|60144|60463|61968|
|[nhttp](https://github.com/nhttp/nhttp)|60851|61548|60457|60549|
|[elysia](https://github.com/elysiajs/elysia)|57118|58212|59820|53323|
|[baojs](https://github.com/mattreid1/baojs)|47351|53864|47829|40360|
  



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

