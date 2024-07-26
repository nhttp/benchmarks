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
Created At : Fri Jul 26 2024, 12:42:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46544|49625|46519|43487|
|[hono](https://github.com/honojs/hono)|46170|49203|46695|42612|
|[fast](https://github.com/danteissaias/fast)|45891|49521|44486|43665|
|[oak](https://github.com/oakserver/oak)|26072|26648|25736|25831|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24554|29733|22817|21111|
|[fastify](https://github.com/fastify/fastify)|17077|17548|16990|16692|
|[koa](https://github.com/koajs/koa)|14366|15289|13561|14249|
|[express](https://github.com/expressjs/express)|6366|6468|6076|6554|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64902|71936|68716|54053|
|[hono](https://github.com/honojs/hono)|63013|75617|59563|53860|
|[nhttp](https://github.com/nhttp/nhttp)|57088|83521|44685|43058|
|[baojs](https://github.com/mattreid1/baojs)|35618|39282|34196|33375|
  



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

