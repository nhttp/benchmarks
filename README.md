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
Created At : Mon Sep 11 2023, 12:35:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64331|70952|61458|60584|
|[hono](https://github.com/honojs/hono)|60356|64165|61653|55251|
|[fast](https://github.com/danteissaias/fast)|57828|68011|56788|48685|
|[fastro](https://github.com/fastrodev/fastro)|26224|65496|6759|6418|
|[oak](https://github.com/oakserver/oak)|19150|20305|19096|18050|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45481|48010|45610|42822|
|[fastify](https://github.com/fastify/fastify)|34918|36462|34885|33406|
|[koa](https://github.com/koajs/koa)|21562|22467|20373|21847|
|[express](https://github.com/expressjs/express)|7512|7938|6714|7883|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70451|69785|69626|71942|
|[hono](https://github.com/honojs/hono)|69783|68709|72736|67905|
|[nhttp](https://github.com/nhttp/nhttp)|68924|69943|70555|66273|
|[baojs](https://github.com/mattreid1/baojs)|49604|52177|48874|47762|
  



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

