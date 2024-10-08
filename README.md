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
Created At : Tue Oct 08 2024, 12:49:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47013|51861|44450|44728|
|[nhttp](https://github.com/nhttp/nhttp)|46955|51705|45878|43282|
|[hono](https://github.com/honojs/hono)|46930|49753|47878|43158|
|[oak](https://github.com/oakserver/oak)|25548|26451|24918|25275|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25091|32416|22658|20199|
|[fastify](https://github.com/fastify/fastify)|16963|17384|16861|16643|
|[koa](https://github.com/koajs/koa)|13481|14353|12592|13499|
|[express](https://github.com/expressjs/express)|6006|6133|5715|6171|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70039|82047|72108|55963|
|[nhttp](https://github.com/nhttp/nhttp)|57984|82804|48302|42847|
|[hono](https://github.com/honojs/hono)|54128|64773|51439|46171|
|[baojs](https://github.com/mattreid1/baojs)|34189|39838|33912|28816|
  



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

