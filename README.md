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
Created At : Fri Aug 16 2024, 12:43:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45308|49335|41915|44674|
|[hono](https://github.com/honojs/hono)|45240|47522|46564|41633|
|[nhttp](https://github.com/nhttp/nhttp)|45180|47997|45156|42386|
|[oak](https://github.com/oakserver/oak)|25503|26415|24854|25240|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25054|32236|22700|20227|
|[fastify](https://github.com/fastify/fastify)|16827|17230|16659|16591|
|[koa](https://github.com/koajs/koa)|14469|15618|13270|14519|
|[express](https://github.com/expressjs/express)|6357|6497|6082|6493|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71731|82900|75159|57133|
|[nhttp](https://github.com/nhttp/nhttp)|60113|83645|49625|47068|
|[hono](https://github.com/honojs/hono)|55688|69167|50041|47857|
|[baojs](https://github.com/mattreid1/baojs)|34941|39587|34925|30311|
  



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

