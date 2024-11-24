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
Created At : Sun Nov 24 2024, 12:56:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49337|53893|48509|45608|
|[hono](https://github.com/honojs/hono)|48369|51474|49036|44597|
|[fast](https://github.com/danteissaias/fast)|47746|51694|44931|46612|
|[oak](https://github.com/oakserver/oak)|26586|27509|26013|26237|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24653|30718|22693|20549|
|[fastify](https://github.com/fastify/fastify)|17390|17703|17301|17167|
|[koa](https://github.com/koajs/koa)|14269|14902|13364|14541|
|[express](https://github.com/expressjs/express)|6428|6580|6025|6680|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76248|85567|76833|66344|
|[nhttp](https://github.com/nhttp/nhttp)|58817|83585|45680|47187|
|[hono](https://github.com/honojs/hono)|56436|73161|47402|48744|
|[baojs](https://github.com/mattreid1/baojs)|34133|40050|32568|29781|
  



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

