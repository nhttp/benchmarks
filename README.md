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
Created At : Thu May 02 2024, 12:37:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48178|51488|46530|46517|
|[fast](https://github.com/danteissaias/fast)|47603|51027|45206|46576|
|[hono](https://github.com/honojs/hono)|47554|50694|48037|43930|
|[oak](https://github.com/oakserver/oak)|27702|28976|27821|26309|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24563|30418|22528|20742|
|[fastify](https://github.com/fastify/fastify)|16501|16903|16624|15977|
|[koa](https://github.com/koajs/koa)|14608|15392|13775|14658|
|[express](https://github.com/expressjs/express)|6443|6581|6126|6623|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71896|80568|78183|56937|
|[nhttp](https://github.com/nhttp/nhttp)|63311|83709|62017|44208|
|[hono](https://github.com/honojs/hono)|60121|73389|56424|50550|
|[baojs](https://github.com/mattreid1/baojs)|36427|40144|36229|32907|
  



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

