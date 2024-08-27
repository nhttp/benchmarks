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
Created At : Tue Aug 27 2024, 12:44:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48721|52188|48739|45236|
|[fast](https://github.com/danteissaias/fast)|48360|53092|46192|45795|
|[hono](https://github.com/honojs/hono)|47894|51665|48085|43932|
|[oak](https://github.com/oakserver/oak)|26637|27920|25879|26113|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24304|29718|22700|20494|
|[fastify](https://github.com/fastify/fastify)|16605|16704|16702|16410|
|[koa](https://github.com/koajs/koa)|13850|14597|12891|14061|
|[express](https://github.com/expressjs/express)|6311|6406|6089|6437|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71897|79793|80975|54922|
|[hono](https://github.com/honojs/hono)|63457|78963|58008|53400|
|[nhttp](https://github.com/nhttp/nhttp)|60964|80618|51732|50541|
|[baojs](https://github.com/mattreid1/baojs)|37010|44216|32654|34159|
  



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

