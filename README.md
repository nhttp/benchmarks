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
Created At : Fri Mar 21 2025, 12:54:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59543|64856|60274|53500|
|[hono](https://github.com/honojs/hono)|58600|64595|58230|52975|
|[fast](https://github.com/danteissaias/fast)|55758|64807|46612|55855|
|[oak](https://github.com/oakserver/oak)|27664|28348|27433|27210|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39119|45853|39066|32437|
|[fastify](https://github.com/fastify/fastify)|25033|25188|24167|25744|
|[koa](https://github.com/koajs/koa)|17069|17747|16154|17305|
|[express](https://github.com/expressjs/express)|7087|7382|6588|7292|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78327|90675|78260|66047|
|[nhttp](https://github.com/nhttp/nhttp)|71508|94673|60624|59226|
|[hono](https://github.com/honojs/hono)|66738|77930|60965|61320|
|[baojs](https://github.com/mattreid1/baojs)|49195|54260|46712|46614|
  



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

