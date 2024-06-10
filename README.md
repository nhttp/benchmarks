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
Created At : Mon Jun 10 2024, 12:42:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48171|51976|47348|45190|
|[hono](https://github.com/honojs/hono)|47836|51539|48286|43684|
|[fast](https://github.com/danteissaias/fast)|47184|52324|43473|45755|
|[oak](https://github.com/oakserver/oak)|26661|27616|26112|26254|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23954|29009|22250|20603|
|[fastify](https://github.com/fastify/fastify)|16616|17100|16603|16146|
|[koa](https://github.com/koajs/koa)|13729|14066|13287|13835|
|[express](https://github.com/expressjs/express)|6291|6406|5951|6515|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|61480|78802|64097|41542|
|[nhttp](https://github.com/nhttp/nhttp)|56334|82286|46211|40505|
|[hono](https://github.com/honojs/hono)|48343|58572|43186|43270|
|[baojs](https://github.com/mattreid1/baojs)|31551|34112|30843|29698|
  



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

