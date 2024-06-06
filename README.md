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
Created At : Thu Jun 06 2024, 12:40:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49774|54271|48389|46661|
|[fast](https://github.com/danteissaias/fast)|48520|52644|46644|46273|
|[hono](https://github.com/honojs/hono)|48223|50657|50126|43887|
|[oak](https://github.com/oakserver/oak)|27198|28378|26645|26570|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24478|30229|22453|20753|
|[fastify](https://github.com/fastify/fastify)|16908|17509|16564|16652|
|[koa](https://github.com/koajs/koa)|14495|15343|13569|14573|
|[express](https://github.com/expressjs/express)|6381|6552|6057|6533|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71635|85362|75680|53862|
|[nhttp](https://github.com/nhttp/nhttp)|58141|81992|49230|43202|
|[hono](https://github.com/honojs/hono)|56129|67803|52855|47729|
|[baojs](https://github.com/mattreid1/baojs)|33265|38706|29669|31420|
  



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

