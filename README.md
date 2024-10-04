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
Created At : Fri Oct 04 2024, 12:49:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47536|50788|47492|44329|
|[hono](https://github.com/honojs/hono)|47446|50509|49322|42507|
|[fast](https://github.com/danteissaias/fast)|46958|52478|42907|45489|
|[oak](https://github.com/oakserver/oak)|25830|26795|25270|25426|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25486|31866|23183|21410|
|[fastify](https://github.com/fastify/fastify)|17327|17745|17225|17012|
|[koa](https://github.com/koajs/koa)|13651|14211|12951|13790|
|[express](https://github.com/expressjs/express)|6293|6508|5963|6407|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64959|82059|67648|45170|
|[nhttp](https://github.com/nhttp/nhttp)|55048|80895|40339|43910|
|[hono](https://github.com/honojs/hono)|51605|62536|46149|46131|
|[baojs](https://github.com/mattreid1/baojs)|35770|40152|37567|29592|
  



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

