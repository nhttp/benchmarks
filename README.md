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
Created At : Tue Jan 16 2024, 12:39:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46997|51168|45610|44213|
|[fast](https://github.com/danteissaias/fast)|46914|49886|42784|48071|
|[hono](https://github.com/honojs/hono)|46279|48724|46946|43168|
|[fastro](https://github.com/fastrodev/fastro)|24313|50326|11541|11071|
|[oak](https://github.com/oakserver/oak)|22397|23880|22203|21107|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25916|33340|23331|21076|
|[fastify](https://github.com/fastify/fastify)|15562|15820|15143|15723|
|[koa](https://github.com/koajs/koa)|14139|14749|13326|14342|
|[express](https://github.com/expressjs/express)|6316|6463|6054|6430|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70254|75996|72548|62219|
|[nhttp](https://github.com/nhttp/nhttp)|60937|80920|51329|50563|
|[hono](https://github.com/honojs/hono)|58965|68613|54011|54270|
|[baojs](https://github.com/mattreid1/baojs)|37686|44076|33605|35376|
  



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

