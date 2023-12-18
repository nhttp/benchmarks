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
Created At : Mon Dec 18 2023, 12:39:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46448|50987|44746|43612|
|[fast](https://github.com/danteissaias/fast)|45891|49260|44521|43891|
|[hono](https://github.com/honojs/hono)|45369|48600|45700|41806|
|[fastro](https://github.com/fastrodev/fastro)|23869|49526|11184|10896|
|[oak](https://github.com/oakserver/oak)|21360|22462|21425|20193|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24830|30945|22948|20597|
|[fastify](https://github.com/fastify/fastify)|15654|16235|15334|15394|
|[koa](https://github.com/koajs/koa)|14277|14890|13734|14207|
|[express](https://github.com/expressjs/express)|6371|6489|6091|6532|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72637|80305|71988|65617|
|[nhttp](https://github.com/nhttp/nhttp)|61086|79448|50452|53359|
|[hono](https://github.com/honojs/hono)|60203|72409|58966|49235|
|[baojs](https://github.com/mattreid1/baojs)|34518|39767|30516|33271|
  



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

