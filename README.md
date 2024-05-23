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
Created At : Thu May 23 2024, 12:39:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48248|52487|46971|45287|
|[fast](https://github.com/danteissaias/fast)|47756|51901|44671|46696|
|[hono](https://github.com/honojs/hono)|47414|49457|48212|44573|
|[oak](https://github.com/oakserver/oak)|27974|29665|27966|26291|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25464|32549|22910|20934|
|[fastify](https://github.com/fastify/fastify)|17062|17672|16878|16637|
|[koa](https://github.com/koajs/koa)|14813|15669|13970|14799|
|[express](https://github.com/expressjs/express)|6497|6667|6298|6525|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77153|83340|81800|66319|
|[nhttp](https://github.com/nhttp/nhttp)|66553|81214|60741|57704|
|[hono](https://github.com/honojs/hono)|54640|59967|56065|47888|
|[baojs](https://github.com/mattreid1/baojs)|36869|42179|35246|33183|
  



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

