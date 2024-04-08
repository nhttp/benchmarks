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
Created At : Mon Apr 08 2024, 12:38:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47485|51043|45863|45548|
|[fast](https://github.com/danteissaias/fast)|47413|50765|44936|46537|
|[hono](https://github.com/honojs/hono)|47347|50263|47706|44072|
|[oak](https://github.com/oakserver/oak)|27181|28609|27296|25637|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24774|31280|22542|20501|
|[fastify](https://github.com/fastify/fastify)|16534|17071|16455|16077|
|[koa](https://github.com/koajs/koa)|14165|15099|13362|14034|
|[express](https://github.com/expressjs/express)|6396|6542|6244|6402|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71975|82554|77650|55721|
|[nhttp](https://github.com/nhttp/nhttp)|65635|84810|62883|49211|
|[hono](https://github.com/honojs/hono)|64836|71362|66537|56608|
|[baojs](https://github.com/mattreid1/baojs)|38937|47569|35418|33823|
  



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

