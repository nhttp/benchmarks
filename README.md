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
Created At : Tue Sep 10 2024, 12:46:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48787|51426|49195|45741|
|[fast](https://github.com/danteissaias/fast)|48155|53357|45954|45155|
|[hono](https://github.com/honojs/hono)|48138|51625|48494|44294|
|[oak](https://github.com/oakserver/oak)|26451|27529|26030|25794|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25438|32191|23054|21068|
|[fastify](https://github.com/fastify/fastify)|16751|17053|16674|16526|
|[koa](https://github.com/koajs/koa)|14096|14699|13163|14426|
|[express](https://github.com/expressjs/express)|6470|6528|6210|6671|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65911|78568|74889|44277|
|[hono](https://github.com/honojs/hono)|63891|78166|62716|50791|
|[nhttp](https://github.com/nhttp/nhttp)|59376|82568|46473|49087|
|[baojs](https://github.com/mattreid1/baojs)|37754|45175|36476|31611|
  



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

