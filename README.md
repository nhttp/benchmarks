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
Created At : Tue Dec 26 2023, 12:36:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45763|49895|43853|43540|
|[nhttp](https://github.com/nhttp/nhttp)|45751|49341|44650|43262|
|[hono](https://github.com/honojs/hono)|44998|47759|45034|42202|
|[fastro](https://github.com/fastrodev/fastro)|23667|48094|11416|11491|
|[oak](https://github.com/oakserver/oak)|20608|21896|20429|19500|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25641|32040|23379|21505|
|[fastify](https://github.com/fastify/fastify)|15724|16112|15511|15548|
|[koa](https://github.com/koajs/koa)|14136|14511|13502|14395|
|[express](https://github.com/expressjs/express)|6299|6437|5977|6483|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69337|78533|73326|56153|
|[nhttp](https://github.com/nhttp/nhttp)|62153|81245|58900|46315|
|[hono](https://github.com/honojs/hono)|61475|71468|57733|55224|
|[baojs](https://github.com/mattreid1/baojs)|36417|42702|36303|30247|
  



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

