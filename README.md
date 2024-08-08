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
Created At : Thu Aug 08 2024, 12:43:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46836|50490|46870|43147|
|[hono](https://github.com/honojs/hono)|46584|49644|47059|43048|
|[fast](https://github.com/danteissaias/fast)|45869|50195|42853|44560|
|[oak](https://github.com/oakserver/oak)|25937|26889|25279|25643|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24811|31372|22928|20133|
|[fastify](https://github.com/fastify/fastify)|17154|17790|16943|16729|
|[koa](https://github.com/koajs/koa)|14331|15128|13603|14261|
|[express](https://github.com/expressjs/express)|6387|6560|6125|6477|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73278|88803|82321|48711|
|[hono](https://github.com/honojs/hono)|65063|77435|54689|63066|
|[nhttp](https://github.com/nhttp/nhttp)|57348|82199|43263|46583|
|[baojs](https://github.com/mattreid1/baojs)|37384|41703|37796|32653|
  



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

