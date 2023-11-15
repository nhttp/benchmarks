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
Created At : Wed Nov 15 2023, 12:37:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45687|50065|42570|44425|
|[nhttp](https://github.com/nhttp/nhttp)|44815|47918|44256|42270|
|[hono](https://github.com/honojs/hono)|43153|45722|44065|39673|
|[fastro](https://github.com/fastrodev/fastro)|23210|46811|11595|11224|
|[oak](https://github.com/oakserver/oak)|20611|21755|20456|19622|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27087|33256|24957|23049|
|[fastify](https://github.com/fastify/fastify)|15470|15960|15461|14989|
|[koa](https://github.com/koajs/koa)|13743|14293|12902|14033|
|[express](https://github.com/expressjs/express)|6359|6516|6099|6461|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70567|75320|74625|61755|
|[hono](https://github.com/honojs/hono)|68663|73933|65674|66383|
|[nhttp](https://github.com/nhttp/nhttp)|64324|77385|61223|54365|
|[baojs](https://github.com/mattreid1/baojs)|35092|40186|34891|30199|
  



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

