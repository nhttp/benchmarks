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
Created At : Mon Mar 03 2025, 12:54:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59586|64185|57379|57194|
|[hono](https://github.com/honojs/hono)|57044|62258|58635|50239|
|[fast](https://github.com/danteissaias/fast)|55562|63769|46832|56086|
|[oak](https://github.com/oakserver/oak)|28262|28728|28855|27204|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39868|44622|39204|35777|
|[fastify](https://github.com/fastify/fastify)|24872|24962|26350|23303|
|[koa](https://github.com/koajs/koa)|17086|18291|16109|16857|
|[express](https://github.com/expressjs/express)|7093|7398|6651|7231|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76353|88856|79141|61061|
|[nhttp](https://github.com/nhttp/nhttp)|71793|93352|64057|57970|
|[hono](https://github.com/honojs/hono)|66446|75656|62418|61265|
|[baojs](https://github.com/mattreid1/baojs)|48191|52143|45496|46935|
  



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

