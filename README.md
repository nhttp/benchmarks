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
Created At : Fri Jun 14 2024, 12:40:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48191|52128|47594|44850|
|[hono](https://github.com/honojs/hono)|48056|51701|48984|43484|
|[fast](https://github.com/danteissaias/fast)|47731|51241|44426|47527|
|[oak](https://github.com/oakserver/oak)|26845|27981|26341|26213|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|22865|27879|21522|19194|
|[fastify](https://github.com/fastify/fastify)|16384|16696|16405|16051|
|[koa](https://github.com/koajs/koa)|14232|15112|13405|14180|
|[express](https://github.com/expressjs/express)|6270|6373|6007|6429|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63394|78178|66545|45458|
|[nhttp](https://github.com/nhttp/nhttp)|56377|85228|43839|40065|
|[hono](https://github.com/honojs/hono)|50343|64617|42833|43580|
|[baojs](https://github.com/mattreid1/baojs)|32952|37174|31039|30643|
  



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

