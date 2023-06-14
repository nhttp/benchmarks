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
Created At : Wed Jun 14 2023, 12:44:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57640|63476|56263|53180|
|[hono](https://github.com/honojs/hono)|54921|61090|56446|47228|
|[fast](https://github.com/danteissaias/fast)|52038|61407|45549|49159|
|[fastro](https://github.com/fastrodev/fastro)|48112|57653|49768|36916|
|[oak](https://github.com/oakserver/oak)|17226|18871|17547|15259|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38022|41293|37494|35278|
|[fastify](https://github.com/fastify/fastify)|28188|29727|28560|26276|
|[koa](https://github.com/koajs/koa)|18623|19412|17346|19112|
|[express](https://github.com/expressjs/express)|6300|6600|5732|6567|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62438|62029|62823|62461|
|[elysia](https://github.com/elysiajs/elysia)|58839|58762|59921|57834|
|[hono](https://github.com/honojs/hono)|58055|58700|56113|59352|
|[baojs](https://github.com/mattreid1/baojs)|52548|58062|46301|53281|
  



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

