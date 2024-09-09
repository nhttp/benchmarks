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
Created At : Mon Sep 09 2024, 12:49:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47779|52364|46786|44188|
|[hono](https://github.com/honojs/hono)|46788|50881|47356|42126|
|[fast](https://github.com/danteissaias/fast)|46539|50822|45021|43774|
|[oak](https://github.com/oakserver/oak)|25152|26141|24429|24885|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24684|32202|22397|19453|
|[fastify](https://github.com/fastify/fastify)|16223|16340|16144|16185|
|[koa](https://github.com/koajs/koa)|13972|14710|13218|13987|
|[express](https://github.com/expressjs/express)|6098|6225|5813|6257|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66852|76537|67936|56082|
|[nhttp](https://github.com/nhttp/nhttp)|57881|80374|48649|44621|
|[hono](https://github.com/honojs/hono)|53222|67384|44873|47409|
|[baojs](https://github.com/mattreid1/baojs)|33347|38436|28676|32929|
  



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

