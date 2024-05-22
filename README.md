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
Created At : Wed May 22 2024, 12:39:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47408|50988|46335|44902|
|[fast](https://github.com/danteissaias/fast)|47367|51911|44773|45417|
|[hono](https://github.com/honojs/hono)|46882|49262|47933|43452|
|[oak](https://github.com/oakserver/oak)|27759|29349|28044|25885|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24793|31760|22612|20008|
|[fastify](https://github.com/fastify/fastify)|15992|16467|15642|15867|
|[koa](https://github.com/koajs/koa)|14240|15182|13511|14026|
|[express](https://github.com/expressjs/express)|6148|6291|5789|6365|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77193|85496|78834|67249|
|[nhttp](https://github.com/nhttp/nhttp)|63338|80787|54213|55015|
|[hono](https://github.com/honojs/hono)|57784|61037|59520|52794|
|[baojs](https://github.com/mattreid1/baojs)|36651|43537|30736|35681|
  



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

