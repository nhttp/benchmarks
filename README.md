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
Created At : Sun Nov 12 2023, 12:39:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47012|49630|44240|47166|
|[hono](https://github.com/honojs/hono)|44072|45416|44512|42289|
|[fast](https://github.com/danteissaias/fast)|41035|49210|41795|32101|
|[fastro](https://github.com/fastrodev/fastro)|19013|45981|5362|5695|
|[oak](https://github.com/oakserver/oak)|15634|16115|15697|15091|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33926|36010|33588|32180|
|[fastify](https://github.com/fastify/fastify)|24726|25760|24898|23520|
|[koa](https://github.com/koajs/koa)|16342|16927|15154|16946|
|[express](https://github.com/expressjs/express)|4930|5050|4556|5185|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|48744|44493|50699|51040|
|[nhttp](https://github.com/nhttp/nhttp)|47257|48444|46653|46675|
|[hono](https://github.com/honojs/hono)|44438|46150|42409|44756|
|[baojs](https://github.com/mattreid1/baojs)|37612|42146|37276|33413|
  



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

