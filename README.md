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
Created At : Mon Jul 01 2024, 12:47:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48567|52168|48449|45083|
|[hono](https://github.com/honojs/hono)|48433|51873|49074|44352|
|[fast](https://github.com/danteissaias/fast)|48013|53129|44737|46172|
|[oak](https://github.com/oakserver/oak)|26739|27548|26099|26571|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24248|29819|22427|20499|
|[fastify](https://github.com/fastify/fastify)|16981|17279|16842|16822|
|[koa](https://github.com/koajs/koa)|14632|15693|13548|14654|
|[express](https://github.com/expressjs/express)|6236|6322|6136|6250|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63598|80896|60674|49225|
|[nhttp](https://github.com/nhttp/nhttp)|56767|82091|40180|48030|
|[hono](https://github.com/honojs/hono)|55025|68247|46524|50303|
|[baojs](https://github.com/mattreid1/baojs)|32907|37671|32794|28255|
  



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

