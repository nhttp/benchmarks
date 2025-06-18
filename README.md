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
Created At : Wed Jun 18 2025, 1:02:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60081|68203|58812|53229|
|[hono](https://github.com/honojs/hono)|58576|64155|60845|50728|
|[fast](https://github.com/danteissaias/fast)|53296|60844|44760|54285|
|[oak](https://github.com/oakserver/oak)|27483|29858|27397|25195|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39672|45354|39420|34241|
|[fastify](https://github.com/fastify/fastify)|25224|26332|26371|22969|
|[koa](https://github.com/koajs/koa)|16675|16874|16661|16489|
|[express](https://github.com/expressjs/express)|6267|6394|5895|6513|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80591|94285|72960|74528|
|[nhttp](https://github.com/nhttp/nhttp)|68559|93203|55901|56572|
|[hono](https://github.com/honojs/hono)|63944|71580|63246|57006|
|[baojs](https://github.com/mattreid1/baojs)|45762|50336|43323|43628|
  



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

