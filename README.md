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
Created At : Sun Jun 04 2023, 12:55:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52533|57692|51005|48903|
|[hono](https://github.com/honojs/hono)|52104|56526|53650|46136|
|[fast](https://github.com/danteissaias/fast)|43192|55993|46831|26753|
|[fastro](https://github.com/fastrodev/fastro)|42398|52469|43747|30978|
|[oak](https://github.com/oakserver/oak)|17410|18897|17339|15995|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38182|41269|37654|35622|
|[fastify](https://github.com/fastify/fastify)|29161|30301|29170|28013|
|[koa](https://github.com/koajs/koa)|18502|19594|17148|18765|
|[express](https://github.com/expressjs/express)|6355|6461|6003|6601|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61305|61457|61104|61354|
|[hono](https://github.com/honojs/hono)|61039|61157|60053|61908|
|[elysia](https://github.com/elysiajs/elysia)|58456|58700|58739|57929|
|[baojs](https://github.com/mattreid1/baojs)|50348|57316|52501|41226|
  



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

