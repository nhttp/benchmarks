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
Created At : Sat Feb 08 2025, 12:48:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58767|64215|58854|53233|
|[hono](https://github.com/honojs/hono)|55728|59480|57234|50470|
|[fast](https://github.com/danteissaias/fast)|54758|64902|50497|48875|
|[oak](https://github.com/oakserver/oak)|28425|29349|28451|27476|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39952|48400|36172|35284|
|[fastify](https://github.com/fastify/fastify)|24424|25405|25534|22333|
|[koa](https://github.com/koajs/koa)|17796|19057|16080|18252|
|[express](https://github.com/expressjs/express)|7041|7194|6545|7384|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76731|85819|71295|73078|
|[nhttp](https://github.com/nhttp/nhttp)|68479|95665|54010|55762|
|[hono](https://github.com/honojs/hono)|66595|77918|62839|59027|
|[baojs](https://github.com/mattreid1/baojs)|50069|53561|48981|47665|
  



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

