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
Created At : Mon Jan 29 2024, 12:36:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48136|51748|44521|48138|
|[nhttp](https://github.com/nhttp/nhttp)|47288|50115|46062|45688|
|[hono](https://github.com/honojs/hono)|46655|48864|47764|43337|
|[oak](https://github.com/oakserver/oak)|27321|28768|27363|25833|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24419|30994|22580|19682|
|[fastify](https://github.com/fastify/fastify)|16765|17395|16548|16351|
|[koa](https://github.com/koajs/koa)|14198|14872|13521|14200|
|[express](https://github.com/expressjs/express)|6398|6576|6062|6556|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71623|76665|74789|63415|
|[hono](https://github.com/honojs/hono)|61008|71538|60451|51035|
|[nhttp](https://github.com/nhttp/nhttp)|58827|83710|47928|44843|
|[baojs](https://github.com/mattreid1/baojs)|33198|39160|31471|28964|
  



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

