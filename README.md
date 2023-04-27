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
Created At : Thu Apr 27 2023, 12:42:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39408|41663|38689|37873|
|[hono](https://github.com/honojs/hono)|38089|42131|38018|34118|
|[fast](https://github.com/danteissaias/fast)|37631|42069|36907|33918|
|[fastro](https://github.com/fastrodev/fastro)|32690|38913|33125|26033|
|[oak](https://github.com/oakserver/oak)|18055|19111|18064|16989|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37733|41300|37349|34550|
|[fastify](https://github.com/fastify/fastify)|29181|30023|29164|28355|
|[koa](https://github.com/koajs/koa)|18744|19579|17606|19047|
|[express](https://github.com/expressjs/express)|6347|6599|5817|6625|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67951|66524|69568|67761|
|[elysia](https://github.com/elysiajs/elysia)|64891|69391|62281|63001|
|[hono](https://github.com/honojs/hono)|64776|69082|64198|61049|
|[baojs](https://github.com/mattreid1/baojs)|56698|65432|50082|54581|
  



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

