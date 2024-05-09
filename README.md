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
Created At : Thu May 09 2024, 12:38:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48359|51466|47393|46218|
|[fast](https://github.com/danteissaias/fast)|47783|52271|45074|46003|
|[hono](https://github.com/honojs/hono)|47088|49621|47435|44207|
|[oak](https://github.com/oakserver/oak)|27436|28715|27454|26138|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25325|32816|22580|20580|
|[fastify](https://github.com/fastify/fastify)|16268|16420|16293|16092|
|[koa](https://github.com/koajs/koa)|14352|15250|13626|14180|
|[express](https://github.com/expressjs/express)|6431|6541|6144|6609|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73857|81600|73868|66103|
|[nhttp](https://github.com/nhttp/nhttp)|64444|86057|53257|54017|
|[hono](https://github.com/honojs/hono)|61324|74397|53274|56302|
|[baojs](https://github.com/mattreid1/baojs)|38109|46408|36354|31565|
  



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

