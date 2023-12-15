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
Created At : Fri Dec 15 2023, 12:39:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46152|49317|44953|44185|
|[fast](https://github.com/danteissaias/fast)|45974|49035|44251|44637|
|[hono](https://github.com/honojs/hono)|44994|48334|45031|41617|
|[fastro](https://github.com/fastrodev/fastro)|22584|48308|10094|9349|
|[oak](https://github.com/oakserver/oak)|20945|22178|20724|19932|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25895|33442|23277|20967|
|[fastify](https://github.com/fastify/fastify)|15376|15529|15188|15412|
|[koa](https://github.com/koajs/koa)|14189|14747|13568|14251|
|[express](https://github.com/expressjs/express)|6297|6460|5982|6448|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68955|79016|69839|58010|
|[hono](https://github.com/honojs/hono)|61491|69337|63632|51504|
|[nhttp](https://github.com/nhttp/nhttp)|60317|81749|48508|50694|
|[baojs](https://github.com/mattreid1/baojs)|33155|37136|29074|33256|
  



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

