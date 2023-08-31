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
Created At : Thu Aug 31 2023, 12:35:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56555|59585|55437|54643|
|[hono](https://github.com/honojs/hono)|54353|59516|53452|50090|
|[fastro](https://github.com/fastrodev/fastro)|21877|54621|6133|4878|
|[oak](https://github.com/oakserver/oak)|17449|18385|17521|16442|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36915|39685|36997|34064|
|[fastify](https://github.com/fastify/fastify)|28480|30099|28786|26555|
|[koa](https://github.com/koajs/koa)|18580|19831|17205|18705|
|[express](https://github.com/expressjs/express)|6296|6540|6246|6101|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64403|63413|64369|65426|
|[hono](https://github.com/honojs/hono)|62846|63070|64059|61409|
|[nhttp](https://github.com/nhttp/nhttp)|58693|61038|59352|55690|
|[baojs](https://github.com/mattreid1/baojs)|44801|50133|39276|44995|
  



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

