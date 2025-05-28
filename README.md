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
Created At : Wed May 28 2025, 1:04:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61727|65481|59977|59724|
|[hono](https://github.com/honojs/hono)|58954|67653|60381|48827|
|[fast](https://github.com/danteissaias/fast)|56536|70073|45567|53968|
|[oak](https://github.com/oakserver/oak)|27958|29503|26932|27438|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40460|48386|37131|35863|
|[fastify](https://github.com/fastify/fastify)|25831|27705|26062|23725|
|[koa](https://github.com/koajs/koa)|17603|18388|17134|17286|
|[express](https://github.com/expressjs/express)|6447|6503|6314|6524|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83747|88258|83994|78990|
|[nhttp](https://github.com/nhttp/nhttp)|72399|93530|62212|61455|
|[hono](https://github.com/honojs/hono)|67028|71382|65291|64410|
|[baojs](https://github.com/mattreid1/baojs)|49905|56162|44170|49382|
  



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

