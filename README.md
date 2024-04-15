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
Created At : Mon Apr 15 2024, 3:06:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48289|50955|47898|46015|
|[hono](https://github.com/honojs/hono)|47402|49773|47795|44637|
|[fast](https://github.com/danteissaias/fast)|47279|51185|44644|46008|
|[oak](https://github.com/oakserver/oak)|27866|29517|28245|25835|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25318|32017|23340|20596|
|[fastify](https://github.com/fastify/fastify)|17040|17451|16986|16683|
|[koa](https://github.com/koajs/koa)|14704|15816|13638|14659|
|[express](https://github.com/expressjs/express)|6458|6616|6227|6532|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77953|83299|78804|71757|
|[nhttp](https://github.com/nhttp/nhttp)|63567|83937|53829|52936|
|[hono](https://github.com/honojs/hono)|57258|66857|54444|50474|
|[baojs](https://github.com/mattreid1/baojs)|36635|42805|34511|32589|
  



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

