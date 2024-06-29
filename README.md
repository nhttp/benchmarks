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
Created At : Sat Jun 29 2024, 12:40:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48550|52412|48451|44788|
|[fast](https://github.com/danteissaias/fast)|48159|52407|45603|46466|
|[hono](https://github.com/honojs/hono)|48055|51390|49359|43415|
|[oak](https://github.com/oakserver/oak)|26605|27530|25765|26521|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24748|30843|22916|20484|
|[fastify](https://github.com/fastify/fastify)|16889|17422|16798|16446|
|[koa](https://github.com/koajs/koa)|14223|15082|13265|14323|
|[express](https://github.com/expressjs/express)|6411|6497|6161|6575|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71346|85371|76823|51843|
|[hono](https://github.com/honojs/hono)|61396|74895|56232|53062|
|[nhttp](https://github.com/nhttp/nhttp)|60959|86367|55355|41156|
|[baojs](https://github.com/mattreid1/baojs)|35732|39176|37243|30778|
  



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

