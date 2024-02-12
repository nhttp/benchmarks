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
Created At : Mon Feb 12 2024, 12:37:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48436|52227|44256|48826|
|[nhttp](https://github.com/nhttp/nhttp)|47984|51594|47204|45154|
|[hono](https://github.com/honojs/hono)|46869|48884|48053|43671|
|[oak](https://github.com/oakserver/oak)|27172|28638|27237|25641|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25105|31567|23185|20563|
|[fastify](https://github.com/fastify/fastify)|16789|16710|16824|16833|
|[koa](https://github.com/koajs/koa)|14712|15520|13875|14741|
|[express](https://github.com/expressjs/express)|6455|6664|6151|6550|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77764|83130|82106|68055|
|[nhttp](https://github.com/nhttp/nhttp)|64175|82944|59838|49742|
|[hono](https://github.com/honojs/hono)|60281|68758|60587|51498|
|[baojs](https://github.com/mattreid1/baojs)|36233|40084|35169|33447|
  



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

