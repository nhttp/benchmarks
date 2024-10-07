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
Created At : Mon Oct 07 2024, 12:51:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47007|50951|45850|44219|
|[hono](https://github.com/honojs/hono)|46350|50330|46926|41793|
|[fast](https://github.com/danteissaias/fast)|45379|50176|42538|43424|
|[oak](https://github.com/oakserver/oak)|25177|25973|24568|24990|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24991|31604|22737|20631|
|[fastify](https://github.com/fastify/fastify)|16754|17188|16469|16605|
|[koa](https://github.com/koajs/koa)|13319|14148|12569|13241|
|[express](https://github.com/expressjs/express)|6103|6262|5777|6270|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61351|73709|58411|51934|
|[nhttp](https://github.com/nhttp/nhttp)|48950|75591|36592|34667|
|[hono](https://github.com/honojs/hono)|48634|59700|43642|42561|
|[baojs](https://github.com/mattreid1/baojs)|30729|33769|31445|26973|
  



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

