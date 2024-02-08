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
Created At : Thu Feb 08 2024, 12:36:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47457|50886|46256|45228|
|[fast](https://github.com/danteissaias/fast)|47427|50669|44723|46888|
|[hono](https://github.com/honojs/hono)|46895|49546|47849|43291|
|[oak](https://github.com/oakserver/oak)|27268|28769|27264|25772|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24504|29656|22992|20865|
|[fastify](https://github.com/fastify/fastify)|16611|16923|16309|16602|
|[koa](https://github.com/koajs/koa)|14775|15665|13778|14883|
|[express](https://github.com/expressjs/express)|6391|6505|6265|6404|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74065|82956|75150|64088|
|[hono](https://github.com/honojs/hono)|62128|69381|66810|50193|
|[nhttp](https://github.com/nhttp/nhttp)|61943|85756|56605|43467|
|[baojs](https://github.com/mattreid1/baojs)|36405|41889|35390|31935|
  



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

