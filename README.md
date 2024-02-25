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
Created At : Sun Feb 25 2024, 12:39:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46836|50684|45290|44533|
|[fast](https://github.com/danteissaias/fast)|46561|50305|44326|45051|
|[hono](https://github.com/honojs/hono)|45941|49518|45783|42521|
|[oak](https://github.com/oakserver/oak)|27048|28412|27306|25426|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24615|31722|22789|19335|
|[fastify](https://github.com/fastify/fastify)|16279|16883|16079|15875|
|[koa](https://github.com/koajs/koa)|14283|14878|13579|14392|
|[express](https://github.com/expressjs/express)|6321|6412|6036|6515|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74060|83692|76632|61855|
|[nhttp](https://github.com/nhttp/nhttp)|65000|83678|59320|52003|
|[hono](https://github.com/honojs/hono)|62672|75953|60929|51133|
|[baojs](https://github.com/mattreid1/baojs)|35528|39912|30614|36057|
  



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

