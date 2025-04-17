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
Created At : Thu Apr 17 2025, 12:58:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60288|67651|59422|53790|
|[hono](https://github.com/honojs/hono)|56272|60313|56562|51941|
|[fast](https://github.com/danteissaias/fast)|54784|66768|51356|46227|
|[oak](https://github.com/oakserver/oak)|27682|28672|26412|27962|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38257|46032|35591|33147|
|[fastify](https://github.com/fastify/fastify)|25038|25287|25495|24332|
|[koa](https://github.com/koajs/koa)|16481|17588|15480|16376|
|[express](https://github.com/expressjs/express)|6396|6543|6064|6580|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74213|79652|74016|68970|
|[hono](https://github.com/honojs/hono)|64903|72921|58450|63337|
|[nhttp](https://github.com/nhttp/nhttp)|59483|80826|49505|48117|
|[baojs](https://github.com/mattreid1/baojs)|46459|52523|42438|44416|
  



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

