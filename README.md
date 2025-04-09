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
Created At : Wed Apr 09 2025, 12:54:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60331|67110|58151|55731|
|[fast](https://github.com/danteissaias/fast)|54536|60445|45788|57375|
|[hono](https://github.com/honojs/hono)|53209|58247|54587|46793|
|[oak](https://github.com/oakserver/oak)|26742|27691|26161|26373|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38350|45508|35950|33592|
|[fastify](https://github.com/fastify/fastify)|24859|25036|25893|23647|
|[koa](https://github.com/koajs/koa)|16622|17139|15627|17100|
|[express](https://github.com/expressjs/express)|6450|6568|6192|6589|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76040|86449|71611|70061|
|[nhttp](https://github.com/nhttp/nhttp)|65649|84274|54619|58053|
|[hono](https://github.com/honojs/hono)|63174|70796|60029|58697|
|[baojs](https://github.com/mattreid1/baojs)|46044|49745|41871|46516|
  



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

