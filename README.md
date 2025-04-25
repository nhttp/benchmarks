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
Created At : Fri Apr 25 2025, 12:59:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59825|66999|58410|54066|
|[hono](https://github.com/honojs/hono)|58993|65833|59384|51763|
|[fast](https://github.com/danteissaias/fast)|54717|66263|44267|53621|
|[oak](https://github.com/oakserver/oak)|28178|28927|27919|27687|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39130|44492|37896|35003|
|[fastify](https://github.com/fastify/fastify)|24827|25653|25832|22997|
|[koa](https://github.com/koajs/koa)|17262|18147|16001|17638|
|[express](https://github.com/expressjs/express)|6572|6653|6350|6712|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76193|87427|75991|65160|
|[nhttp](https://github.com/nhttp/nhttp)|69807|94219|58234|56968|
|[hono](https://github.com/honojs/hono)|65697|74509|62240|60343|
|[baojs](https://github.com/mattreid1/baojs)|46756|52209|45223|42835|
  



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

