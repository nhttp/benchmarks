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
Created At : Tue Nov 19 2024, 12:53:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47799|51649|47127|44620|
|[hono](https://github.com/honojs/hono)|47722|50860|48620|43687|
|[fast](https://github.com/danteissaias/fast)|47426|51932|44158|46188|
|[oak](https://github.com/oakserver/oak)|26031|26925|25607|25562|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24360|29610|22616|20854|
|[fastify](https://github.com/fastify/fastify)|16638|17123|16348|16444|
|[koa](https://github.com/koajs/koa)|14173|15158|13311|14050|
|[express](https://github.com/expressjs/express)|6147|6341|5767|6333|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78710|84798|79038|72293|
|[hono](https://github.com/honojs/hono)|65254|78140|61409|56214|
|[nhttp](https://github.com/nhttp/nhttp)|62151|85990|47801|52663|
|[baojs](https://github.com/mattreid1/baojs)|36298|43685|35720|29490|
  



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

